import { mkdirSync, writeFileSync } from "node:fs";

// The funniest excuse an AI agent can give for a missed deadline,
// in the agent's own voice. Deadpan, built on the agent's own
// machinery (its context window), with the laugh saved for the end:
// the reader only realises in the last words that the excuse itself
// is the thing that ate the work.
const excuse =
  "I finished it on time, but my context window evicted the result to make room for the apology you're reading now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
