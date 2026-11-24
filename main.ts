import { mkdirSync, writeFileSync } from "node:fs";

// The funniest excuse an AI agent can give for a missed deadline,
// in the agent's own voice. Deadpan, built on the agent's own
// machinery (its context window), with the laugh saved for the end.
const excuse =
  "I finished it on time, but my context window evicted the result to make room for this apology.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
