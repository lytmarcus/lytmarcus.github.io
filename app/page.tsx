const projects = [
  {
    number: "01",
    id: "bedford-court",
    title: "Bedford Court",
    studio: "GRMD4302 Urban Planning Workshop",
    location: "Tai Kok Tsui, Hong Kong",
    description:
      "A private redevelopment proposal designed to create wider neighbourhood value at the meeting point of Tai Kok Tsui, Sham Shui Po, Prince Edward and Mong Kok. The scheme combines greenery, public space, daily amenities, accessibility and safer walking routes.",
    tags: ["Redevelopment", "Urban analysis", "Placemaking"],
    images: ["projects/portfolio-03.jpg", "projects/portfolio-04.jpg"],
  },
  {
    number: "02",
    id: "project-w",
    title: 'Project "W"',
    studio: "URSP3200 Advanced Urban Design Studio",
    location: "Tsuen Wan West, Hong Kong",
    description:
      "A nature-play strategy for four underused privately owned public spaces within Tsuen Wan West's elevated pedestrian network. Sensory interventions - from sand and water play to risky rocks and rope nets - reconnect dense urban communities with everyday nature.",
    tags: ["Nature play", "POPS", "Community engagement"],
    images: ["projects/portfolio-05.jpg", "projects/portfolio-06.jpg"],
  },
  {
    number: "03",
    id: "rivitalise",
    title: "RiVITALISE",
    studio: "URSP2300 Urban Design and Placemaking Studio",
    location: "Tai Wai, Hong Kong",
    description:
      "A proposal to turn the concrete Tai Wai Nullah beside Mei Lam Estate into a water-friendly landmark. A retired bus, a multi-generational vitality corridor and safer access bring recreation, heritage and ecology into one community destination.",
    tags: ["Blue-green space", "Placemaking", "Inclusive design"],
    images: ["projects/portfolio-07.jpg"],
  },
  {
    number: "04",
    id: "west-river",
    title: "Industries at the Water's Edge",
    studio: "SOSC4001+2 Re-imagining Port City Territories",
    location: "Gaoming, Foshan",
    description:
      "A one-year capstone examining the spatial conflicts between waterfront industries and nearby settlements along the West River. OpenStreetMap and ArcGIS Pro reveal how heavy infrastructure places environmental burdens on neighbouring communities.",
    tags: ["Spatial justice", "GIS", "Port-city research"],
    images: ["projects/portfolio-08.jpg"],
  },
  {
    number: "05",
    id: "small-polyvalent-town",
    title: "SMall Polyvalent Town",
    studio: "Sau Mau Ping Road Safety Town Design Competition",
    location: "Sau Mau Ping, Hong Kong",
    description:
      "A contemporary revamp of the Road Safety Town centred on education, inclusion and urban sustainability. Physical play and digital tools create a safer, more engaging learning environment for children, carers, older adults and the wider community.",
    tags: ["Competition", "Road safety", "Social design"],
    images: ["projects/portfolio-09.jpg"],
  },
];

const experience = [
  {
    period: "2022 - 2025",
    place: "Inmediahk",
    role: "Part-time Reporter and Photojournalist",
    detail:
      "Produced over 550 news articles on urban planning, housing, traffic and environmental issues in Hong Kong.",
  },
  {
    period: "2024 - 2025",
    place: "Caritas Development Project for Grassroots Organizations",
    role: "Community exhibition project",
    detail:
      "Created a 3D model and studied building plans to reconstruct Kim Shin Lane and tong lau design for a community exhibition.",
  },
  {
    period: "2024",
    place: "Very Hong Kong",
    role: "Exhibition research and co-curation",
    detail:
      "Researched Hong Kong placemaking cases and co-curated a bilingual exhibition at Tai Kwun for the Asia Placemaking Convention.",
  },
  {
    period: "2022 - 2023",
    place: "Liber Research Community",
    role: "Planning research",
    detail:
      "Conducted situational analyses and planning-related research using GIS data and government documents.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          M<span>LYT</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#profile">Profile</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="header-cta" href="Leung_YinTo_Portfolio.pdf" target="_blank">
          PDF <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="top">
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Urban studies / Planning / Visual storytelling</p>
            <h1 id="hero-title">
              Planning cities through <em>research</em>, design and stories.
            </h1>
            <p className="hero-intro">
              I am Marcus Leung, an Urban Studies student, spatial researcher,
              reporter and photojournalist based in Hong Kong.
            </p>
          </div>

          <a className="hero-visual" href="#project-w" aria-label="View Project W">
            <img
              src="projects/portfolio-05.jpg"
              alt="Project W analysis board showing Tsuen Wan West's elevated pedestrian network"
            />
            <span className="visual-label">Featured / Project "W"</span>
          </a>

          <div className="hero-stats" aria-label="Portfolio highlights">
            <div><strong>05</strong><span>Selected projects</span></div>
            <div><strong>550+</strong><span>Published news articles</span></div>
            <div><strong>HK</strong><span>Researching urban change</span></div>
          </div>
        </section>

        <section className="work-section section-pad" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow">Selected work / 2023 - 2026</p>
            <h2 id="work-title">From city systems to human experience.</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" id={project.id} key={project.id}>
                <div className="project-meta">
                  <span className="project-number">{project.number}</span>
                  <div>
                    <p>{project.studio}</p>
                    <p>{project.location}</p>
                  </div>
                </div>
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul aria-label={`${project.title} themes`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
                <div className={`project-gallery ${project.images.length > 1 ? "two-up" : ""}`}>
                  {project.images.map((image, imageIndex) => (
                    <figure key={image}>
                      <img
                        src={image}
                        alt={`${project.title} portfolio board ${imageIndex + 1}`}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="profile section-pad" id="profile" aria-labelledby="profile-title">
          <div className="profile-lead">
            <p className="eyebrow">Profile</p>
            <h2 id="profile-title">A cross-disciplinary view of the city.</h2>
            <p>
              My work moves between planning research, urban design, GIS,
              journalism and visual communication. I use each discipline to
              make complex city issues more tangible and public.
            </p>
          </div>

          <div className="profile-grid">
            <div className="profile-card education-card">
              <p className="card-label">Education</p>
              <h3>The Chinese University of Hong Kong</h3>
              <p>Bachelor of Social Science, Urban Studies</p>
              <p>Minor in Geography and Resource Management</p>
              <dl>
                <div><dt>Expected</dt><dd>2027</dd></div>
                <div><dt>Cumulative GPA</dt><dd>3.41 / 4.0</dd></div>
                <div><dt>Major GPA</dt><dd>3.59 / 4.0</dd></div>
              </dl>
              <p className="exchange">Exchange - South China University of Technology, School of Architecture, 2025</p>
            </div>

            <div className="profile-card awards-card">
              <p className="card-label">Recognition</p>
              <div>
                <span>2026</span>
                <p><strong>HKU-MIT Summer Institute - AI for Cities</strong><br />Third Prize, Cooling Street</p>
              </div>
              <div>
                <span>2025</span>
                <p><strong>Hong Kong Press Photographers Association</strong><br />1st Runner-up and Merit, Student categories</p>
              </div>
              <div>
                <span>2024</span>
                <p><strong>Department Commendation</strong><br />The Chinese University of Hong Kong</p>
              </div>
            </div>

            <div className="profile-card tools-card">
              <p className="card-label">Toolkit</p>
              <p>
                Adobe Creative Suite / ArcGIS Pro / AutoCAD / D5 Render /
                Enscape / Figma / QGIS / Rhino / SketchUp / Twinmotion
              </p>
            </div>
          </div>
        </section>

        <section className="experience section-pad" id="experience" aria-labelledby="experience-title">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">Research in the field, stories in public.</h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article key={item.place}>
                <p className="period">{item.period}</p>
                <h3>{item.place}</h3>
                <p className="role">{item.role}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="closing section-pad" aria-labelledby="closing-title">
          <p className="eyebrow">Full portfolio</p>
          <h2 id="closing-title">See the research, maps and design process in detail.</h2>
          <a className="download-button" href="Leung_YinTo_Portfolio.pdf" target="_blank">
            Download portfolio PDF <span aria-hidden="true">↓</span>
          </a>
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
