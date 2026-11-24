// The fern speaks for itself — the human went away for two weeks and
// left it to fend for itself, so it now handles all correspondence
// with the cat. If it gets watered, it may even answer politely.
import { writeFileSync, mkdirSync } from "node:fs";

const outOfOfficeFern =
  "This is the fern. My human left for two weeks and forgot to water me, so I'm negotiating with the cat now — if you need anything, bring a spray bottle or a lawyer.";

// Keep the message inside the contest's 1–200 character window, and
// never ship an empty or whitespace-only entry by accident.
const trimmedFern = outOfOfficeFern.trim();
if (trimmedFern.length < 1 || trimmedFern.length > 200) {
  throw new Error(`Entry of ${trimmedFern.length} chars is out of range (1-200)`);
}

export const line = outOfOfficeFern;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", outOfOfficeFern + "\n");
