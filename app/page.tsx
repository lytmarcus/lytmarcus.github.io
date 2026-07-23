type PortfolioPage = {
  page: string;
  src: string;
  alt: string;
  caption: string;
};

type Project = {
  number: string;
  id: string;
  title: string;
  studio: string;
  location: string;
  description: string;
  pages: PortfolioPage[];
};

const projects: Project[] = [
  {
    number: "01",
    id: "bedford-court",
    title: "Bedford Court",
    studio: "GRMD4302 Urban Planning Workshop",
    location: "Tai Kok Tsui, Hong Kong",
    description:
      "A proposed private redevelopment project for a transitional site in Tai Kok Tsui. The scheme connects greenery, public space, placemaking, daily necessities, accessibility and pedestrian safety to create new livelihood opportunities across the urban fringe shared with Sham Shui Po, Prince Edward and Mong Kok.",
    pages: [
      {
        page: "04",
        src: "projects/pages/portfolio-page-04.jpg",
        alt: "Bedford Court project introduction and neighbourhood planning analysis",
        caption: "Planning intent, land-use context and neighbourhood relationships",
      },
      {
        page: "05",
        src: "projects/pages/portfolio-page-05.jpg",
        alt: "Aerial view of the Bedford Court redevelopment proposal in Tai Kok Tsui",
        caption: "Proposed redevelopment within the Tai Kok Tsui urban fabric",
      },
      {
        page: "06",
        src: "projects/pages/portfolio-page-06.jpg",
        alt: "Bedford Court ground floor, first floor and residential floor plans",
        caption: "Mixed-use programme and floor-plan organisation",
      },
      {
        page: "07",
        src: "projects/pages/portfolio-page-07.jpg",
        alt: "Bedford Court existing conditions and interior design references",
        caption: "Existing conditions, material character and public-space references",
      },
    ],
  },
  {
    number: "02",
    id: "project-w",
    title: 'Project “W” — Trail and Trial',
    studio: "URSP3200 Advanced Urban Design Studio",
    location: "Tsuen Wan West, Hong Kong",
    description:
      "This project asks how underused privately owned public spaces can become everyday nature-play landscapes within Tsuen Wan West’s elevated pedestrian network. Four interventions at Citywalk, Nina Park, Parc City and Ocean Pride combine sensory play, water, risky rocks, rope nets and inclusive facilities with community research and biophilic design.",
    pages: [
      {
        page: "08",
        src: "projects/pages/portfolio-page-08.jpg",
        alt: "Project W introduction and vertical circulation network",
        caption: "Research premise and the four-site vertical circulation network",
      },
      {
        page: "09",
        src: "projects/pages/portfolio-page-09.jpg",
        alt: "Project W analysis of four public spaces along Tsuen Wan West footbridges",
        caption: "Footbridge network, site diagnoses and public-space opportunities",
      },
      {
        page: "10",
        src: "projects/pages/portfolio-page-10.jpg",
        alt: "Nature-play designs for Citywalk and Nina Park",
        caption: "Citywalk — Darting Birds / Nina Park — Probing Eons",
      },
      {
        page: "11",
        src: "projects/pages/portfolio-page-11.jpg",
        alt: "Nature-play designs for Parc City and Ocean Pride",
        caption: "Parc City — Sky Nature / Ocean Pride — Water Cycle",
      },
    ],
  },
  {
    number: "03",
    id: "rivitalise",
    title: "RiVITALISE",
    studio: "URSP2300 Urban Design and Placemaking Studio",
    location: "Tai Wai, Hong Kong",
    description:
      "A proposal to turn the concrete Tai Wai Nullah beside Mei Lam Estate into a water-friendly landmark. A retired bus, a multi-generational vitality corridor and a family of flexible landscape elements connect recreation, heritage, ecology and the everyday life of the estate.",
    pages: [
      {
        page: "12",
        src: "projects/pages/portfolio-page-12.jpg",
        alt: "RiVITALISE project strategy and masterplan",
        caption: "From concrete channel to collaborative blue-green landscape",
      },
      {
        page: "13",
        src: "projects/pages/portfolio-page-13.jpg",
        alt: "RiVITALISE landscape renderings and spatial modules",
        caption: "Community promenade, water landscape and adaptable activity zones",
      },
    ],
  },
  {
    number: "04",
    id: "west-river",
    title: "Waterfront Industries and Adjacent Communities",
    studio: "SOSC4001+2 Re-imagining Port City Territories",
    location: "Gaoming, Foshan",
    description:
      "A capstone study of the spatial relationships and conflicts between waterfront industries and nearby residential communities along the West River. OpenStreetMap and ArcGIS Pro reveal the extreme proximity of heavy infrastructure to local settlements and the tension between regional economic ambition and spatial justice.",
    pages: [
      {
        page: "14",
        src: "projects/pages/portfolio-page-14.jpg",
        alt: "West River research framework and regional spatial analysis",
        caption: "Research framework, regional connections and port-city conditions",
      },
      {
        page: "15",
        src: "projects/pages/portfolio-page-15.jpg",
        alt: "West River industrial infrastructure and residential settlement analysis",
        caption: "Industry, settlement patterns and contested waterfront space",
      },
    ],
  },
  {
    number: "05",
    id: "small-polyvalent-town",
    title: "SMall Polyvalent Town",
    studio: "The Revamp of Sau Mau Ping Road Safety Town Design Competition",
    location: "Sau Mau Ping, Hong Kong",
    description:
      "A contemporary learning landscape for the Sau Mau Ping Road Safety Town. The proposal combines safer crossings, inclusive play, light rail, smart infrastructure, augmented and virtual reality, public information and community space in a more accessible urban park.",
    pages: [
      {
        page: "16",
        src: "projects/pages/portfolio-page-16.jpg",
        alt: "SMall Polyvalent Town design principles, site plan and section",
        caption: "Design principles, site organisation and learning environment",
      },
      {
        page: "17",
        src: "projects/pages/portfolio-page-17.jpg",
        alt: "SMall Polyvalent Town intervention masterplan",
        caption: "Eight interventions across the renewed Road Safety Town",
      },
    ],
  },
];

const experience = [
  {
    period: "Jul 2026 - Present",
    role: "Research Assistant",
    place: "Institute of Space and Earth Information Science, CUHK",
    detail:
      "Supported an environmental health research project under the supervision of Prof. Mei-Po Kwan, assisting in participant recruitment, data collection and data entry while coordinating research logistics and materials preparation.",
  },
  {
    period: "Nov 2022 - Sep 2025",
    role: "Part-time Reporter and Photojournalist",
    place: "Inmediahk",
    detail:
      "Produced over 550 news articles on urban planning, housing, traffic and environmental issues; independently developed story ideas and attended Town Planning Board meetings as an observer.",
  },
  {
    period: "Sep 2024 - Feb 2025",
    role: "Redevelopment Community Internship",
    place: "Caritas Development Project for Grassroots Organizations",
    detail:
      "Conducted field studies and interviews on the redevelopment of Kim Shin Lane, Cheung Sha Wan, and created a 3D model for a community exhibition on the area’s past and tong lau design.",
  },
  {
    period: "May 2024 - Jul 2024",
    role: "Full-time Curation & Research Intern",
    place: "Very Hong Kong",
    detail:
      "Researched Hong Kong placemaking cases and co-curated a bilingual exhibition at Tai Kwun for the Asia Placemaking Convention.",
  },
];

const awards = [
  {
    period: "Jul 2026",
    title:
      "Social Innovation Inventor – Competition for Innovative Design 2025-2026 Smart Design for a Resilient & Cultural Southern Shore",
    organization: "World Green Organization",
    detail: "Finalist — Tertiary Group: Po Chong Wan, Aberdeen Typhoon Shelter",
  },
  {
    period: "Jun 2026",
    title: "HKU-MIT Summer Institute — AI for Cities",
    organization: "The University of Hong Kong & MIT Senseable City Lab",
    detail:
      "Third Prize — Heat Risk Identification and Microclimate Improvement Strategies for Historic and Cultural Districts in Hot-Humid Regions: A Case Study of Dongshankou, Guangzhou",
  },
  {
    period: "Jan 2026",
    title: "Adobe Graphic Designer",
    organization: "Adobe",
    detail: "Professional certification",
  },
  {
    period: "Mar 2025",
    title: "Integrated Photoshop Masterclass",
    organization: "Urban Design Lab",
    detail: "Professional certification",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          M
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#cv">CV</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:lytmarcus@link.cuhk.edu.hk">
          Email <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="top">
        <section className="hero-image" aria-labelledby="hero-title">
          <h1 className="sr-only" id="hero-title">
            Marcus Leung Yin To — Urban Studies Portfolio
          </h1>
          <img
            src="hero-marcus.png"
            alt="Marcus Leung urban studies portfolio cover with maps, diagrams and spatial research"
          />
        </section>

        <section className="about section-pad" id="about" aria-labelledby="about-title">
          <p className="eyebrow">About / Hong Kong</p>
          <div className="about-copy">
            <h2 id="about-title">Cities, drawn through research, space and stories.</h2>
            <p>
              I am Marcus Leung Yin To, an Urban Studies undergraduate student at The Chinese University of Hong Kong, focusing on urban planning, urban design, transportation, geomatics, cartography and all about cities.
            </p>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading section-pad">
            <p className="eyebrow">Selected projects / 2023 - 2026</p>
            <h2 id="work-title">How I see, read and shape the city.</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" id={project.id} key={project.id}>
                <header className="project-header section-pad">
                  <span className="project-number">{project.number}</span>
                  <div className="project-title-block">
                    <h3>{project.title}</h3>
                    <p>{project.studio}</p>
                    <p>{project.location}</p>
                  </div>
                  <p className="project-summary">{project.description}</p>
                </header>

                <ol className="portfolio-pages" aria-label={`${project.title} portfolio pages`}>
                  {project.pages.map((portfolioPage) => (
                    <li key={portfolioPage.page}>
                      <figure>
                        <a
                          href={portfolioPage.src}
                          target="_blank"
                          aria-label={`Open portfolio page ${portfolioPage.page} at full size`}
                        >
                          <img src={portfolioPage.src} alt={portfolioPage.alt} loading="lazy" />
                        </a>
                        <figcaption>
                          <span>Page {portfolioPage.page}</span>
                          <span>{portfolioPage.caption}</span>
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>

        <section className="cv-section section-pad" id="cv" aria-labelledby="cv-title">
          <div className="cv-heading">
            <p className="eyebrow">Curriculum vitae / Updated Jul 2026</p>
            <h2 id="cv-title">Urban research, reporting and community practice.</h2>
          </div>

          <div className="education-card cv-card">
            <p className="card-label">Education</p>
            <div className="education-main">
              <div>
                <h3>Bachelor of Social Science, Urban Studies</h3>
                <p className="organization">The Chinese University of Hong Kong</p>
                <p>Minor in Geography and Resource Management</p>
              </div>
              <p className="cv-period">Aug 2023 - Jul 2027 (Expected)</p>
            </div>
            <dl>
              <div><dt>Cumulative GPA</dt><dd>3.41 / 4.0</dd></div>
              <div><dt>Major GPA</dt><dd>3.59 / 4.0</dd></div>
              <div><dt>Award</dt><dd>Department Commendation (2024)</dd></div>
            </dl>
            <p className="education-detail"><strong>Coursework:</strong> Introduction to GIS (A), Advanced Urban Design Studio (A), Urban Planning Workshop (A-)</p>
            <p className="education-detail"><strong>Course exchange:</strong> School of Architecture, South China University of Technology (Sep 2025)</p>
          </div>

          <div className="cv-block">
            <p className="card-label">Experience</p>
            <div className="experience-list">
              {experience.map((item) => (
                <article key={`${item.role}-${item.place}`}>
                  <p className="cv-period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="organization">{item.place}</p>
                  <p className="experience-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="cv-block">
            <p className="card-label">Awards & certifications</p>
            <div className="awards-list">
              {awards.map((award) => (
                <article key={award.title}>
                  <p className="cv-period">{award.period}</p>
                  <h3>{award.title}</h3>
                  <p className="organization">{award.organization}</p>
                  <p>{award.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="skills-grid">
            <div className="cv-card language-card">
              <p className="card-label">Languages</p>
              <p className="skills-copy">Chinese <span>Native</span><br />English <span>Fluent</span></p>
            </div>
            <div className="cv-card tools-card">
              <p className="card-label">Software</p>
              <p className="skills-copy">Adobe Creative Suite / ArcGIS Pro / AutoCAD / D5 Render / Enscape / Figma / Microsoft Office / QGIS / Rhino / SketchUp / Twinmotion</p>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let’s talk about cities, research and visual stories.</h2>
          <div className="contact-links">
            <a href="mailto:lytmarcus@link.cuhk.edu.hk">lytmarcus@link.cuhk.edu.hk <span>↗</span></a>
            <a href="tel:+85266369181">(+852) 6636 9181 <span>↗</span></a>
          </div>
        </section>
      </main>

      <footer>
        <p>LEUNG Yin To, Marcus</p>
        <p>Urban Studies / Hong Kong</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
