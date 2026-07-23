import { SiteFooter, SiteHeader } from "./site-chrome";

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SiteHeader current="about" />

      <main id="top">
        <section className="hero-image" aria-labelledby="hero-title">
          <h1 className="sr-only" id="hero-title">
            Marcus Leung Yin To — Urban Studies Portfolio
          </h1>
          <img
            src="/hero-marcus.png"
            alt="Marcus Leung urban studies portfolio cover with maps, diagrams and spatial research"
          />
        </section>

        <section className="about section-pad" aria-labelledby="about-title">
          <p className="eyebrow">About / Hong Kong</p>
          <div className="about-copy">
            <h2 id="about-title">Cities, drawn through research, space and stories.</h2>
            <p>
              I am Marcus Leung Yin To, an Urban Studies undergraduate student at The Chinese University of Hong Kong, focusing on urban planning, urban design, transportation, geomatics, cartography and all about cities.
            </p>
            <a className="text-link" href="/projects/">
              View selected projects <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
