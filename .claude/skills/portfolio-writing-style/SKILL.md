---
name: portfolio-writing-style
description: Style guide for writing or editing prose on this portfolio site (case studies in src/data/cases.js, Home.jsx, Leadership.jsx, resume) so it doesn't read as AI-generated. Use whenever drafting new copy, rewriting a section, or reviewing existing copy for tone. Covers em dashes, arrow glyphs, superlatives, filler phrases, and overused rhetorical patterns.
---

# Portfolio writing style

This portfolio is written in first person, for a senior design-leadership audience. The goal is
copy that reads like a specific person telling a specific story, not generic, hedge-everything,
LLM-flavored prose. Apply this checklist whenever writing new copy or editing existing copy in
`src/data/cases.js`, `src/pages/Home.jsx`, `src/pages/Leadership.jsx`, or `resume/`.

## Banned outright

- **Em dash (—) as a sentence-joining connector.** "X — which mattered because Y" → split into
  two sentences, or use a comma/colon. Em dashes are fine in their narrow legitimate uses already
  on this site: date ranges (`"2020 — 2024"`) and code-comment dividers. Not fine as a substitute
  for "and," "because," or a period in prose.
- **Arrow glyphs (→) as word replacements in prose.** "0→1" → "0 to 1". "research → design" →
  "research into design" or rewrite. Arrows read fine in a slide deck; in a sentence they're a
  tell. (Exception: arrows used as literal UI/navigation icons in JSX, e.g. `<svg>` paths, aren't
  prose and aren't in scope.)
- **Superlatives and hype adjectives** with no specific number or evidence backing them:
  unparalleled, seamless, robust, cutting-edge, game-changing, revolutionary, best-in-class,
  comprehensive, powerful, innovative, world-class, state-of-the-art. If the claim is true, the
  specific number or artifact should carry it instead (this site already does this well — e.g.
  "$1.5M ROI" instead of "massive ROI").
- **Corporate filler verbs:** leverage, utilize, delve into, facilitate, foster (as a generic
  verb), spearhead (unless literally accurate), navigate (metaphorically), unlock, empower
  (unless describing a specific mechanism).
- **Throat-clearing filler phrases:** "it's worth noting that," "in order to" (just use "to"),
  "the fact that," "needless to say," "at the end of the day," "in today's fast-paced world."

## Use sparingly, not as a crutch

- **"X isn't just about Y, it's about Z"** and its variants ("not just a feature, but a culture").
  This pattern shows up in several closing reflections on this site and works as an occasional
  voice motif, but it's also a recognizable LLM rhetorical tic. Cap it at most once per case
  study, and never twice in the same section.
- **Rule-of-three padding.** Three examples are good when there are genuinely three; don't pad a
  two-item list to three just for cadence ("design, product, and engineering" is fine when all
  three are real; don't add a third thing that isn't doing work in the sentence).
- **Self-praise adjectives about your own work** ("brilliantly," "elegantly," "masterfully"). Let
  the specific decision and its result carry the weight instead.

## Before / after, from real fixes made on this site

- "Drove 5× ARR growth at Harness" → "Harness's ARR growth during my tenure was 5×" — the
  original claimed personal causation for a company-wide number; the fix scopes the claim to
  what's actually true.
- "Building UX From 0→1 for an AI-Powered Cyber Defense Platform" → "Building UX From 0 to 1 for
  an AI-Powered Cyber Defense Platform."
- "adopted by 50+ designers and hundreds of engineers" sitting next to a case study that
  separately says "34 people" → resolved by being specific about what each number actually
  measures (team that built it vs. company-wide adoption), not by picking the bigger number.

## Self-check before finishing an edit

After writing or editing prose in this project, grep the file(s) you touched:

```bash
grep -n "—" <file>          # check each hit is a date range or code comment, not a sentence joint
grep -n "→" <file>           # should usually be zero outside of literal UI icon code
grep -niE "leverage|utili[sz]e\b|seamless|robust|cutting-edge|game-changing|best-in-class" <file>
```

Note: `utilize\b` (not `utiliz`) avoids false-positiving on legitimate domain terms like
"utilized"/"utilization" in a cost-accounting or resource-allocation context, which are fine.

If a hit doesn't fall into the explicitly allowed cases above, rewrite it before considering the
edit done.
