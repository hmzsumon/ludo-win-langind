/* eslint-disable @next/next/no-img-element */

const APK_URL = "/downloads/LudoWin-latest.apk";
const MAIN_SITE_URL = "https://www.ludowin365.com";
const SUPPORT_URL = "https://t.me/ludowin365";

const screenshots = [
  {
    src: "/app/ludowin-screen-1.webp",
    width: 720,
    height: 1080,
    alt: "LudoWin Classic ও Master মোডের বাংলা প্রচ্ছদ",
  },
  {
    src: "/app/ludowin-screen-2.webp",
    width: 720,
    height: 1080,
    alt: "LudoWin মোবাইল অ্যাপ ও গেম ফিচারের প্রচ্ছদ",
  },
  {
    src: "/app/ludowin-screen-3.webp",
    width: 720,
    height: 1080,
    alt: "LudoWin মোবাইল গেম অভিজ্ঞতার বাংলা প্রচ্ছদ",
  },
];

const features = [
  {
    icon: "🎲",
    title: "Classic ও Master",
    text: "পরিচিত Classic নিয়ম অথবা দ্রুতগতির Master মোড থেকে নিজের পছন্দ বেছে নিন।",
  },
  {
    icon: "🌐",
    title: "অনলাইন খেলা",
    text: "ইন্টারনেট সংযোগে অন্য খেলোয়াড়ের সঙ্গে দ্রুত ম্যাচ খুঁজে খেলা শুরু করুন।",
  },
  {
    icon: "📴",
    title: "অফলাইন সুবিধা",
    text: "ইন্টারনেট না থাকলেও স্থানীয় অফলাইন মোডে লুডু উপভোগ করুন।",
  },
  {
    icon: "👥",
    title: "সহজ ২-প্লেয়ার অভিজ্ঞতা",
    text: "পরিষ্কার কন্ট্রোল ও মোবাইল-উপযোগী বোর্ডে দুই খেলোয়াড়ের ম্যাচ খেলুন।",
  },
  {
    icon: "🔔",
    title: "আপডেট ও নোটিফিকেশন",
    text: "অ্যাকাউন্ট ও গেমের গুরুত্বপূর্ণ আপডেট এক জায়গায় দেখুন।",
  },
  {
    icon: "🛟",
    title: "সহায়তা পাওয়া সহজ",
    text: "কোনো প্রশ্ন বা সমস্যায় সাপোর্ট চ্যানেলে দ্রুত যোগাযোগ করুন।",
  },
];

const installSteps = [
  {
    number: "১",
    title: "APK ডাউনলোড করুন",
    text: "“দ্রুত ইনস্টল” চাপলে ৪.০ MB-এর LudoWin APK সরাসরি ডাউনলোড হবে।",
  },
  {
    number: "২",
    title: "ডাউনলোড ফাইল খুলুন",
    text: "ব্রাউজারের Downloads অথবা ফোনের Files অ্যাপ থেকে LudoWin-latest.apk খুলুন।",
  },
  {
    number: "৩",
    title: "Install চাপুন",
    text: "ফোন অনুমতি চাইলে এই ব্রাউজারের জন্য একবার “Install unknown apps” অনুমতি দিয়ে Install করুন।",
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
        <strong>দ্রুত ইনস্টল</strong>
        <small>Android APK · ৪.০ MB</small>
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
      মেইন সাইটে যান
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
        <a href={href} aria-label={`${children} বিস্তারিত দেখুন`}>
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
          <a className="mini-brand" href="#top" aria-label="LudoWin হোম">
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
            সহায়তা
          </a>
        </header>

        <section className="app-hero" id="top">
          <div className="app-identity">
            <img
              className="app-icon"
              src="/app/ludowin-icon.webp"
              width="112"
              height="112"
              alt="LudoWin অ্যাপ আইকন"
            />
            <div>
              <p className="eyebrow">অফিশিয়াল অ্যান্ড্রয়েড অ্যাপ</p>
              <h1>LudoWin</h1>
              <a href={MAIN_SITE_URL} target="_blank" rel="noopener noreferrer">
                LUDOWIN365
              </a>
              <span className="verified-badge">✓ সরাসরি ডাউনলোড</span>
            </div>
          </div>

          <div className="app-facts" aria-label="অ্যাপের তথ্য">
            <div>
              <strong>Android</strong>
              <span>প্ল্যাটফর্ম</span>
            </div>
            <div>
              <strong>৪.০ MB</strong>
              <span>APK সাইজ</span>
            </div>
            <div>
              <strong>১৮+</strong>
              <span>বয়সসীমা</span>
            </div>
          </div>

          <div className="primary-actions">
            <DownloadButton location="hero" />
            <MainSiteButton />
          </div>

          <p className="download-help">
            ডাউনলোড শুরু না হলে{" "}
            <a href={APK_URL} download="LudoWin-latest.apk">
              এখানে আবার চাপুন
            </a>
            । Android নিরাপত্তার কারণে প্রথমবার একটি অনুমতি চাইতে পারে।
          </p>
        </section>

        <section className="screens-section" aria-labelledby="screens-title">
          <div className="section-title" id="screens-title">
            <h2>অ্যাপটি এক নজরে</h2>
            <span className="swipe-hint">স্ক্রল করুন →</span>
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
          <SectionTitle>এই অ্যাপ সম্পর্কে</SectionTitle>
          <p className="lead-copy">
            LudoWin হলো মোবাইলের জন্য তৈরি একটি রঙিন ও সহজ লুডু অভিজ্ঞতা।
            Classic ও Master—দুটি আলাদা মোডে অনলাইন প্রতিপক্ষের সঙ্গে অথবা
            অফলাইনে খেলা যায়। দ্রুত ম্যাচ, পরিচিত নিয়ম, পরিষ্কার কন্ট্রোল এবং
            সহজ সাপোর্ট—সবকিছু এক অ্যাপে পাওয়া যাবে।
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

          <div className="chips" aria-label="অ্যাপের বিভাগ">
            <span>বোর্ড গেম</span>
            <span>লুডু</span>
            <span>অনলাইন</span>
            <span>অফলাইন</span>
            <span>মোবাইল গেম</span>
          </div>
        </section>

        <section className="content-section install-section" id="install-guide">
          <SectionTitle>সহজ ইনস্টলেশন</SectionTitle>
          <p className="section-intro">
            Play Store-এর বাইরে APK ইনস্টল করার সময় Android যে নিরাপত্তা ধাপ
            দেখায়, নিচের নিয়ম অনুসরণ করলে কয়েক মিনিটেই শেষ হবে।
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
              <strong>নিরাপত্তা টিপ:</strong> শুধু এই অফিসিয়াল পেজ থেকে APK
              ডাউনলোড করুন। ইনস্টল শেষে চাইলে “Install unknown apps” অনুমতি আবার
              বন্ধ করে দিতে পারেন।
            </p>
          </div>
        </section>

        <section className="content-section safety-section" id="safety">
          <SectionTitle>অ্যাকাউন্ট ও নিরাপত্তা</SectionTitle>
          <p className="section-intro">
            অ্যাকাউন্ট তৈরি ও পুনরুদ্ধারে মোবাইল বা ইমেইল যাচাইয়ের ব্যবস্থা আছে।
            অ্যাপের আপডেট, নোটিফিকেশন ও প্রোফাইল তথ্য এক জায়গা থেকে দেখা যায়।
          </p>
          <div className="safety-card">
            <div>
              <span aria-hidden="true">✓</span>
              <p>
                <strong>OTP যাচাই</strong>
                বাংলাদেশি মোবাইল নম্বর এবং প্রয়োজন অনুযায়ী ইমেইল যাচাই।
              </p>
            </div>
            <div>
              <span aria-hidden="true">✓</span>
              <p>
                <strong>নিজস্ব প্রোফাইল</strong>
                অ্যাকাউন্ট, নোটিফিকেশন ও গেম-সংক্রান্ত তথ্য সহজে দেখুন।
              </p>
            </div>
            <div>
              <span aria-hidden="true">✓</span>
              <p>
                <strong>সাপোর্ট</strong>
                কোনো সমস্যায় অফিসিয়াল সাপোর্ট চ্যানেলে যোগাযোগ করুন।
              </p>
            </div>
          </div>
        </section>

        <section className="content-section responsible-section">
          <SectionTitle>দায়িত্বশীল ব্যবহার</SectionTitle>
          <div className="responsible-card">
            <span className="age-badge">১৮+</span>
            <p>
              LudoWin প্রাপ্তবয়স্কদের বিনোদনের জন্য। অ্যাপের কিছু অংশে ভার্চুয়াল
              ডায়মন্ড ও ঐচ্ছিক লেনদেন থাকতে পারে। কোনো ফলাফল বা পুরস্কার নিশ্চিত
              নয়। ব্যবহারের আগে প্রযোজ্য শর্ত এবং স্থানীয় আইন যাচাই করুন।
            </p>
          </div>
        </section>

        <section className="final-download">
          <img src="/app/ludowin-icon.webp" width="80" height="80" alt="" />
          <div>
            <p>খেলার জন্য প্রস্তুত?</p>
            <h2>এখনই LudoWin ইনস্টল করুন</h2>
          </div>
          <DownloadButton className="final-install-button" location="footer" />
          <MainSiteButton />
        </section>

        <footer>
          <div>
            <strong>LudoWin</strong>
            <span>Android-এর জন্য Classic ও Master লুডু</span>
          </div>
          <nav aria-label="ফুটার লিংক">
            <a href="#about">অ্যাপ সম্পর্কে</a>
            <a href="#install-guide">ইনস্টল গাইড</a>
            <a href="#safety">নিরাপত্তা</a>
            <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer">
              সাপোর্ট
            </a>
          </nav>
          <p>© ২০২৬ LudoWin · সর্বস্বত্ব সংরক্ষিত</p>
        </footer>
      </div>

      <div className="mobile-download-bar">
        <div>
          <strong>LudoWin</strong>
          <span>Android · ৪.০ MB</span>
        </div>
        <a
          href={APK_URL}
          download="LudoWin-latest.apk"
          type="application/vnd.android.package-archive"
        >
          ইনস্টল
        </a>
      </div>
    </main>
  );
}
