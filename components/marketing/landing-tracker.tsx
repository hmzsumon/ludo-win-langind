"use client";

import { useEffect } from "react";

/* ────────── constants ────────── */

const VISITOR_STORAGE_KEY = "ludowin_marketing_visitor_id";
const SESSION_STORAGE_KEY = "ludowin_marketing_session_id";
const CLICK_STORAGE_KEY = "ludowin_marketing_fbclid";
const ATTRIBUTION_STORAGE_KEY = "ludowin_marketing_attribution";
const FREE_PLAY_URL = "https://www.ludowin365.com";

const TRACKED_QUERY_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_campaign_id",
  "campaign_id",
  "utm_adset",
  "utm_adset_id",
  "adset_id",
  "utm_ad",
  "utm_ad_id",
  "ad_id",
  "placement",
  "site_source_name",
  "fbclid",
] as const;

type MarketingAttribution = Record<string, string>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/* ────────── storage helpers ────────── */

const makeId = (): string => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 14)}`;
};

const readStorage = (
  storage: Storage,
  key: string,
  fallback = "",
): string => {
  try {
    return storage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};

const writeStorage = (storage: Storage, key: string, value: string): void => {
  try {
    storage.setItem(key, value);
  } catch {
    // Analytics must never block the landing page.
  }
};

/* ────────── attribution helpers ────────── */

const collectAttribution = (searchParams: URLSearchParams) => {
  const current: MarketingAttribution = {};

  for (const key of TRACKED_QUERY_KEYS) {
    const value = searchParams.get(key)?.trim();

    if (value) {
      current[key] = value.slice(0, 500);
    }
  }

  if (Object.keys(current).length > 0) {
    writeStorage(
      window.localStorage,
      ATTRIBUTION_STORAGE_KEY,
      JSON.stringify(current),
    );

    return current;
  }

  try {
    const stored = readStorage(
      window.localStorage,
      ATTRIBUTION_STORAGE_KEY,
      "{}",
    );

    return JSON.parse(stored) as MarketingAttribution;
  } catch {
    return {};
  }
};

const normalizeSource = (
  attribution: MarketingAttribution,
  referrerHost: string,
): string => {
  const rawSource = String(
    attribution.utm_source || attribution.site_source_name || "",
  ).toLowerCase();

  if (
    rawSource.includes("instagram") ||
    rawSource === "ig" ||
    referrerHost.includes("instagram.com")
  ) {
    return "instagram";
  }

  if (
    attribution.fbclid ||
    rawSource.includes("facebook") ||
    rawSource === "fb" ||
    referrerHost.includes("facebook.com")
  ) {
    return "facebook";
  }

  if (rawSource.includes("meta")) {
    return "meta";
  }

  return rawSource || "direct";
};

const getReferrerHost = (): string => {
  if (!document.referrer) {
    return "";
  }

  try {
    return new URL(document.referrer).hostname.slice(0, 255);
  } catch {
    return "";
  }
};

const buildDestination = (
  attribution: MarketingAttribution,
  visitorId: string,
  sessionId: string,
): string => {
  const destination = new URL(FREE_PLAY_URL);

  for (const [key, value] of Object.entries(attribution)) {
    if (value) {
      destination.searchParams.set(key, value);
    }
  }

  destination.searchParams.set("lw_visitor_id", visitorId);
  destination.searchParams.set("lw_session_id", sessionId);

  return destination.toString();
};

/* ────────── event delivery ────────── */

const sendEvent = (path: string, payload: Record<string, unknown>): void => {
  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    const sent = navigator.sendBeacon(
      path,
      new Blob([body], { type: "application/json" }),
    );

    if (sent) {
      return;
    }
  }

  void fetch(path, {
    method: "POST",
    credentials: "include",
    keepalive: true,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }).catch(() => {
    // Analytics must never interrupt navigation.
  });
};

/* ────────── component ────────── */

export default function LandingTracker(): null {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const attribution = collectAttribution(searchParams);
    const referrerHost = getReferrerHost();

    let visitorId = readStorage(
      window.localStorage,
      VISITOR_STORAGE_KEY,
    );

    if (!visitorId) {
      visitorId = makeId();
      writeStorage(window.localStorage, VISITOR_STORAGE_KEY, visitorId);
    }

    const currentFbclid = attribution.fbclid || "";
    const previousFbclid = readStorage(
      window.sessionStorage,
      CLICK_STORAGE_KEY,
    );

    let sessionId = readStorage(
      window.sessionStorage,
      SESSION_STORAGE_KEY,
    );

    if (!sessionId || (currentFbclid && currentFbclid !== previousFbclid)) {
      sessionId = makeId();
      writeStorage(window.sessionStorage, SESSION_STORAGE_KEY, sessionId);
    }

    if (currentFbclid) {
      writeStorage(window.sessionStorage, CLICK_STORAGE_KEY, currentFbclid);
    }

    const source = normalizeSource(attribution, referrerHost);
    const destination = buildDestination(attribution, visitorId, sessionId);

    const basePayload = {
      visitorId,
      sessionId,
      source,
      medium: attribution.utm_medium || "",
      fbclid: attribution.fbclid || "",
      campaignId:
        attribution.utm_campaign_id || attribution.campaign_id || "",
      campaignName: attribution.utm_campaign || "",
      adSetId: attribution.utm_adset_id || attribution.adset_id || "",
      adSetName: attribution.utm_adset || "",
      adId: attribution.utm_ad_id || attribution.ad_id || "",
      adName: attribution.utm_ad || "",
      placement: attribution.placement || "",
      referrerHost,
      landingPath: window.location.pathname,
      language: navigator.language || "",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
      screenWidth: window.screen?.width || 0,
      screenHeight: window.screen?.height || 0,
    };

    sendEvent("/api/v1/traffic/visit", basePayload);

    const trackedLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("a[data-track-cta]"),
    );

    const clickHandlers = trackedLinks.map((link) => {
      link.href = destination;

      const handler = (event: MouseEvent) => {
        event.preventDefault();

        const ctaLocation = link.dataset.ctaLocation || "unknown";

        sendEvent("/api/v1/traffic/click", {
          visitorId,
          sessionId,
          ctaLocation,
        });

        window.fbq?.("trackCustom", "LandingCtaClick", {
          cta_location: ctaLocation,
          content_name: "LudoWin Free Play",
        });

        window.location.assign(destination);
      };

      link.addEventListener("click", handler);

      return { link, handler };
    });

    return () => {
      for (const { link, handler } of clickHandlers) {
        link.removeEventListener("click", handler);
      }
    };
  }, []);

  return null;
}
