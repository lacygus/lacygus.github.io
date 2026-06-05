---
title: "mHTI Discussion Analysis Pipeline (M.S. Thesis)"
excerpt: "LLM multi-agent simulations of real research teams with a four-layer fidelity framework and a 55-metric NLP evaluation suite. Basis of an EMNLP 2026 submission.<br/>"
collection: portfolio
---

The research engine behind my M.S. thesis and EMNLP 2026 submission: a Python pipeline
that studies how the **structural design of team discussions**, who can see what, how
much each agent remembers, team size, mentor count, and session length, shapes both
collaboration behavior and final proposal quality.

**Design.** Two parallel tracks share one metric and inference layer: a *human track* that
parses and analyzes ~24,000 utterances from five real research teams, and an *agent track*
that runs matched LLM simulations under controlled conditions for within-team paired
inference.

**Highlights.**
- Behaviorally grounded agent personas close **64% of the naive-to-human outcome gap**
  across 5/5 teams.
- 55 NLP interaction metrics plus a multi-judge LLM ensemble (Claude / GPT / Gemini)
  reaching **0.96 Spearman agreement** on process quality.
- Four-layer statistical triangulation (paired Wilcoxon, sign test, team-bootstrap CIs,
  and LME) designed for an honest small-N (N=5) design.

*Paper under review at EMNLP 2026. Repository kept private pending publication.*

*Python · LLM agents · NLP · statistical inference*
