import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I texted my landlord Pak Budi that the tap is leaking. My phone sent 'the tap is licking me.' He replied, 'Do not touch it. I am coming.'";

// The gate accepts 1 to 199 characters; fail loudly instead of shipping a bad entry.
if ([...line].length < 1 || [...line].length > 199) {
  throw new Error(`entry is ${[...line].length} characters, must be 1-199`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
