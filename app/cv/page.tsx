import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "CV | Marcus Leung",
  description: "Education, experience, awards and skills of Marcus Leung Yin To.",
};

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

export default function CvPage() {
  return (
    <div className="site-shell">
      <SiteHeader current="cv" />

      <main id="top">
        <section className="cv-section section-pad" aria-labelledby="cv-title">
          <div className="cv-heading">
            <p className="eyebrow">Curriculum vitae / Updated Jul 2026</p>
            <h1 id="cv-title">Urban research, reporting and community practice.</h1>
          </div>

          <div className="education-card cv-card">
            <p className="card-label">Education</p>
            <div className="education-main">
              <div>
                <h2>Bachelor of Social Science, Urban Studies</h2>
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
                  <h2>{item.role}</h2>
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
                  <h2>{award.title}</h2>
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
      </main>

      <SiteFooter />
    </div>
  );
}
