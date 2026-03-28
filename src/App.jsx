const servicePills = [
  'Website Design',
  'Landing Pages',
  'Video Editing',
  'Paid Advertising',
  'Social Media Management',
];

const services = [
  {
    title: 'Website Design',
    description:
      'Clean, premium websites for real estate brokers and agencies that build trust fast and make every listing, service, and testimonial easier to sell.',
  },
  {
    title: 'Landing Page Design',
    description:
      'Conversion-focused landing pages for lead generation, project launches, valuation campaigns, and ad traffic that needs one clear action.',
  },
  {
    title: 'Video Editing',
    description:
      'Listing reels, talking-head edits, promo cuts, and branded property videos that help listings feel more aspirational and polished.',
  },
  {
    title: 'Paid Advertising',
    description:
      'Meta and Google ad campaigns connected to pages, offers, and reporting so your brokerage or agency can scale enquiries with clarity.',
  },
  {
    title: 'Social Media Management',
    description:
      'Content planning, caption systems, reel publishing, and brand consistency for real estate businesses that want to stay visible without chaos.',
  },
];

const results = [
  { value: '5', label: 'core services under one real estate-focused partner' },
  { value: '14d', label: 'average launch window for a focused landing page' },
  { value: '92%', label: 'of clients continue into repeat work or monthly retainers' },
];

const clientTypes = [
  {
    label: 'Independent Brokers',
    title: 'Personal-brand websites, lead funnels, and content systems that help solo brokers look established.',
    stat: 'Positioning, landing pages, listing reels',
  },
  {
    label: 'Real Estate Agencies',
    title: 'Agency sites and campaign pages designed to support multiple agents, service lines, and enquiry types.',
    stat: 'Web design, ads, team-first messaging',
  },
  {
    label: 'Project & Developer Campaigns',
    title: 'Launch-ready pages and creative built for project marketing, pre-launch registrations, and buyer interest.',
    stat: 'Campaign pages, paid ads, asset production',
  },
];

const testimonials = [
  {
    quote:
      'They gave our brokerage a sharper brand, faster pages, and ad creatives our team was finally proud to send traffic to.',
    name: 'Aarav Mehta',
    role: 'Managing Director, Northline Realty',
  },
  {
    quote:
      'The landing page felt like a premium sales experience, not another template. Lead quality improved within the first week.',
    name: 'Sophia Clarke',
    role: 'Growth Lead, Montero Estates',
  },
];

const steps = [
  'We align on your audience, service mix, and the exact type of enquiry you want to generate.',
  'We design the page, shape the messaging, and build the creative assets around your market position.',
  'We launch with a clean handoff or continue as your ongoing partner for ads, content, and updates.',
];

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">EE</span>
          <div>
            <p>Elevate Estates</p>
            <span>Websites, Ads & Content for Real Estate</span>
          </div>
        </div>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Creative and growth services for brokers, agencies, and developers</span>
            <h1>One real estate agency partner for websites, landing pages, ads, video, and social media.</h1>
            <p className="hero-text">
              We help real estate businesses present themselves better online and turn more traffic into enquiries. Whether you need a new website,
              a campaign landing page, listing video edits, paid ads, or full social media support, everything is designed to feel premium and sell clearly.
            </p>

            <div className="service-pills">
              {servicePills.map((pill) => (
                <span key={pill} className="service-pill">
                  {pill}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                Book a discovery call
              </a>
              <a className="secondary-button" href="#work">
                See recent outcomes
              </a>
            </div>

            <div className="results-row">
              {results.map((result) => (
                <article key={result.label} className="result-card">
                  <strong>{result.value}</strong>
                  <span>{result.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-inner">
              <div className="panel-heading">
                <span>Featured Launch Stack</span>
                <strong>Broker Growth Sprint</strong>
              </div>

              <div className="metric-grid">
                <article>
                  <span>Offer</span>
                  <strong>Luxury listing lead funnel</strong>
                </article>
                <article>
                  <span>Creative</span>
                  <strong>Reels, paid ads, landing page</strong>
                </article>
                <article>
                  <span>Goal</span>
                  <strong>Booked consults and valuation requests</strong>
                </article>
                <article>
                  <span>Launch</span>
                  <strong>14 business days</strong>
                </article>
              </div>

              <div className="panel-story">
                <div className="story-card story-card-dark">
                  <span>Positioning</span>
                  <p>Editorial-style design that helps premium inventory feel exclusive before the first call.</p>
                </div>
                <div className="story-card story-card-light">
                  <span>Performance</span>
                  <p>Sharper messaging, faster load times, and clearer calls to action that reduce wasted ad spend.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-band">
          <p>
            Designed for real estate brokers, multi-agent agencies, project marketers, and property businesses that need one team to handle design,
            creative, and lead generation together.
          </p>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <span className="eyebrow">Core Services</span>
            <h2>A service stack built around how real estate brands actually win business online.</h2>
            <p>
              Instead of managing separate freelancers for design, ads, editing, and content, your team gets one streamlined partner that understands
              real estate sales cycles and brand presentation.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article key={service.title} className="service-card">
                <span className="service-index">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="clients">
          <div className="section-heading compact">
            <span className="eyebrow">Who We Help</span>
            <h2>Support shaped around the different ways brokers, agencies, and projects grow.</h2>
            <p>Every engagement is tailored to the way your team acquires leads, presents listings, and follows up with prospects.</p>
          </div>

          <div className="portfolio-grid">
            {clientTypes.map((item) => (
              <article key={item.title} className="portfolio-card">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.stat}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading compact">
            <span className="eyebrow">Our Process</span>
            <h2>Clear, fast, and built for busy real estate teams that need execution without hand-holding.</h2>
          </div>

          <div className="process-layout">
            <div className="process-list">
              {steps.map((step, index) => (
                <article key={step} className="step-card">
                  <strong>{index + 1}</strong>
                  <p>{step}</p>
                </article>
              ))}
            </div>

            <aside className="process-note">
              <span>Why agencies like it</span>
              <p>
                You do not need to coordinate a designer, a video editor, an ad buyer, and a social media manager separately. The workflow is built so
                one partner can carry the visual direction and the performance goals together.
              </p>
            </aside>
          </div>
        </section>

        <section className="section testimonial-section">
          <div className="section-heading compact">
            <span className="eyebrow">Client Perspective</span>
            <h2>What real estate teams say after the new creative goes live.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="testimonial-card">
                <p>"{testimonial.quote}"</p>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta-section" id="contact">
          <div>
            <span className="eyebrow">Ready to scale</span>
            <h2>Need a developer who can design like a real estate service agency, not just ship a generic page?</h2>
          </div>

          <div className="cta-actions">
            <a className="primary-button" href="mailto:hello@elevateestates.co">
              hello@elevateestates.co
            </a>
            <p>Available for website design, landing pages, video editing, advertising, and social media management.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
