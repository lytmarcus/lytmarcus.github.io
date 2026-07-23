import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exports the portfolio as four accessible pages", async () => {
  const aboutHtml = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  const projectsHtml = await readFile(new URL("../out/projects/index.html", import.meta.url), "utf8");
  const cvHtml = await readFile(new URL("../out/cv/index.html", import.meta.url), "utf8");
  const contactHtml = await readFile(new URL("../out/contact/index.html", import.meta.url), "utf8");
  const pages = [aboutHtml, projectsHtml, cvHtml, contactHtml];

  assert.match(aboutHtml, /Marcus Leung \| Urban Studies Portfolio/i);
  assert.match(aboutHtml, /geomatics, cartography and all about cities/i);
  assert.match(aboutHtml, /hero-marcus\.png/i);
  assert.doesNotMatch(aboutHtml, /Bedford Court/i);

  assert.match(projectsHtml, /Bedford Court/i);
  assert.match(projectsHtml, /Project [^A-Za-z0-9]W[^A-Za-z0-9]/i);
  assert.match(projectsHtml, /RiVITALISE/i);
  assert.match(projectsHtml, /portfolio-page-04\.jpg/i);
  assert.match(projectsHtml, /portfolio-page-17\.jpg/i);

  assert.match(cvHtml, /Research Assistant/i);
  assert.match(cvHtml, /Jul 2026 - Present/i);
  assert.match(cvHtml, /Smart Design for a Resilient &amp; Cultural Southern Shore/i);

  assert.match(contactHtml, /lytmarcus@link\.cuhk\.edu\.hk/i);
  assert.match(contactHtml, /\(\+852\) 6636 9181/i);

  for (const html of pages) {
    assert.match(html, /aria-label="Main navigation"/i);
    assert.match(html, /href="\/projects\/"/i);
    assert.match(html, /href="\/cv\/"/i);
    assert.match(html, /href="\/contact\/"/i);
    assert.doesNotMatch(html, /Marcus_Leung_Yin_To_CV\.pdf/i);
    assert.doesNotMatch(html, /Leung_YinTo_Portfolio\.pdf/i);
    assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton/i);
  }
});
