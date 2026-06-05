---
title: "Congressional Stock-Trading Analysis"
excerpt: "Analysis of U.S. House members' reported stock trades, joined to party affiliation, to study trading patterns across parties.<br/>"
collection: portfolio
---

An exploratory data-analysis project on **U.S. House of Representatives stock trades**.
Reported transactions (from the House Stock Watcher dataset) are joined to each member's
party affiliation to study differences in trading behavior across parties.

- **Code:** [github.com/lacygus/Stocks-Trades](https://github.com/lacygus/Stocks-Trades)

**Engineering note.** The original version scraped party affiliation directly from
`house.gov`, which broke every new Congress when the page layout changed. The project was
re-engineered to join against the community-maintained
[`unitedstates/congress-legislators`](https://github.com/unitedstates/congress-legislators)
dataset, a stable, versioned source that removes the fragile HTML scraping entirely.

*Python · pandas · requests · data wrangling*
