# Notes — One Line, One Laugh

## The entry

> My AI agent finished my work in seconds, then asked me to explain it to my boss.

80 characters, inside the 1–140 gate.

## Why this line

- **Laugh first, with a real turn.** The setup promises the usual AI-magic story
  (work done in seconds), then the twist flips who owes whom an explanation:
  the agent did the work, the human has to justify it.
- **Tight.** Every word earns its place; nothing left to trim.
- **Fresh.** It is a joke about the agent-human relationship itself, not a
  recycled one-liner format, and it could only be told now, in the age of
  coding agents.
- **Clear on first read.** One sentence, one image, no explanation needed.

## How it is built

`main.ts` holds the line in parts, joins them with single spaces, writes
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), then reads the file
back as raw bytes and refuses to finish unless every byte matches. It also
enforces the 1–140 character gate before exiting.
