/* eslint-disable @next/next/no-img-element */

const APK_URL = "/downloads/LudoWin-latest.apk";
const MAIN_SITE_URL = "https://www.ludowin365.com";
const SUPPORT_URL = "https://tawk.to/chat/6a6e79ca74030a1d4226283f/1juvong0b";

const screenshots = [
  {
    src: "/app/ludowin-screen-1.webp",
    width: 720,
    height: 1080,
    alt: "LudoWin Classic and Master game modes",
  },
  {
    src: "/app/ludowin-screen-2.webp",
    width: 720,
    height: 1080,
    alt: "LudoWin mobile app and game features",
  },
  {
    src: "/app/ludowin-screen-3.webp",
    width: 720,
    height: 1080,
    alt: "LudoWin mobile Ludo gameplay",
  },
];

const features = [
  {
    icon: "🎲",
    title: "Classic & Master",
    text: "Choose between familiar Classic rules and the faster-paced Master mode.",
  },
  {
    icon: "🌐",
    title: "Online Play",
    text: "Find another player online and start a match in moments.",
  },
  {
    icon: "📴",
    title: "Offline Play",
    text: "Enjoy Ludo in local offline mode even without an internet connection.",
  },
  {
    icon: "👥",
    title: "Simple 2-Player Matches",
    text: "Play two-player matches with clear controls and a mobile-friendly board.",
  },
  {
    icon: "🔔",
    title: "Updates & Notifications",
    text: "See important account and game updates in one place.",
  },
  {
    icon: "🛟",
    title: "Easy Support",
    text: "Contact our support team quickly whenever you have a question or issue.",
  },
];

const installSteps = [
  {
    number: "1",
    title: "Download the APK",
    text: "Tap “Quick Install” to download the 4.0 MB LudoWin APK directly.",
  },
  {
    number: "2",
    title: "Open the Downloaded File",
    text: "Open LudoWin-latest.apk from your browser downloads or your phone's Files app.",
  },
  {
    number: "3",
    title: "Tap Install",
    text: "If prompted, allow “Install unknown apps” for this browser once, then tap Install.",
  },
];

function DownloadButton({
  className = "",
  location,
}: {
  className?: string;
  location: string;
}) {
  return (
    <a
      className={`install-button ${className}`.trim()}
      href={APK_URL}
      download="LudoWin-latest.apk"
      data-download-location={location}
      type="application/vnd.android.package-archive"
    >
      <span className="button-icon" aria-hidden="true">
        ↓
      </span>
      <span>
        <strong>Quick Install</strong>
        <small>Android APK · 4.0 MB</small>
      </span>
    </a>
  );
}

function MainSiteButton() {
  return (
    <a
      className="main-site-button"
      href={MAIN_SITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-track-cta
      data-cta-location="main-site"
    >
      <span aria-hidden="true">🌐</span>
      Visit Main Site
      <span className="arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

function SectionTitle({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <div className="section-title">
      <h2>{children}</h2>
      {href ? (
        <a href={href} aria-label={`View ${children} details`}>
          →
        </a>
      ) : (
        <span aria-hidden="true">→</span>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="page-shell">
        <header className="topbar">
          <a className="mini-brand" href="#top" aria-label="LudoWin home">
            <img src="/app/ludowin-icon.webp" width="42" height="42" alt="" />
            <span>
              <strong>LudoWin</strong>
              <small>Android App</small>
            </span>
          </a>
          <a
            className="support-link"
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Help
          </a>
        </header>

        <section className="app-hero" id="top">
          <div className="app-identity">
            <img
              className="app-icon"
              src="/app/ludowin-icon.webp"
              width="112"
              height="112"
              alt="LudoWin app icon"
            />
            <div>
              <p className="eyebrow">Official Android App</p>
              <h1>LudoWin</h1>
              <a href={MAIN_SITE_URL} target="_blank" rel="noopener noreferrer">
                LUDOWIN365
              </a>
              <span className="verified-badge">✓ Direct Download</span>
            </div>
          </div>

          <div className="app-facts" aria-label="App information">
            <div>
              <strong>Android</strong>
              <span>Platform</span>
            </div>
            <div>
              <strong>4.0 MB</strong>
              <span>APK Size</span>
            </div>
            <div>
              <strong>18+</strong>
              <span>Age Rating</span>
            </div>
          </div>

          <div className="primary-actions">
            <DownloadButton location="hero" />
            <MainSiteButton />
          </div>

          <p className="download-help">
            If the download does not start,{" "}
            <a href={APK_URL} download="LudoWin-latest.apk">
              tap here to try again
            </a>
            . Android may request permission the first time for security.
          </p>
        </section>

        <section className="screens-section" aria-labelledby="screens-title">
          <div className="section-title" id="screens-title">
            <h2>App at a Glance</h2>
            <span className="swipe-hint">Scroll →</span>
          </div>
          <div className="screens-rail">
            {screenshots.map((screenshot, index) => (
              <figure
                className={`screen-card screen-${index + 1}`}
                key={screenshot.src}
              >
                <img
                  src={screenshot.src}
                  width={screenshot.width}
                  height={screenshot.height}
                  alt={screenshot.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="content-section" id="about">
          <SectionTitle>About This App</SectionTitle>
          <p className="lead-copy">
            LudoWin is a colourful and easy-to-use Ludo experience designed for
            mobile. Play online against another player or enjoy offline play in
            two distinct modes—Classic and Master. Fast matches, familiar rules,
            clear controls, and easy support are all available in one app.
          </p>

          <div className="feature-list">
            {features.map((feature) => (
              <article className="feature-item" key={feature.title}>
                <span className="feature-icon" aria-hidden="true">
                  {feature.icon}
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="chips" aria-label="App categories">
            <span>Board Game</span>
            <span>Ludo</span>
            <span>Online</span>
            <span>Offline</span>
            <span>Mobile Game</span>
          </div>
        </section>

        <section className="content-section install-section" id="install-guide">
          <SectionTitle>Easy Installation</SectionTitle>
          <p className="section-intro">
            Android shows a few security steps when you install an APK from
            outside the Play Store. Follow the instructions below to finish in
            just a few minutes.
          </p>
          <div className="install-steps">
            {installSteps.map((step) => (
              <article className="install-step" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="install-note">
            <span aria-hidden="true">🛡️</span>
            <p>
              <strong>Security Tip:</strong> Download the APK only from this
              official page. After installation, you can turn off the “Install
              unknown apps” permission again.
            </p>
          </div>
        </section>

        <section className="content-section safety-section" id="safety">
          <SectionTitle>Account & Security</SectionTitle>
          <p className="section-intro">
            Mobile or email verification helps protect account creation and
            recovery. View app updates, notifications, and profile information
            in one place.
          </p>
          <div className="safety-card">
            <div>
              <span aria-hidden="true">✓</span>
              <p>
                <strong>OTP Verification</strong>
                Verify a Bangladesh mobile number or email address when needed.
              </p>
            </div>
            <div>
              <span aria-hidden="true">✓</span>
              <p>
                <strong>Personal Profile</strong>
                Easily view your account, notifications, and game information.
              </p>
            </div>
            <div>
              <span aria-hidden="true">✓</span>
              <p>
                <strong>Support</strong>
                Contact the official support team whenever you need help.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section responsible-section">
          <SectionTitle>Responsible Use</SectionTitle>
          <div className="responsible-card">
            <span className="age-badge">18+</span>
            <p>
              LudoWin is intended for adult entertainment. Some parts of the app
              may include virtual diamonds and optional transactions. No result
              or reward is guaranteed. Review the applicable terms and local
              laws before use.
            </p>
          </div>
        </section>

        <section className="final-download">
          <img src="/app/ludowin-icon.webp" width="80" height="80" alt="" />
          <div>
            <p>Ready to Play?</p>
            <h2>Install LudoWin Now</h2>
          </div>
          <DownloadButton className="final-install-button" location="footer" />
          <MainSiteButton />
        </section>

        <footer>
          <div>
            <strong>LudoWin</strong>
            <span>Classic & Master Ludo for Android</span>
          </div>
          <nav aria-label="Footer links">
            <a href="#about">About the App</a>
            <a href="#install-guide">Install Guide</a>
            <a href="#safety">Security</a>
            <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer">
              Support
            </a>
          </nav>
          <p>© 2026 LudoWin · All rights reserved</p>
        </footer>
      </div>

      <div className="mobile-download-bar">
        <div>
          <strong>LudoWin</strong>
          <span>Android · 4.0 MB</span>
        </div>
        <a
          href={APK_URL}
          download="LudoWin-latest.apk"
          type="application/vnd.android.package-archive"
        >
          Install
        </a>
      </div>
    </main>
  );
}
