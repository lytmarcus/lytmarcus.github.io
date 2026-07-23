import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Contact | Marcus Leung",
  description: "Contact Marcus Leung Yin To about cities, research and visual stories.",
};

export default function ContactPage() {
  return (
    <div className="site-shell contact-page">
      <SiteHeader current="contact" />

      <main id="top">
        <section className="contact section-pad" aria-labelledby="contact-title">
          <p className="eyebrow">Contact / Hong Kong</p>
          <h1 id="contact-title">Let’s talk about cities, research and visual stories.</h1>
          <div className="contact-links">
            <a href="mailto:lytmarcus@link.cuhk.edu.hk">lytmarcus@link.cuhk.edu.hk <span>↗</span></a>
            <a href="tel:+85266369181">(+852) 6636 9181 <span>↗</span></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
