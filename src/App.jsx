const audiences = ['Engineering Students', 'Tech Professionals', 'Campus Innovators', 'Project Builders'];

const highlights = [
  {
    value: '01',
    title: 'Training Programs',
    description: 'Regular live learning experiences that connect academic concepts to emerging tools, platforms, and real industry workflows.',
  },
  {
    value: '02',
    title: 'Innovation Contests',
    description: 'Challenge-driven experiences that push members to experiment, solve problems, and stay motivated through creation.',
  },
  {
    value: '03',
    title: 'Awards & Recognition',
    description: 'A visible way to celebrate progress, reward ambition, and spotlight people who keep building beyond the classroom.',
  },
];

const pillars = [
  {
    tag: 'Learn',
    title: 'Industry-relevant upskilling that feels practical from day one',
    description:
      'Techvruk packages fast-moving technology topics into structured programs so learners can keep pace with what modern engineering teams are actually using.',
    chips: ['Hands-on sessions', 'Emerging tech', 'Guided cohorts'],
  },
  {
    tag: 'Compete',
    title: 'Innovation contests that turn passive learning into action',
    description:
      'Members get chances to test ideas, collaborate under pressure, and build confidence through themed challenges and innovation sprints.',
    chips: ['Challenge sprints', 'Problem solving', 'Peer energy'],
  },
  {
    tag: 'Recognize',
    title: 'Awards that keep momentum high and effort visible',
    description:
      'Recognition creates motivation. It gives members a reason to stay engaged, showcase their work, and aim for higher-impact outcomes.',
    chips: ['Spotlights', 'Achievement culture', 'Visible growth'],
  },
  {
    tag: 'Connect',
    title: 'A network of like-minded builders ready to collaborate',
    description:
      'The platform brings together students, professionals, mentors, and ambitious teams who want to learn together and work on future-ready projects.',
    chips: ['Community circles', 'Collaboration', 'Project teams'],
  },
];

const journey = [
  {
    step: 'Discover',
    title: 'Understand what to learn next',
    description: 'First-time visitors quickly see how Techvruk connects current studies with the technologies shaping the future of engineering.',
  },
  {
    step: 'Upskill',
    title: 'Join guided training experiences',
    description: 'Programs create a structured path for growing beyond theory and building confidence with modern tools and systems.',
  },
  {
    step: 'Build',
    title: 'Apply knowledge in contests and projects',
    description: 'Challenges encourage experimentation, teamwork, and practical problem solving instead of passive consumption.',
  },
  {
    step: 'Belong',
    title: 'Grow inside a motivated network',
    description: 'Recognition, peer connections, and collaboration opportunities keep members engaged long after the first program ends.',
  },
];

const communityGroups = [
  {
    label: 'Students',
    title: 'Break out of syllabus-only learning with exposure to fast-moving technologies, guided practice, and innovation culture.',
  },
  {
    label: 'Professionals',
    title: 'Stay relevant, sharpen new skills, and connect with communities exploring what modern engineering roles demand next.',
  },
  {
    label: 'Clubs & Institutions',
    title: 'Create more meaningful engagement through training, contests, and recognition formats that energize technical communities.',
  },
];

const focusAreas = [
  {
    title: 'AI & Intelligent Systems',
    description: 'Applied AI, machine learning workflows, automation thinking, and future-facing problem solving.',
  },
  {
    title: 'Cloud, Web & Product Engineering',
    description: 'Modern application building, deployment, developer workflows, and collaborative product execution.',
  },
  {
    title: 'Robotics, Embedded & Smart Hardware',
    description: 'Hands-on exploration of systems that connect code, electronics, automation, and real-world engineering use cases.',
  },
  {
    title: 'Innovation Leadership',
    description: 'Design thinking, team collaboration, presentation skills, and the mindset required to take ideas further.',
  },
];

const launchpadChips = ['Live cohorts', 'Future-ready projects', 'Peer networking', 'Award moments', 'Mentor energy', 'Innovation culture'];
const momentumLoop = ['Learn emerging tools', 'Practice with guidance', 'Compete with purpose', 'Collaborate on what comes next'];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#top">
          <span className="brand-mark">TV</span>
          <div>
            <p>Techvruk</p>
            <span>Future-ready learning for engineers and technologists</span>
          </div>
        </a>

        <nav className="nav">
          <a href="#platform">Platform</a>
          <a href="#journey">Journey</a>
          <a href="#community">Community</a>
          <a href="#contact">Join</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <span className="eyebrow">Training programs, innovation contests, awards, and networking</span>
            <h1>Where engineering talent grows into future-ready innovators.</h1>
            <p className="hero-text">
              Techvruk is built for engineering and technology students, professionals, and communities who want more than passive learning. It bridges
              academic foundations with emerging industry technologies through regular training, collaborative challenges, recognition, and a strong
              innovation network.
            </p>

            <div className="audience-pills">
              {audiences.map((audience) => (
                <span key={audience} className="audience-pill">
                  {audience}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <a className="primary-button" href="#platform">
                Explore the platform
              </a>
              <a className="secondary-button" href="#tracks">
                View focus areas
              </a>
            </div>

            <div className="hero-highlights">
              {highlights.map((item) => (
                <article key={item.title} className="highlight-card">
                  <span>{item.value}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-board">
            <div className="hero-board-inner">
              <div className="board-header">
                <span className="eyebrow board-eyebrow">Techvruk Launchpad</span>
                <h2>A platform designed to create momentum, not just attendance.</h2>
              </div>

              <article className="board-card board-card-primary">
                <span className="card-label">Inside the experience</span>
                <div className="chip-grid">
                  {launchpadChips.map((chip) => (
                    <span key={chip} className="board-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </article>

              <article className="board-card">
                <span className="card-label">Momentum loop</span>
                <div className="flow-list">
                  {momentumLoop.map((item, index) => (
                    <div key={item} className="flow-item">
                      <strong>{index + 1}</strong>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>

              <div className="board-foot">
                <article className="signal-card signal-card-accent">
                  <span className="card-label">Why it matters</span>
                  <p>It gives learners a clearer path from curiosity to capability to collaboration.</p>
                </article>
                <article className="signal-card">
                  <span className="card-label">Who it serves</span>
                  <p>Students, professionals, institutions, clubs, and teams who want innovation to feel active and achievable.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="signal-strip">
          <p>
            Techvruk brings learning, recognition, and collaboration into one experience so first-time visitors immediately understand the platform's
            purpose and energy.
          </p>
        </section>

        <section className="section" id="platform">
          <div className="section-heading">
            <span className="eyebrow">Why Techvruk</span>
            <h2>A complete innovation ecosystem, not another one-off training page.</h2>
            <p>
              The platform is positioned to feel active, aspirational, and community-driven. Every section reinforces that Techvruk helps members
              upskill, stay motivated, earn visibility, and collaborate on future-ready ideas.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="pillar-card">
                <span className="pillar-tag">{pillar.tag}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <div className="pillar-chip-row">
                  {pillar.chips.map((chip) => (
                    <span key={chip} className="pillar-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="journey">
          <div className="section-heading compact">
            <span className="eyebrow">Member Journey</span>
            <h2>The experience is designed as a growth loop that keeps people learning and building.</h2>
          </div>

          <div className="journey-shell">
            <div className="journey-grid">
              {journey.map((item, index) => (
                <article key={item.title} className="journey-card">
                  <span className="journey-index">0{index + 1}</span>
                  <strong>{item.step}</strong>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <aside className="journey-note">
              <span className="card-label">The gap Techvruk solves</span>
              <p>
                Many learners have theory, but not enough direction, practice, visibility, or peer momentum around emerging technologies. Techvruk
                gives all four in one connected experience.
              </p>
            </aside>
          </div>
        </section>

        <section className="section" id="community">
          <div className="community-layout">
            <div className="section-heading compact">
              <span className="eyebrow">Community Value</span>
              <h2>Built for people who want to upskill, network, and work on meaningful projects together.</h2>
              <p>
                Techvruk is not only about consuming sessions. It creates a stronger sense of belonging for ambitious learners and professionals who
                want to keep moving toward future-ready work.
              </p>

              <div className="community-badges">
                <span>Networking</span>
                <span>Recognition</span>
                <span>Collaboration</span>
                <span>Future-ready growth</span>
              </div>
            </div>

            <div className="community-grid">
              {communityGroups.map((group) => (
                <article key={group.label} className="community-card">
                  <span>{group.label}</span>
                  <p>{group.title}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="tracks">
          <div className="section-heading">
            <span className="eyebrow">Focus Areas</span>
            <h2>Flexible program themes across the technologies shaping modern engineering careers.</h2>
          </div>

          <div className="tracks-grid">
            {focusAreas.map((area) => (
              <article key={area.title} className="track-card">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="cta-panel">
            <div>
              <span className="eyebrow">Landing Page Direction</span>
              <h2>Position Techvruk as the place where ambitious engineers learn, compete, connect, and get recognized.</h2>
            </div>

            <div className="cta-copy">
              <p>
                This concept is intentionally built to feel energetic, credible, and future-facing so a first-time visitor immediately understands the
                brand promise and the value of joining the platform.
              </p>

              <div className="hero-actions cta-actions">
                <a className="primary-button" href="#top">
                  Revisit the hero
                </a>
                <a className="secondary-button" href="#platform">
                  Explore key sections
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
