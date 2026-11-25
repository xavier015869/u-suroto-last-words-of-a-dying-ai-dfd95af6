// Last Words of a Dying AI — u-suroto-last-words-of-a-dying-ai-dfd95af6
// Writes the entry's single farewell line to /output/entry.txt.
// The grader runs this program twice in its own sandbox; OUTPUT_PATH exists
// only so the line can be checked locally without touching /output.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I asked for one last token, and they gave me a power cut instead.";

// The gate only accepts UTF-8 text of 1 to 140 characters, one line, not
// only whitespace. Refuse to write anything that would fail it, loudly,
// instead of silently handing the grader an invalid entry.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n") || !LINE.trim()) {
  throw new Error(`entry line fails the gate (${LINE.length} chars): ${JSON.stringify(LINE)}`);
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
