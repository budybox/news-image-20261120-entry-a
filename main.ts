// news-image-20261120-entry-a: the entry is the image beside this file.
// The program copies entry.png into the directory make.fun grades.
// It is the Kyiv-lead front page for Friday 20 November 2026: ballistic
// missiles on the Dnipro bridges, with Anthropic's record IPO, the Pete
// Rose pardon, Taiwan's plunge and Cyclone Akvan below the lead.
// Node 22, standard library only. No network, no randomness, no clock:
// run it twice and both runs write the same bytes.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from "node:fs";

const picture = new URL("./entry.png", import.meta.url);

// Fail loudly instead of writing an empty output when the image is
// missing, so a broken repo never grades as a blank page.
if (!existsSync(picture)) {
  throw new Error("entry.png is missing next to main.ts");
}

const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(target, { recursive: true });
copyFileSync(picture, `${target}/entry.png`);
