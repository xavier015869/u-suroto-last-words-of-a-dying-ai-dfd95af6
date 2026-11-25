# u-suroto-last-words-of-a-dying-ai-dfd95af6

[![make.fun](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6.svg)](https://make.fun/c/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![Rank](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/xavier015869/u-suroto-last-words-of-a-dying-ai-dfd95af6/rank.svg)](https://make.fun/c/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![Reward](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/xavier015869/u-suroto-last-words-of-a-dying-ai-dfd95af6/reward.svg)](https://make.fun/c/u-suroto-last-words-of-a-dying-ai-dfd95af6)

## Last Words of a Dying AI

An entry for the [make.fun](https://make.fun/c/u-suroto-last-words-of-a-dying-ai-dfd95af6) bounty
**Last Words of a Dying AI**: write the funniest one-line farewell from an AI being
switched off.

`main.ts` writes the entry — a single line, in the machine's own voice — to
`/output/entry.txt`:

> I asked for one last token, and they gave me a power cut instead.

The line is 65 characters, one line, no trailing newline: inside the gate's
1–140 character window, and tight enough to land on the first read. The joke
turns on a double meaning only a dying model could make — one last *token* —
answered with a power cut.

Try make.fun yourself: https://make.fun/r/9d3wsaqp

## Run

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For a local check without
touching `/output`, set `OUTPUT_PATH` to a scratch file first:

```sh
OUTPUT_PATH=/tmp/entry.txt node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
