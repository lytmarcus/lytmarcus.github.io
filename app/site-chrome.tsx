type Section = "about" | "projects" | "cv" | "contact";

const navigation: { href: string; label: string; section: Section }[] = [
  { href: "/", label: "About", section: "about" },
  { href: "/projects/", label: "Projects", section: "projects" },
  { href: "/cv/", label: "CV", section: "cv" },
  { href: "/contact/", label: "Contact", section: "contact" },
];

export function SiteHeader({ current }: { current: Section }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Marcus Leung — About page">
        M
      </a>
      <nav aria-label="Main navigation">
        {navigation.map((item) => (
          <a
            className={item.section === current ? "active" : undefined}
            href={item.href}
            aria-current={item.section === current ? "page" : undefined}
            key={item.section}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="mailto:lytmarcus@link.cuhk.edu.hk">
        Email <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

export function SiteFooter({ topHref = "#top" }: { topHref?: string }) {
  return (
    <footer>
      <p>LEUNG Yin To, Marcus</p>
      <p>Urban Studies / Hong Kong</p>
      <a href={topHref}>Back to top ↑</a>
    </footer>
  );
}
