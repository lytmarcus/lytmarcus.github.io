import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exports the complete portfolio as one continuous accessible page", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /Marcus Leung \| Urban Studies Portfolio/i);
  assert.match(html, /geomatics, cartography and all about cities/i);
  assert.match(html, /hero-marcus\.png/i);
  assert.match(html, /How I see, read and shape the city/i);
  assert.match(html, /Bedford Court/i);
  assert.match(html, /Project [^A-Za-z0-9]W[^A-Za-z0-9]/i);
  assert.match(html, /RiVITALISE/i);
  assert.match(html, /portfolio-page-04\.jpg/i);
  assert.match(html, /portfolio-page-17\.jpg/i);
  assert.match(html, /Research Assistant/i);
  assert.match(html, /Jul 2026 - Present/i);
  assert.match(html, /Smart Design for a Resilient &amp; Cultural Southern Shore/i);
  assert.match(html, /lytmarcus@link\.cuhk\.edu\.hk/i);
  assert.match(html, /href="#about"/i);
  assert.match(html, /href="#work"/i);
  assert.match(html, /href="#cv"/i);
  assert.match(html, /href="#contact"/i);
  assert.doesNotMatch(html, /Marcus_Leung_Yin_To_CV\.pdf/i);
  assert.doesNotMatch(html, /Leung_YinTo_Portfolio\.pdf/i);
  assert.match(html, /aria-label="Main navigation"/i);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton/i);
});
