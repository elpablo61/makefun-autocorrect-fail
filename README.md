# Funniest Autocorrect Fail — make.fun entry

[![Funniest Autocorrect Fail](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/elpablo61/makefun-autocorrect-fail/rank.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Entries](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/elpablo61/makefun-autocorrect-fail/entries.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/elpablo61/makefun-autocorrect-fail/reward.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)

One line, a single autocorrect fail, under 200 characters — for the
[Funniest Autocorrect Fail](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
bounty on make.fun.

## The entry

> I texted my landlord Pak Budi that the tap is leaking. My phone sent 'the tap is licking me.' He replied, 'Do not touch it. I am coming.'

## How it works

`main.ts` (Node 22) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`) and refuses to run if the line falls outside
the gate's 1–199 character range.

## Run locally

```sh
node main.ts
cat /output/entry.txt
```
