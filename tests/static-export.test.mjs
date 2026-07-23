import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exports the completed portfolio as accessible static HTML", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /Marcus Leung \| Urban Studies Portfolio/i);
  assert.match(html, /Planning cities through/i);
  assert.match(html, /Bedford Court/i);
  assert.match(html, /Project &quot;W&quot;|Project "W"/i);
  assert.match(html, /RiVITALISE/i);
  assert.match(html, /Leung_YinTo_Portfolio\.pdf/i);
  assert.match(html, /aria-label="Main navigation"/i);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton/i);
});
