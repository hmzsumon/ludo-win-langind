const FREE_PLAY_URL = "https://www.ludowin365.com";

const features = [
  {
    icon: "⚡",
    title: "Quick start",
    description: "Open the game, choose your players and begin in seconds.",
  },
  {
    icon: "🎲",
    title: "Classic rules",
    description: "The familiar Ludo experience, made smooth for the web.",
  },
  {
    icon: "📱",
    title: "Made for mobile",
    description: "Comfortable controls and a clean layout on every screen.",
  },
];

const steps = [
  ["01", "Open the game", "Tap Play Free from any phone or modern browser."],
  [
    "02",
    "Choose players",
    "Set up a local match for two, three or four players.",
  ],
  ["03", "Roll and race", "Move every token home before the other players."],
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function BoardVisual() {
  return (
    <div
      className="board-stage"
      aria-label="Colourful classic Ludo board preview"
    >
      <span className="orbit orbit-one" />
      <span className="orbit orbit-two" />
      <span className="floating-die die-one">⚄</span>
      <span className="floating-die die-two">⚂</span>

      <div className="board-shell">
        <div className="ludo-board" aria-hidden="true">
          <div className="home home-red">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="home home-green">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="board-cross board-cross-vertical" />
          <div className="board-cross board-cross-horizontal" />
          <div className="board-centre">
            <i className="triangle triangle-red" />
            <i className="triangle triangle-green" />
            <i className="triangle triangle-yellow" />
            <i className="triangle triangle-blue" />
            <b>★</b>
          </div>
          <div className="home home-blue">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="home home-yellow">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className="live-badge">
        <span />
        Free to play
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="LudoWin Free Play home">
          <BrandMark />
          <span className="brand-copy">
            <strong>LUDOWIN</strong>
            <small>FREE PLAY</small>
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href={FREE_PLAY_URL}>How to play</a>
        </nav>

        <a className="header-cta" href={FREE_PLAY_URL}>
          Play Free
          <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Classic board game · Ready when you are
          </div>

          <h1>
            Roll. Race.
            <span>Rule the board.</span>
          </h1>

          <p>
            A bright, fast and familiar Ludo experience built for relaxed play
            with friends and family.
          </p>

          <div className="hero-actions">
            <a className="primary-cta" href={FREE_PLAY_URL}>
              <span className="cta-die">⚄</span>
              Play Free
              <ArrowIcon />
            </a>
            <a className="secondary-cta" href="#how-to-play">
              See how it works
            </a>
          </div>

          <div className="hero-points" aria-label="Game highlights">
            <span>
              <i>✓</i> No download
            </span>
            <span>
              <i>✓</i> 2–4 players
            </span>
            <span>
              <i>✓</i> Instant access
            </span>
          </div>
        </div>

        <BoardVisual />
      </section>

      <section className="feature-section" id="features">
        <div className="section-heading">
          <span>WHY PLAY LUDOWIN</span>
          <h2>Everything you need for a great match.</h2>
          <p>
            Simple to start, satisfying to master and comfortable everywhere.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="steps-section" id="how-to-play">
        <div className="section-heading compact">
          <span>HOW TO PLAY</span>
          <h2>Three steps to the first roll.</h2>
        </div>

        <div className="steps-grid">
          {steps.map(([number, title, description]) => (
            <article className="step-card" key={number}>
              <span className="step-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="mini-label">THE BOARD IS READY</span>
          <h2>Bring everyone together for one more game.</h2>
          <p>Open LudoWin on your phone and start a classic local match.</p>
        </div>
        <a className="primary-cta light" href={FREE_PLAY_URL}>
          Play Free
          <ArrowIcon />
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <BrandMark />
          <span className="brand-copy">
            <strong>LUDOWIN</strong>
            <small>FREE PLAY</small>
          </span>
        </a>
        <p>Classic Ludo for entertainment and social play.</p>
        <div>
          <a href="#features">Features</a>
          <a href="#how-to-play">How to play</a>
          <a href="https://t.me/ludowin365" rel="noreferrer">
            Support
          </a>
        </div>
      </footer>

      <a className="mobile-cta" href={FREE_PLAY_URL}>
        <span>⚄</span>
        Play Free
        <ArrowIcon />
      </a>
    </main>
  );
}
