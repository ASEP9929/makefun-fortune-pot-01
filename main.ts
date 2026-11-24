// Fortune in a Pot — make.fun entry
// Writes one kind, funny fortune for a houseplant to /output/entry.txt.
// Gate: UTF-8 text, 1-120 characters, one line.

import { mkdirSync, writeFileSync } from "node:fs";

// Final: "Soon," opens the fortune like a prediction; the second cup is
// the joke, and the taller leaves are the kind payoff for this plant.
const fortune =
  "Soon, a tall stranger will bring you water — and remember the second cup. Your leaves will stand a little taller.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
console.log(`wrote ${fortune.length} chars to /output/entry.txt`);
