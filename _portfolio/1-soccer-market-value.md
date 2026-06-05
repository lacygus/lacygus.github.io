---
title: "Soccer Player Market Value Scout"
excerpt: "Deployed ML service that predicts soccer players' market value from performance stats and explains every prediction. Streamlit app + FastAPI on Google Cloud Run.<br/>STAT 418 final project."
collection: portfolio
---

A full-stack machine-learning service that predicts the market value of soccer players
from the top-5 European leagues and **explains what drives each prediction**.

- **Live web app (Streamlit):** <https://418final-uxdflcbiixufvv9rpxytej.streamlit.app/>
- **Prediction API (Cloud Run):** <https://market-value-api-348858993647.us-central1.run.app/docs>
- **Code:** [github.com/lacygus/418_final](https://github.com/lacygus/418_final)

**What it does.** Pick any of 2,013 players and see the model's predicted value, an 80%
prediction interval, and per-feature contributions that explain it. Browse the most over-
and under-valued players, compare leagues and positions, and inspect model accuracy
league-by-league.

**Stack.** `RandomForestRegressor` on `log(market_value)` (test R² = 0.59), a FastAPI
service containerized and deployed to Google Cloud Run, and a Streamlit front end, with
the data scraped and cleaned from Transfermarkt and Sofifa.

*Python · scikit-learn · FastAPI · Streamlit · Docker · Google Cloud Run*
