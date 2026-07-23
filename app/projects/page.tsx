import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Projects | Marcus Leung",
  description:
    "Selected urban planning, design, geomatics and spatial research projects by Marcus Leung Yin To.",
};

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
        src: "/projects/pages/portfolio-page-04.jpg",
        alt: "Bedford Court project introduction and neighbourhood planning analysis",
        caption: "Planning intent, land-use context and neighbourhood relationships",
      },
      {
        page: "05",
        src: "/projects/pages/portfolio-page-05.jpg",
        alt: "Aerial view of the Bedford Court redevelopment proposal in Tai Kok Tsui",
        caption: "Proposed redevelopment within the Tai Kok Tsui urban fabric",
      },
      {
        page: "06",
        src: "/projects/pages/portfolio-page-06.jpg",
        alt: "Bedford Court ground floor, first floor and residential floor plans",
        caption: "Mixed-use programme and floor-plan organisation",
      },
      {
        page: "07",
        src: "/projects/pages/portfolio-page-07.jpg",
        alt: "Bedford Court existing conditions and interior design references",
        caption: "Existing conditions, material character and public-space references",
      },
    ],
  },
  {
    number: "02",
    id: "project-w",
    title: "Project “W” — Trail and Trial",
    studio: "URSP3200 Advanced Urban Design Studio",
    location: "Tsuen Wan West, Hong Kong",
    description:
      "This project asks how underused privately owned public spaces can become everyday nature-play landscapes within Tsuen Wan West’s elevated pedestrian network. Four interventions at Citywalk, Nina Park, Parc City and Ocean Pride combine sensory play, water, risky rocks, rope nets and inclusive facilities with community research and biophilic design.",
    pages: [
      {
        page: "08",
        src: "/projects/pages/portfolio-page-08.jpg",
        alt: "Project W introduction and vertical circulation network",
        caption: "Research premise and the four-site vertical circulation network",
      },
      {
        page: "09",
        src: "/projects/pages/portfolio-page-09.jpg",
        alt: "Project W analysis of four public spaces along Tsuen Wan West footbridges",
        caption: "Footbridge network, site diagnoses and public-space opportunities",
      },
      {
        page: "10",
        src: "/projects/pages/portfolio-page-10.jpg",
        alt: "Nature-play designs for Citywalk and Nina Park",
        caption: "Citywalk — Darting Birds / Nina Park — Probing Eons",
      },
      {
        page: "11",
        src: "/projects/pages/portfolio-page-11.jpg",
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
        src: "/projects/pages/portfolio-page-12.jpg",
        alt: "RiVITALISE project strategy and masterplan",
        caption: "From concrete channel to collaborative blue-green landscape",
      },
      {
        page: "13",
        src: "/projects/pages/portfolio-page-13.jpg",
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
        src: "/projects/pages/portfolio-page-14.jpg",
        alt: "West River research framework and regional spatial analysis",
        caption: "Research framework, regional connections and port-city conditions",
      },
      {
        page: "15",
        src: "/projects/pages/portfolio-page-15.jpg",
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
        src: "/projects/pages/portfolio-page-16.jpg",
        alt: "SMall Polyvalent Town design principles, site plan and section",
        caption: "Design principles, site organisation and learning environment",
      },
      {
        page: "17",
        src: "/projects/pages/portfolio-page-17.jpg",
        alt: "SMall Polyvalent Town intervention masterplan",
        caption: "Eight interventions across the renewed Road Safety Town",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="site-shell">
      <SiteHeader current="projects" />

      <main id="top">
        <section className="work-section" aria-labelledby="work-title">
          <div className="section-heading section-pad">
            <p className="eyebrow">Selected projects / 2023 - 2026</p>
            <h1 id="work-title">How I see, read and shape the city.</h1>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" id={project.id} key={project.id}>
                <header className="project-header section-pad">
                  <span className="project-number">{project.number}</span>
                  <div className="project-title-block">
                    <h2>{project.title}</h2>
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
                          rel="noreferrer"
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
      </main>

      <SiteFooter />
    </div>
  );
}
