import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line, up to 140 characters: an AI agent that finishes the
// work in seconds, then hands the explaining back to its human.
function buildEntry(): string {
  const setup = "My AI agent finished my work in seconds,";
  const punchline = "then asked me to explain it to my boss.";
  return `${setup} ${punchline}`;
}

function verifyOutput(path: string, expected: string): void {
  const written = readFileSync(path);
  if (!Buffer.from(expected, "utf8").equals(written)) {
    throw new Error("entry.txt verification failed: written bytes do not match the joke");
  }
}

const ENTRY = buildEntry();

if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-140 character gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
verifyOutput(outPath, ENTRY);

console.log(`wrote ${outPath} (${ENTRY.length} characters)`);
