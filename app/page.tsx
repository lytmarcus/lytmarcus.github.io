type ProjectAsset = {
  src: string;
  alt: string;
  caption: string;
  featured?: boolean;
};

type ProjectNote = {
  title: string;
  text: string;
};

const projects: Array<{
  number: string;
  id: string;
  title: string;
  studio: string;
  location: string;
  description: string;
  tags: string[];
  assets: ProjectAsset[];
  notes?: ProjectNote[];
}> = [
  {
    number: "01",
    id: "bedford-court",
    title: "Bedford Court",
    studio: "GRMD4302 Urban Planning Workshop",
    location: "Tai Kok Tsui, Hong Kong",
    description:
      "A site had been chosen for a proposed private redevelopment project in Tai Kok Tsui, Kowloon, Hong Kong. Within the fringe area, the proposed redevelopment scheme can generate various synergies and benefit the community and neighbourhood of Tai Kok Tsui, as well as those of nearby Sham Shui Po, Prince Edward, and Mong Kok. The scheme provides innovative livelihood opportunities in the fringe area, combining greenery, public space, placemaking, daily necessities, cleanliness, accessibility, and pedestrian safety.",
    tags: ["Redevelopment", "Urban analysis", "Placemaking"],
    assets: [
      {
        src: "projects/crops/bedford-aerial.jpg",
        alt: "Aerial view of Tai Kok Tsui and the Bedford Court study area",
        caption: "Urban context - Tai Kok Tsui and the surrounding fringe area",
        featured: true,
      },
      {
        src: "projects/crops/bedford-context.jpg",
        alt: "Land-use and neighbourhood analysis around Bedford Court",
        caption: "Commercial, industrial, food-supply and redevelopment context",
      },
      {
        src: "projects/crops/bedford-plans.jpg",
        alt: "Bedford Court ground, first and residential floor plans",
        caption: "Conceptual floor plans and mixed-use programme",
      },
      {
        src: "projects/crops/bedford-renders.jpg",
        alt: "Bedford Court interior and public-space renderings",
        caption: "Public realm, supermarket, circulation and community space",
      },
    ],
    notes: [
      {
        title: "Planning framework",
        text: "OZP Zone: Residential (Group E) - primarily permits residential development while allowing a degree of flexibility for commercial, community, or mixed uses, particularly in transitional or former industrial areas.",
      },
    ],
  },
  {
    number: "02",
    id: "project-w",
    title: 'Project "W" - Trail and Trial',
    studio: "URSP3200 Advanced Urban Design Studio",
    location: "Tsuen Wan West, Hong Kong",
    description:
      "This project explores how underutilized Privately Owned Public Spaces (POPS) with urban nature in Tsuen Wan West can be transformed into everyday nature play landscapes within the district's elevated skybridge network. Focusing on Citywalk, Nina Park, Parc City and Ocean Pride, the design proposes sensory-rich interventions including sand play, water features, risky rocks, rope nets and inclusive play elements.",
    tags: ["Nature play", "POPS", "Community engagement"],
    assets: [
      {
        src: "projects/crops/project-w-analysis.jpg",
        alt: "Annotated analysis map of four POPS sites in Tsuen Wan West",
        caption: "Four sites - footbridges, public-space issues and opportunities",
        featured: true,
      },
      {
        src: "projects/crops/project-w-network.jpg",
        alt: "Vertical circulation network connecting the four project sites",
        caption: "Vertical circulation and elevated pedestrian network",
      },
      {
        src: "projects/crops/project-w-citywalk.jpg",
        alt: "Citywalk Darting Birds nature play concepts",
        caption: 'Citywalk - "Darting Birds"',
      },
      {
        src: "projects/crops/project-w-nina.jpg",
        alt: "Nina Park risky rocks and fossil grove concepts",
        caption: 'Nina Park - "Probing Eons"',
      },
      {
        src: "projects/crops/project-w-parc.jpg",
        alt: "Parc City swing, rope net and waterscaping concepts",
        caption: 'Parc City - "Sky Nature"',
      },
      {
        src: "projects/crops/project-w-ocean.jpg",
        alt: "Ocean Pride water-cycle play concepts and renderings",
        caption: 'Ocean Pride - "Water Cycle"',
      },
    ],
    notes: [
      {
        title: 'Citywalk - "Darting Birds"',
        text: "Two glass and stainless steel slides weave through trees like birds in the forest canopy, connecting the footbridge to the ground-level garden. The design introduces sand play, a trampoline and inclusive all-ages fitness facilities.",
      },
      {
        title: 'Nina Park - "Probing Eons"',
        text: "Large rocks create risky play above the underground rainwater tank, while a fossil grove of artificial petrified wood becomes seating, hide-and-seek obstacles and a tactile natural-history experience.",
      },
      {
        title: 'Parc City - "Sky Nature"',
        text: "Swings and rope nets activate an underused green space. An elevated net circles an existing tree, while animal sculptures and an extended stream create nature and water play for families.",
      },
      {
        title: 'Ocean Pride - "Water Cycle"',
        text: "A waterfall and mist feature masks highway noise upstream. Downstream, a rippling gridscape creates play and wayfinding, while canopies, grand steps and a viewing platform connect the podium to the waterfront.",
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
      "Our studio project proposes revitalizing Tai Wai's Mei Lam Estate by transforming the concrete Tai Wai Nullah into a prominent water-friendly landmark. Key design elements include using a retired bus for unique placemaking to create a nostalgic attraction, and a multi-generational vitality corridor with recreation facilities. The plan aims to enhance green and blue spaces, creating a vibrant hub bridging recreation, heritage and ecology.",
    tags: ["Blue-green space", "Placemaking", "Inclusive design"],
    assets: [
      {
        src: "projects/crops/rivitalise-plan.jpg",
        alt: "RiVITALISE masterplan with placemaking concepts",
        caption: "From concrete to biodiversity - an integrated revitalisation plan",
        featured: true,
      },
      {
        src: "projects/crops/rivitalise-renders.jpg",
        alt: "Water-friendly landscape renderings for Tai Wai Nullah",
        caption: "A water-friendly landscape and community promenade",
      },
      {
        src: "projects/crops/rivitalise-zones.jpg",
        alt: "Vitality, nature and social zone axonometric diagrams",
        caption: "Vitality, nature and social zones",
      },
    ],
    notes: [
      {
        title: "Community confidence",
        text: "Inspired by Seoul's Cheonggyecheon, the proposal prioritizes public engagement and safety measures, including drills and stationed personnel, to build confidence around a revitalized river landscape.",
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
      "This one-year capstone project explores the spatial relationships and conflicts between waterfront industries and adjacent residential communities along the West River in Gaoming, Foshan. By integrating OpenStreetMap data with ArcGIS Pro, the spatial analysis visualizes the extreme proximity of heavy infrastructure, including the Nanhai Power Station, to local settlements and exposes tensions between regional economic ambitions and spatial justice.",
    tags: ["Spatial justice", "GIS", "Port-city research"],
    assets: [
      {
        src: "projects/crops/west-river-spatial.jpg",
        alt: "West River spatial justice collage and river map",
        caption: "Industry, settlement and the contested West River edge",
        featured: true,
      },
      {
        src: "projects/crops/west-river-regional.jpg",
        alt: "Regional satellite map locating Gaoming",
        caption: "Regional position of Gaoming in the Greater Bay Area",
      },
      {
        src: "projects/crops/west-river-location.jpg",
        alt: "Map locating Gaoming within the river network",
        caption: "Regional river and settlement network",
      },
      {
        src: "projects/crops/west-river-network.jpg",
        alt: "Urban network analysis and settlement typologies",
        caption: "Industrial and residential settlement patterns",
      },
      {
        src: "projects/crops/west-river-industry.jpg",
        alt: "Aerial photograph of Nanhai Power Station on the waterfront",
        caption: "Nanhai Power Station beside the West River",
      },
    ],
    notes: [
      {
        title: "Spatial inequality",
        text: "The visualizations highlight the spatial and social inequalities generated by port-driven development, illustrating how industrial facilities impose environmental burdens on neighbouring communities.",
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
      "With the goal of contemporizing the site, catering to ever-changing regulations and educational needs, and promoting urban sustainability and inclusivity, the park is designed to transform the Road Safety Town into a more attractive place that meets contemporary needs, a more effective place for education, and an environment that fosters community-friendly interactions.",
    tags: ["Competition", "Road safety", "Social design"],
    assets: [
      {
        src: "projects/crops/small-town-masterplan.jpg",
        alt: "Annotated masterplan for the Sau Mau Ping Road Safety Town revamp",
        caption: "Eight interventions across the renewed Road Safety Town",
        featured: true,
      },
      {
        src: "projects/crops/small-town-site-plan.jpg",
        alt: "Site plan of the proposed Road Safety Town",
        caption: "Site plan and spatial organisation",
      },
      {
        src: "projects/crops/small-town-perspective.jpg",
        alt: "Street-level perspective with light rail and road-safety education",
        caption: "Playful light-rail and streetscape learning environment",
      },
      {
        src: "projects/crops/small-town-section.jpg",
        alt: "Cross sections through the Road Safety Town",
        caption: "Cross sections and learning-space relationships",
      },
    ],
    notes: [
      {
        title: "Design principles",
        text: "The proposal combines safety enhancement, inclusive measures and educational effectiveness through physical play, updated crossings, smart urban infrastructure, augmented reality and virtual-reality learning.",
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
      "Conducted field studies and interviews on the redevelopment of Kim Shin Lane, Cheung Sha Wan, and created a 3D model for a community exhibition on the area's past and tong lau design.",
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
    title: "Social Innovation Inventor - Competition for Innovative Design 2025-2026",
    organization: "World Green Organization",
    detail: "Finalist - Tertiary Group: Po Chong Wan, Aberdeen Typhoon Shelter",
  },
  {
    period: "Jun 2026",
    title: "HKU-MIT Summer Institute - AI for Cities",
    organization: "The University of Hong Kong & MIT Senseable City Lab",
    detail:
      "Third Prize - Heat Risk Identification and Microclimate Improvement Strategies for Historic and Cultural Districts in Hot-Humid Regions: A Case Study of Dongshankou, Guangzhou",
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
          M<span>LYT</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#cv">CV</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="Marcus_Leung_Yin_To_CV.pdf" target="_blank">
          CV <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="top">
        <section className="hero-image" aria-labelledby="hero-title">
          <h1 className="sr-only" id="hero-title">Marcus Leung Yin To - Urban Studies Portfolio</h1>
          <img
            src="hero-marcus.png"
            alt="Marcus Leung urban studies portfolio cover with maps, diagrams and spatial research"
          />
        </section>

        <section className="about section-pad" id="about" aria-labelledby="about-title">
          <p className="eyebrow">About / Hong Kong</p>
          <div className="about-copy">
            <h2 id="about-title">Researching how cities move, change and make space for people.</h2>
            <p>
              I am Marcus Leung Yin To, an Urban Studies undergraduate student at The Chinese University of Hong Kong, focusing on urban planning, urban design, transportation, geomatics and spaces.
            </p>
          </div>
        </section>

        <section className="work-section section-pad" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow">Selected work / 2023 - 2026</p>
            <h2 id="work-title">Research, maps, diagrams and designed spaces.</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" id={project.id} key={project.id}>
                <header className="project-header">
                  <span className="project-number">{project.number}</span>
                  <div className="project-title-block">
                    <h3>{project.title}</h3>
                    <p>{project.studio}</p>
                    <p>{project.location}</p>
                  </div>
                  <div className="project-summary">
                    <p>{project.description}</p>
                    <ul aria-label={`${project.title} themes`}>
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  </div>
                </header>

                <div className="asset-grid">
                  {project.assets.map((asset) => (
                    <figure className={asset.featured ? "asset-featured" : ""} key={asset.src}>
                      <a href={asset.src} target="_blank" aria-label={`Open ${asset.caption} at full size`}>
                        <img src={asset.src} alt={asset.alt} loading="lazy" />
                      </a>
                      <figcaption>{asset.caption}</figcaption>
                    </figure>
                  ))}
                </div>

                {project.notes && (
                  <div className="project-notes">
                    {project.notes.map((note) => (
                      <div key={note.title}>
                        <h4>{note.title}</h4>
                        <p>{note.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="cv-section section-pad" id="cv" aria-labelledby="cv-title">
          <div className="cv-heading">
            <div>
              <p className="eyebrow">Curriculum vitae / Updated Jul 2026</p>
              <h2 id="cv-title">Urban research, reporting and community practice.</h2>
            </div>
            <a className="outline-button" href="Marcus_Leung_Yin_To_CV.pdf" target="_blank">
              Download latest CV <span aria-hidden="true">↓</span>
            </a>
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
            <div className="cv-card">
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
          <h2 id="contact-title">Let&apos;s talk about cities, research and visual stories.</h2>
          <div className="contact-links">
            <a href="mailto:lytmarcus@link.cuhk.edu.hk">lytmarcus@link.cuhk.edu.hk <span>↗</span></a>
            <a href="tel:+85266369181">(+852) 6636 9181 <span>↗</span></a>
            <a href="Leung_YinTo_Portfolio.pdf" target="_blank">Full portfolio PDF <span>↓</span></a>
            <a href="Marcus_Leung_Yin_To_CV.pdf" target="_blank">Latest CV PDF <span>↓</span></a>
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
