# Guidewire_Devtrails
<div align="center">

<img src="https://img.shields.io/badge/Guidewire-DEVTrails%202026-0047AB?style=for-the-badge&logo=guidewire&logoColor=white"/>
<img src="https://img.shields.io/badge/Phase%201-Ideation%20%26%20Foundation-FF6B00?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Persona-Food%20Delivery-E23744?style=for-the-badge&logo=zomato&logoColor=white"/>
<img src="https://img.shields.io/badge/Coverage-Income%20Loss%20ONLY-2ECC71?style=for-the-badge"/>

---

# 🛡️ GigKavach
### *AI-Powered Parametric Income Insurance for India's Food Delivery Partners*

> **"When the sky shuts you down, GigKavach pays you. Automatically."**

<img src="https://img.shields.io/badge/Platform-Zomato%20%7C%20Swiggy-E23744?style=flat-square"/>
<img src="https://img.shields.io/badge/Weekly%20Premium-₹49%20–%20₹189-4CAF50?style=flat-square"/>
<img src="https://img.shields.io/badge/Claim%20Settlement-Under%2090%20Seconds-2196F3?style=flat-square"/>
<img src="https://img.shields.io/badge/Manual%20Claims%20Filed-ZERO-9C27B0?style=flat-square"/>
<img src="https://img.shields.io/badge/ML%20Models-6%20Active-FF9800?style=flat-square"/>
<img src="https://img.shields.io/badge/License-Proprietary-red?style=flat-square"/>

---

| ₹2,847 Cr | 12M+ | ₹49/week | < 90 sec | 6 |
|:---:|:---:|:---:|:---:|:---:|
| Addressable Market | Delivery Partners in India | Base Weekly Premium | Auto Claim Settlement | ML Models Deployed |

---

</div>

## 📌 Table of Contents

- [🎯 Problem Statement](#-problem-statement)
- [💡 Our Solution](#-our-solution)
- [👤 Target Persona](#-target-persona)
- [📖 Persona-Based Scenarios](#-persona-based-scenarios)
- [⚡ Parametric Trigger Engine](#-parametric-trigger-engine)
- [💳 Weekly Premium Model](#-weekly-premium-model)
- [🏦 Loyalty Pool System](#-loyalty-pool-system)
- [🤖 AI/ML Architecture](#-aiml-architecture)
- [🔐 Fraud Detection](#-fraud-detection)
- [🏗️ System Architecture](#️-system-architecture)
- [📱 Application Flow](#-application-flow)
- [💻 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🗄️ Database Schema](#️-database-schema)
- [🔌 API Integrations](#-api-integrations)
- [📊 Dashboards](#-dashboards)
- [💰 Business Model](#-business-model)
- [⚠️ Risks & Mitigation](#️-risks--mitigation)
- [📅 6-Week Roadmap](#-6-week-roadmap)
- [🌟 Innovation Highlights](#-innovation-highlights)
- [👥 Team](#-team)
- [🔗 Links](#-links)

---

## 🎯 Problem Statement

> India's 5+ million food delivery partners on Zomato and Swiggy are the kinetic backbone of a ₹55,000 crore industry — yet they operate with **zero financial safety net.**

### The Income Collapse Table

| Day | Conditions | Deliveries | Earnings |
|-----|-----------|------------|---------|
| Monday | ☀️ Clear sky, moderate traffic | 22 orders | ₹1,100 |
| Tuesday | 🌤️ Overcast, mild wind | 18 orders | ₹870 |
| Wednesday | 🌧️ **IMD Red Alert — Heavy Rain** | 3 orders | ₹180 |
| Thursday | 😷 **AQI > 350 — Severe Pollution** | 0 orders | ₹0 |
| Friday | 🚫 **City Curfew — Section 144** | 0 orders | ₹0 |
| Saturday | 🌤️ Moderate traffic | 20 orders | ₹980 |
| Sunday | 🎉 Festival, surge pricing | 28 orders | ₹1,600 |
| **WEEKLY TOTAL** | | | **₹4,730** *(vs ₹6,720 projected)* |

> **₹1,990 lost — 30% of expected earnings — in a single week. GigKavach would have automatically recovered ₹1,500–₹1,980 of this loss.**

### Why No Existing Solution Works

| Risk Category | PM-SBY | ESIC | Bajaj/ACKO Gig | **GigKavach** |
|---|:---:|:---:|:---:|:---:|
| Income loss from rain/weather | ❌ | ❌ | ❌ | ✅ |
| Income loss from AQI/pollution | ❌ | ❌ | ❌ | ✅ |
| Income loss from curfew/strike | ❌ | ❌ | ❌ | ✅ |
| Income loss from platform outage | ❌ | ❌ | ❌ | ✅ |
| Weekly pricing model | ❌ | ❌ | ❌ | ✅ |
| Auto-trigger payout < 2 minutes | ❌ | ❌ | ❌ | ✅ |
| Hyper-local risk zone pricing | ❌ | ❌ | ⚠️ Partial | ✅ |

---

## 💡 Our Solution

**GigKavach** is a Progressive Web App + Insurer Admin Portal that delivers **parametric income insurance** through three technological pillars:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   PILLAR 1              PILLAR 2              PILLAR 3      │
│                                                             │
│  ⚡ PARAMETRIC       🤖 AI-POWERED         🔐 FRAUD        │
│   TRIGGER ENGINE      DYNAMIC PRICING      DETECTION       │
│                                                             │
│  Monitors 7 APIs      XGBoost ML           Isolation       │
│  every 5–15 mins      calculates ₹49–189   Forest +        │
│  across 5 trigger     weekly premium per   GPS Classifier  │
│  types 24/7           worker per zone      + Peer Network  │
│                                                             │
│         AUTO-CLAIM ──► FRAUD CHECK ──► INSTANT UPI PAYOUT  │
│                    (Under 90 seconds end-to-end)            │
└─────────────────────────────────────────────────────────────┘
```

### What Makes GigKavach Different

| Feature | Traditional Insurance | **GigKavach** |
|---|---|---|
| Coverage Type | Health, Life, Vehicle | **Income Loss ONLY** ✅ |
| Claim Process | Manual, 7–30 days | **Auto-triggered, 90 seconds** |
| Pricing Cycle | Monthly / Annual | **Weekly (every Monday)** |
| Risk Assessment | Generic actuarial tables | **Hyper-local XGBoost ML** |
| Fraud Detection | Manual adjuster review | **Isolation Forest AI + GPS** |
| Payout Channel | Cheque / NEFT (days) | **Instant UPI / PhonePe** |
| Language | English only | **Hindi, Tamil, English** |
| Device | Smartphone / Desktop | **2GB RAM Android PWA** |

---

## 👤 Target Persona

<table>
<tr>
<td width="50%">

### 🛵 Ravi Kumar — Food Delivery Partner

| Attribute | Details |
|---|---|
| **Age** | 24 years |
| **Platform** | Zomato (primary) + Swiggy |
| **City / Zone** | Mumbai — Andheri East |
| **Vehicle** | Honda Activa (2-stroke) |
| **Work Hours** | 8–12 hrs/day, 6 days/week |
| **Weekly Earnings** | ₹5,500 – ₹7,000 |
| **Education** | 10th pass; uses app in Hindi |
| **Smartphone** | Redmi 9A (3GB RAM, Android 10) |
| **Banking** | Jan Dhan + PhonePe UPI |
| **Insurance Status** | ❌ NONE |
| **Disruptions Last Month** | 6 days = **₹2,100 lost** |

</td>
<td width="50%">

### 😰 Ravi's Primary Fear

> *"Rain mein kaam nahi hota,*
> *lekin EMI banda nahi hoti."*
>
> *(Work stops in rain,*
> *but EMI doesn't.)*

### 💸 His Daily Fixed Costs (Never Pause)

| Expense | Daily Cost |
|---|---|
| Fuel / EV Charging | ₹150 – ₹250 |
| Vehicle EMI / Rental | ₹100 – ₹200 |
| Mobile Data | ₹16 – ₹25 |
| Food & Water | ₹60 – ₹100 |
| **TOTAL** | **₹326 – ₹575/day** |

</td>
</tr>
</table>

---

## 📖 Persona-Based Scenarios

### 🌧️ Scenario A — The Chennai Flood Week

```
SITUATION:
  Ravi works in Chennai (Velachery zone) — a High Risk flood zone.
  December 2026: IMD issues Heavy Rainfall Warning > 64.5mm/24hr.
  Zomato suspends deliveries in Velachery zone.
  Ravi cannot earn for 7 hours.

WITHOUT GigKavach:
  → Ravi loses ₹1,800 this week
  → No compensation, no appeal, no recourse
  → EMI goes unpaid. Family stress increases.

WITH GigKavach:
  ✅ Weather API detects rainfall crossing 64.5mm threshold
  ✅ Ravi's ₹120/week Seasonal Plan (Sep–Dec) is active
  ✅ GPS confirms Ravi is within the affected zone boundary
  ✅ Fraud engine scores claim: LEGITIMATE
  ✅ Payout: ₹60 × 7hrs × 1.25 ZRM × 1.2 tier = ₹630
  ✅ + Loyalty Bonus (32 weeks paid, 0 claims): ₹500
  ✅ Total credited to PhonePe: ₹1,130 — in 87 seconds
  ✅ SMS in Tamil: "GigKavach ₹1,130 ungal account-il serthathu"
```

---

### 😷 Scenario B — Delhi AQI Emergency

```
SITUATION:
  Worker in Connaught Place, Delhi.
  Thursday: CPCB broadcasts AQI = 418 (Severe) for their zone.
  Outdoor delivery is medically inadvisable.
  8 hours of work lost.

WITH GigKavach:
  ✅ CPCB/SAFAR API detects AQI crossing 300 threshold for 2+ hours
  ✅ Trigger 2 (Severe Pollution) fires for Connaught Place zone
  ✅ Peer validation: 4 other workers in 2km radius confirm trigger
  ✅ Payout: ₹60 × 8hrs × 1.1 ZRM × 1.0 Basic = ₹528
  ✅ Wellness Vault additionally flags respiratory risk
  ✅ N95 mask subsidy linked through partner NGO
```

---

### 🚫 Scenario C — The Loyal Worker Reward

```
SITUATION:
  Karthik (Coimbatore) pays ₹80/week from Jan–Aug 2026 = 32 weeks
  Zero claims in these 32 weeks → Loyalty Pool builds up
  September: Plan auto-upgrades to ₹120/week Seasonal Plan
  November: AQI crosses 300 in his zone

WITH GigKavach:
  ✅ AQI trigger fires automatically
  ✅ Base payout: ₹60 × 8hrs = ₹480
  ✅ Zone Risk Multiplier (1.0 Low Risk) → ₹480
  ✅ LOYALTY POOL BONUS (25% of ₹2,560 paid Jan–Aug) = ₹500 (capped)
  ✅ Total received: ₹980 — more than a full workday's income
  
  WHY THIS MATTERS:
  Karthik asks "Why pay ₹80 in safe months?"
  Answer: Because those safe months BUILD his disaster safety net.
```

---

## ⚡ Parametric Trigger Engine

> **Parametric = Automatic.** When an objective, measurable threshold is breached in the worker's active zone — the trigger IS the claim. Zero human action required.

### 5 Core Parametric Triggers

| # | Trigger | Threshold | Data Source | Payout Formula | Max/Day |
|---|---------|-----------|-------------|---------------|---------|
| 🌧️ **1** | Heavy Rainfall | Rainfall > 50mm/hr OR IMD Red Alert | IMD + OpenWeatherMap | ₹60 × blocked hours | ₹480 |
| 😷 **2** | Severe Pollution | AQI > 300 for > 2 hours in zone | CPCB + SAFAR API | ₹60 × hours above threshold | ₹480 |
| 🔥 **3** | Extreme Heat | Temp > 45°C + Heat Index > 50°C | IMD + MAUSAM Portal | ₹60 × hours in alert | ₹360 |
| 🚫 **4** | Curfew / Strike | Section 144 OR platform zone suspension | Govt NLP + Platform Mock | ₹540 flat (full shift) | ₹540 |
| 📱 **5** | Platform Outage | Zero orders for > 90 min (3-worker verified) | Platform API Mock + Peers | ₹60 × outage hours | ₹300 |

### Payout Formula

```
Daily Payout = Base Rate (₹60) × Verified Blocked Hours
               × Zone Risk Multiplier (ZRM)
               × Policy Tier Multiplier

Zone Risk Multiplier:
  Low Risk Zone    → ZRM = 1.00  (e.g., Coimbatore)
  Medium Risk Zone → ZRM = 1.10  (e.g., Bangalore)
  High Risk Zone   → ZRM = 1.25  (e.g., Mumbai Andheri East)

Policy Tier Multiplier:
  Basic    → 1.0x
  Standard → 1.2x
  Premium  → 1.5x

Example:
  Andheri East (ZRM=1.25) + Standard (1.2x) + 6 hours blocked
  = ₹60 × 6 × 1.25 × 1.2 = ₹540
```

---

## 💳 Weekly Premium Model

### Why Weekly?

> Zomato and Swiggy settle partner earnings **every Monday.**
> A ₹350/month premium creates affordability anxiety.
> ₹89 deducted the same day earnings arrive = **zero friction.**
> Weekly pricing also allows ML to **recalculate every Monday** based on last week's weather and next week's LSTM forecast.

### Three-Tier Policy Structure

<table>
<thead>
<tr>
<th>Feature</th>
<th>🟢 BASIC<br/>GigSuraksha</th>
<th>🟡 STANDARD<br/>GigKavach</th>
<th>🔴 PREMIUM<br/>GigShield</th>
</tr>
</thead>
<tbody>
<tr><td><strong>Weekly Premium (Low Risk)</strong></td><td>₹49/week</td><td>₹89/week</td><td>₹149/week</td></tr>
<tr><td><strong>Weekly Premium (High Risk)</strong></td><td>₹72/week</td><td>₹129/week</td><td>₹189/week</td></tr>
<tr><td><strong>Max Daily Payout</strong></td><td>₹300</td><td>₹500</td><td>₹800</td></tr>
<tr><td><strong>Max Weekly Payout</strong></td><td>₹900</td><td>₹1,500</td><td>₹2,400</td></tr>
<tr><td><strong>Triggers Covered</strong></td><td>Rain + AQI only</td><td>All 5 triggers</td><td>All 5 + Platform Outage</td></tr>
<tr><td><strong>Payout Speed</strong></td><td>< 5 minutes</td><td>< 90 seconds</td><td>< 30 seconds (Priority)</td></tr>
<tr><td><strong>Wellness Vault</strong></td><td>Basic tips</td><td>Full access</td><td>Premium + specialist link</td></tr>
<tr><td><strong>Policy Renewal</strong></td><td>Auto Monday</td><td>Auto Monday</td><td>Auto + 4-week price lock</td></tr>
<tr><td><strong>Best For</strong></td><td>New workers</td><td>Regular full-time riders</td><td>Extreme risk zones</td></tr>
</tbody>
</table>

### Geo-Dynamic Pricing by City Zone

| City Zone | Risk Level | Jan–Aug | Sep–Dec | ZRM |
|---|---|---|---|---|
| Chennai (Velachery) | 🔴 HIGH | ₹89 | ₹129 | 1.25 |
| Mumbai (Andheri East) | 🔴 HIGH | ₹89 | ₹129 | 1.25 |
| Delhi (Connaught Place) | 🟡 MEDIUM | ₹89 | ₹109 | 1.10 |
| Bangalore (Koramangala) | 🟡 MEDIUM | ₹89 | ₹109 | 1.10 |
| Coimbatore (Any Zone) | 🟢 LOW | ₹49 | ₹72 | 1.00 |

---

## 🏦 Loyalty Pool System

> **Our Core Innovation — The answer to "Why pay when nothing happens?"**

```
HOW IT WORKS:

  Week 1–8   → Worker pays ₹80/week, no claims
               → 10% of ₹640 = ₹64 locked in Loyalty Pool

  Week 9–16  → Worker pays ₹80/week, no claims
               → 15% of ₹1,280 = ₹192 locked

  Week 17–26 → Worker pays ₹80/week, no claims
               → 20% of ₹2,080 = ₹416 locked

  Week 26+   → Worker pays ₹80/week, no claims
               → 25% of ₹2,560 = ₹640 → CAPPED at ₹500

  DISRUPTION HITS IN WEEK 32:
    Base Payout:    ₹540 (from active ₹120/week plan)
    Loyalty Bonus:  ₹500 (from 32 loyal weeks)
    ─────────────────────────────────
    TOTAL RECEIVED: ₹1,040 ← More than a full workday's income
```

### Loyalty Unlock Table

| Continuous Paid Weeks (0 claims) | Pool Unlock % | Example (₹80/week) |
|---|---|---|
| 4 – 8 weeks | 10% | ₹32 – ₹64 bonus |
| 9 – 16 weeks | 15% | ₹108 – ₹192 bonus |
| 17 – 26 weeks | 20% | ₹272 – ₹416 bonus |
| 26+ weeks | **25%** | **Up to ₹500 (capped)** |

> ⚠️ Loyalty bonus capped at ₹500 per event to protect insurer pool solvency.

---

## 🤖 AI/ML Architecture

### 6-Model ML Pipeline Overview

```
                    ┌─────────────────────────────────────────┐
                    │         GIGKAVACH ML PIPELINE           │
                    └──────────────────┬──────────────────────┘
                                       │
              ┌────────────────────────▼─────────────────────────┐
              │              WORKER ONBOARDS                      │
              │    City + Zone + Pincode + Platform ID            │
              └────────────────────────┬─────────────────────────┘
                                       │
              ┌────────────────────────▼─────────────────────────┐
              │         MODEL 1: K-MEANS CLUSTERING               │
              │    Assigns worker's pincode to Risk Tier 1–5      │
              │    Input: Disruption freq, rainfall, flood zone   │
              │    Output: Zone Risk Multiplier (ZRM = 1.0–1.25)  │
              └────────────────────────┬─────────────────────────┘
                                       │
              ┌────────────────────────▼─────────────────────────┐
              │         MODEL 2: XGBOOST PREMIUM ENGINE           │
              │    Calculates personalised weekly premium         │
              │    Input: ZRM + season + AQI + tenure + LSTM score│
              │    Output: ₹49 – ₹189 weekly premium              │
              └────────────────────────┬─────────────────────────┘
                                       │
                          ┌────────────▼────────────┐
                          │    WEEKLY SUBSCRIPTION   │
                          │    ACTIVE — MONITORING   │
                          └────────────┬────────────┘
                                       │
              ┌────────────────────────▼─────────────────────────┐
              │         MODEL 3: LSTM RISK FORECASTER             │
              │    Predicts next 7-day disruption risk per zone   │
              │    Input: 14 days sequential weather data         │
              │    Output: Risk Score 0.0–1.0 (shown on dashboard)│
              └────────────────────────┬─────────────────────────┘
                                       │
                    ┌──────────────────▼───────────────────┐
                    │    API POLLING DETECTS THRESHOLD      │
                    │    BREACH IN WORKER'S ACTIVE ZONE     │
                    └──────────────────┬───────────────────┘
                                       │
              ┌────────────────────────▼─────────────────────────┐
              │      MODEL 4: RANDOM FOREST TRIGGER CLASSIFIER    │
              │    Is this event severe enough to trigger payout? │
              │    Input: Real-time weather + IMD alerts + peers  │
              │    Output: TRIGGER = YES (1) / NO (0) + confidence│
              └────────────────────────┬─────────────────────────┘
                                       │ YES
              ┌────────────────────────▼─────────────────────────┐
              │      MODEL 5: ISOLATION FOREST FRAUD DETECTOR     │
              │    Does this claim look statistically normal?     │
              │    Input: Claim freq, amount, timing, zone, AQI   │
              │    Output: LEGITIMATE (1) / FRAUD (-1)            │
              └────────────────────────┬─────────────────────────┘
                                       │
              ┌────────────────────────▼─────────────────────────┐
              │      MODEL 5b: RANDOM FOREST GPS CLASSIFIER       │
              │    Is the worker's GPS trace genuine delivery?    │
              │    Input: Speed, turns, stops, velocity variance  │
              │    Output: GENUINE / SPOOFED                      │
              └────────────────────────┬─────────────────────────┘
                                       │ LEGITIMATE
              ┌────────────────────────▼─────────────────────────┐
              │         MODEL 6: TF-IDF + LOGISTIC REGRESSION     │
              │    NLP: Detects curfew/strike from news feeds     │
              │    Input: NewsAPI + PIB RSS headlines             │
              │    Output: TRIGGER-ELIGIBLE / NOT-ELIGIBLE        │
              └────────────────────────┬─────────────────────────┘
                                       │
                    ┌──────────────────▼───────────────────┐
                    │    LOYALTY POOL OPTIMIZER             │
                    │    Base Payout + Loyalty Bonus Calc   │
                    └──────────────────┬───────────────────┘
                                       │
                    ┌──────────────────▼───────────────────┐
                    │    RAZORPAY UPI → INSTANT TRANSFER    │
                    │    SMS + WhatsApp + Push Notification │
                    └──────────────────────────────────────┘
```

### ML Model Summary Table

| # | Model | Algorithm | Library | Purpose | Phase |
|---|---|---|---|---|---|
| 1 | Zone Risk Clusterer | **K-Means** | scikit-learn | Segment pincodes into 5 risk tiers | Phase 1 |
| 2 | Premium Calculator | **XGBoost Regressor** | XGBoost 2.0 | Dynamic weekly premium per worker | Phase 2 |
| 3 | Risk Forecaster | **LSTM Neural Network** | TensorFlow 2.16 | 7-day disruption risk forecast | Phase 3 |
| 4 | Trigger Classifier | **Random Forest** | scikit-learn | Real-time TRIGGER = YES/NO | Phase 2 |
| 5 | Fraud Detector | **Isolation Forest** | scikit-learn | Anomaly detection on claims | Phase 3 |
| 5b | GPS Classifier | **Random Forest** | scikit-learn | GPS spoofing detection | Phase 3 |
| 6 | Curfew NLP | **TF-IDF + LogReg** | scikit-learn | News-based curfew trigger | Phase 2 |

---

## 🔐 Fraud Detection

> Parametric insurance's unique challenge: payouts trigger on data thresholds, not damage proof. **Three fraud vectors. Three AI layers. Zero tolerance.**

### Three-Layer Fraud Shield

```
EVERY CLAIM PASSES THROUGH ALL 3 LAYERS IN < 5 SECONDS

LAYER 1 ──── ISOLATION FOREST ANOMALY DETECTION
│
│  Scores claim against historical distribution for
│  that zone + trigger type + time-of-day
│  Flags: Ghost accounts, unusual amounts, bad timing
│  Threshold: > 2 standard deviations = FLAGGED
│
│  Features: claim_frequency, payout_amount, time_of_day,
│            zone_id, weather_deviation, policy_age
│
└──── SCORE < THRESHOLD? ──► Continue to Layer 2
      SCORE > THRESHOLD? ──► Escalate to Manual Review

LAYER 2 ──── GPS BEHAVIOUR ANALYSIS (Random Forest)
│
│  Analyses device GPS trace in 30-min pre-trigger window
│  GENUINE:  12–30 km/h velocity, frequent turns,
│            restaurant + customer stop clusters
│  SPOOFED:  Stationary cluster OR impossible jumps
│            (200km movement in 10 minutes)
│
│  Features: avg_speed, turn_frequency, unique_coords,
│            velocity_variance, stop_cluster_density
│
└──── GENUINE? ──► Continue to Layer 3
      SPOOFED? ──► AUTO-REJECT + Flag account

LAYER 3 ──── PEER VALIDATION NETWORK
│
│  Minimum 3 verified workers within 2km radius
│  must have the SAME trigger fire simultaneously
│
│  If only 1–2 trigger while 10+ in zone do not:
│  → Escalate to Manual Review Queue
│
│  3+ peers confirm? → AUTO-APPROVE
│
└──── ALL LAYERS PASS? ──► INITIATE PAYOUT
```

### Additional Fraud Safeguards

| Safeguard | Implementation |
|---|---|
| **Triple KYC** | Phone + Aadhaar hash + Platform ID at onboarding |
| **Velocity Throttle** | Max 2 claims/week (Basic), 4 (Standard), 5 (Premium) |
| **48hr Cooling Period** | Enhanced GPS monitoring post-claim |
| **Duplicate Prevention** | One claim per trigger event per worker |
| **Trusted Status** | 6+ months clean history → bypass pre-screen |
| **Manual Review Queue** | Flagged claims → insurer admin within 24hrs |

---

## 🏗️ System Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                     EXTERNAL DATA SOURCES LAYER                       │
│  [IMD API]  [CPCB/SAFAR]  [OpenWeatherMap]  [NewsAPI]  [Platform Mock]│
└───────────────────────────────┬──────────────────────────────────────┘
                                │  API Polling (5–30 min intervals)
┌───────────────────────────────▼──────────────────────────────────────┐
│              PARAMETRIC TRIGGER ENGINE  (FastAPI + Bull Queue)        │
│   Threshold Evaluator → Zone-Worker Matcher → LSTM Forecaster         │
└──────┬──────────────────────────────────────────────────┬────────────┘
       │ TRIGGER EVENT                                     │ NO TRIGGER
┌──────▼──────────────────┐                  ┌────────────▼──────────┐
│    FRAUD DETECTION       │                  │  MONITORING DASHBOARD  │
│  Layer 1: Isolation      │                  │  (Grafana + Redis)     │
│  Layer 2: GPS RF         │                  │  Zone status live feed │
│  Layer 3: Peer Network   │                  └────────────────────────┘
└──────┬──────────────────┘
       │ CLEAN CLAIM
┌──────▼──────────────────────────────────────────────────────────────┐
│           CLAIM PROCESSING & PAYOUT ENGINE  (Node.js / Next.js API)  │
│    XGBoost Calc → Loyalty Pool → Policy Lookup → Razorpay UPI       │
│                          → Twilio SMS/WhatsApp                       │
└──────┬──────────────────────────────────────────────────────────────┘
       │  REST API + WebSocket (Real-time updates)
┌──────▼──────────────────────┐  ┌─────────────────────────────────────┐
│  WORKER PWA                  │  │  INSURER ADMIN PORTAL               │
│  (Next.js 14 + React)        │  │  (Next.js 14 Admin Routes)          │
│                              │  │                                     │
│  • Onboarding (5 steps)      │  │  • Portfolio Overview               │
│  • Policy Status Card        │  │  • Loss Ratio Monitor               │
│  • Zone Risk Indicator       │  │  • Fraud Queue (GPS Replay)         │
│  • Earnings Protected Bar    │  │  • Predictive Claims (LSTM)         │
│  • Payout History            │  │  • Zone Risk Heatmap                │
│  • Disruption Alert Feed     │  │  • Worker Wellness Index            │
│  • Wellness Vault            │  │                                     │
└─────────────────────────────┘  └─────────────────────────────────────┘
            │                                      │
┌───────────▼──────────────────────────────────────▼─────────────────┐
│                          DATABASE LAYER                              │
│   PostgreSQL + PostGIS (Supabase)    |    MongoDB (Audit Logs)      │
│   Prisma ORM                         |    Redis (Cache + Sessions)  │
└─────────────────────────────────────────────────────────────────────┘
            │
┌───────────▼────────────────────────────────────────────────────────┐
│                       ML SERVICE LAYER                              │
│                    FastAPI (Python)                                 │
│   /premium/calculate  →  XGBoost                                   │
│   /fraud/check        →  Isolation Forest + GPS RF                 │
│   /forecast/{zone}    →  LSTM TensorFlow                           │
│   /trigger/classify   →  Random Forest                             │
│   /cluster/zone       →  K-Means                                   │
│   /nlp/classify       →  TF-IDF + LogReg                          │
└────────────────────────────────────────────────────────────────────┘
```

---

## 📱 Application Flow

### 🔵 Worker Onboarding Flow (5 Minutes, Zero Paperwork)

```
Step 1 ── App Discovery
  Worker receives WhatsApp link from Zomato partner community.
  Opens in Chrome browser → PWA installs (no Play Store needed).
  Time: 5 seconds

Step 2 ── Phone OTP Registration
  Enters mobile number → OTP via Twilio SMS.
  Language selection: English / Hindi / Tamil.
  Time: 30 seconds

Step 3 ── Platform Verification
  Enters Zomato Partner ID OR scans QR from Zomato app.
  System calls Platform API Mock to confirm active delivery status.
  Time: 20 seconds

Step 4 ── Zone & AI Risk Profiling
  Worker enters operating pincode.
  K-Means assigns risk tier. XGBoost calculates premium.
  Worker sees their personalised quote instantly.
  AI Processing Time: 2 seconds

Step 5 ── Premium Quote & Policy Purchase
  Dashboard shows: "Your zone: Andheri East (High Risk ⚠️)
  Coverage: ₹500/day income protection.
  Your weekly premium: ₹89"
  Worker pays via UPI/PhonePe.
  Policy activates in 60 seconds.
  Auto-renews every Monday.
  Time: 60 seconds

TOTAL ONBOARDING TIME: ~5 minutes. Zero paperwork. Zero branch visit.
```

### 🔴 Automated Claim & Payout Flow (Under 90 Seconds)

```
  T+0:00  →  API Polling detects rainfall = 85mm/hr in Zone X
  T+0:02  →  Threshold evaluation: 85mm > 50mm threshold ✅
  T+0:04  →  Zone-worker matching: 47 active policies in Zone X found
  T+0:06  →  Random Forest Trigger Classifier: TRIGGER = YES (0.94 confidence)
  T+0:08  →  Layer 1 Fraud: Isolation Forest score = 0.12 (LEGITIMATE)
  T+0:12  →  Layer 2 GPS: RF classifier = GENUINE delivery movement
  T+0:15  →  Layer 3 Peers: 5 workers in 2km radius confirm trigger ✅
  T+0:17  →  Payout calculation: ₹60 × 7hrs × 1.25 × 1.2 = ₹630
  T+0:18  →  Loyalty Pool check: 32 weeks × 25% = ₹500 bonus
  T+0:19  →  Total payout: ₹1,130 approved and logged
  T+1:27  →  Razorpay UPI transfer initiated
  T+1:32  →  UPI transfer confirmed via webhook
  T+1:32  →  Push notification sent to worker's app
  T+1:33  →  SMS in Hindi: "GigKavach ne ₹1,130 aapke account mein bheje hain"
  T+1:33  →  WhatsApp receipt delivered
  T+1:33  →  Insurer dashboard updated with claim record and loss ratio delta

  TOTAL: 93 seconds from rainfall detection to money in worker's account.
```

---

## 💻 Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| **Next.js 14** | App Router | Worker PWA + Admin Portal (single codebase) |
| **React 18** | 18.3 | Component architecture |
| **Tailwind CSS** | v3.4 | Mobile-first responsive styling |
| **TanStack Query** | v5.0 | Server state + background sync |
| **Zustand** | v4.5 | Global state management |
| **React-Leaflet** | v4.x | Zone risk heatmap (Leaflet.js) |
| **Recharts** | v2.x | Earnings + payout charts |
| **next-intl** | v3.x | EN / HI / TA translations |
| **next-pwa** | v5.x | PWA manifest + service worker |
| **Framer Motion** | v11 | UI animations |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| **Next.js API Routes** | 14 | REST API (auth, policies, claims, payouts) |
| **FastAPI (Python)** | v0.111 | ML model serving microservice |
| **Prisma ORM** | v5.x | Type-safe PostgreSQL queries |
| **Bull Queue** | v4.x | Background jobs (API polling, renewals) |
| **NextAuth v5** | v5.0 | OTP-based phone authentication |
| **Zod** | v3.x | Runtime API input validation |

### Database & Cache
| Technology | Version | Purpose |
|---|---|---|
| **Supabase PostgreSQL** | v16 | Primary DB (workers, policies, claims) |
| **PostGIS Extension** | v3.4 | Geospatial zone queries + GPS validation |
| **MongoDB Atlas** | v7.0 | Trigger event logs + fraud audit trail |
| **Upstash Redis** | v7.2 | Session cache + real-time trigger state |

### ML / AI Stack
| Technology | Version | Purpose |
|---|---|---|
| **XGBoost** | 2.0 | Dynamic premium calculation |
| **scikit-learn** | 1.5 | Isolation Forest, Random Forest, K-Means, TF-IDF |
| **TensorFlow + Keras** | 2.16 | LSTM risk forecasting model |
| **Pandas + NumPy** | Latest | Data processing pipeline |
| **FastAPI** | v0.111 | Serve all 6 ML models as REST endpoints |

### External APIs (All Free Tier)
| API | Provider | Data | Polling |
|---|---|---|---|
| Weather | IMD + OpenWeatherMap | Rainfall, temp, wind | Every 10 min |
| AQI | CPCB + SAFAR | AQI, PM2.5, PM10 | Every 15 min |
| Traffic | HERE Maps Free | Zone congestion | Every 20 min |
| Platform | Zomato/Swiggy Mock | Zone availability | Every 5 min |
| Payment | Razorpay Test Mode | UPI payout | On-demand |
| SMS/WA | Twilio Sandbox | Alert notifications | On-event |
| News NLP | NewsAPI + PIB RSS | Curfew / strike news | Every 30 min |

### DevOps & Hosting (Zero Cost)
| Service | Used For | Cost |
|---|---|---|
| **Vercel** | Next.js frontend + API routes | Free |
| **Render** | FastAPI ML service | Free |
| **Supabase** | PostgreSQL + PostGIS | Free (500MB) |
| **MongoDB Atlas** | Document store | Free (512MB) |
| **Upstash** | Redis cache | Free (10k req/day) |
| **GitHub Actions** | CI/CD pipeline | Free |
| **Docker Compose** | Local development | Free |

---

## 📁 Project Structure

```
gigkavach/
│
├── apps/
│   ├── web/                         ← Next.js 14 (Worker PWA + Admin Portal)
│   │   ├── app/
│   │   │   ├── (auth)/              ← Login + Registration flows
│   │   │   │   ├── login/
│   │   │   │   └── register/        ← 5-step onboarding wizard
│   │   │   ├── (worker)/            ← Worker-facing PWA
│   │   │   │   ├── dashboard/       ← Home screen with live widgets
│   │   │   │   ├── policy/          ← Active policy management
│   │   │   │   ├── claims/          ← Claim history + status
│   │   │   │   ├── payouts/         ← Payout history + receipts
│   │   │   │   ├── alerts/          ← Real-time disruption alerts
│   │   │   │   └── wellness-vault/  ← Hair + skin risk modules
│   │   │   ├── (insurer)/           ← Admin portal
│   │   │   │   └── admin/
│   │   │   │       ├── dashboard/   ← Portfolio overview
│   │   │   │       ├── claims/      ← All claims + fraud queue
│   │   │   │       ├── fraud/       ← Isolation Forest queue
│   │   │   │       ├── analytics/   ← Loss ratios + financial metrics
│   │   │   │       └── forecast/    ← LSTM next-week prediction
│   │   │   └── api/                 ← Next.js API Routes
│   │   │       ├── auth/            ← OTP send/verify
│   │   │       ├── workers/         ← Worker CRUD
│   │   │       ├── policies/        ← Policy management
│   │   │       ├── premium/calculate ← Calls FastAPI XGBoost
│   │   │       ├── claims/          ← Claims processing
│   │   │       ├── triggers/        ← Trigger check + status
│   │   │       ├── payouts/         ← Razorpay + webhook
│   │   │       └── fraud/check      ← Calls FastAPI fraud engine
│   │   ├── components/
│   │   │   ├── worker/              ← PolicyCard, ZoneRisk, PayoutHistory
│   │   │   ├── insurer/             ← LossRatio, FraudQueue, ZoneHeatmap
│   │   │   ├── onboarding/          ← Step1–Step5 components
│   │   │   ├── triggers/            ← TriggerBadge, WeatherWidget, AQIGauge
│   │   │   └── ui/                  ← Button, Card, Badge, Toast, Modal
│   │   ├── lib/
│   │   │   ├── ml-client.ts         ← FastAPI caller
│   │   │   ├── razorpay.ts          ← Payment SDK
│   │   │   ├── trigger-engine.ts    ← Core trigger logic
│   │   │   ├── payout-calculator.ts ← Payout formula
│   │   │   └── loyalty-pool.ts      ← Loyalty bonus calc
│   │   └── i18n/
│   │       ├── en.json
│   │       ├── hi.json              ← Hindi translations
│   │       └── ta.json              ← Tamil translations
│   │
│   └── ml-service/                  ← FastAPI Python (All 6 ML Models)
│       ├── app/
│       │   ├── api/
│       │   │   ├── premium.py       ← POST /premium/calculate (XGBoost)
│       │   │   ├── fraud.py         ← POST /fraud/check (Isolation Forest)
│       │   │   ├── forecast.py      ← GET /forecast/{zone} (LSTM)
│       │   │   ├── trigger.py       ← POST /trigger/classify (RF)
│       │   │   ├── cluster.py       ← GET /cluster/zone-risk (K-Means)
│       │   │   └── nlp.py           ← POST /nlp/classify (TF-IDF+LR)
│       │   ├── models/
│       │   │   ├── premium_engine/  ← xgboost_model.pkl
│       │   │   ├── fraud_detector/  ← isolation_forest.pkl + gps_rf.pkl
│       │   │   ├── risk_forecaster/ ← lstm_model.h5
│       │   │   ├── trigger_classifier/ ← rf_trigger.pkl
│       │   │   ├── zone_clusterer/  ← kmeans_zones.pkl
│       │   │   └── curfew_nlp/      ← tfidf_logreg.pkl
│       │   ├── services/
│       │   │   ├── trigger_engine.py
│       │   │   ├── payout_calculator.py
│       │   │   ├── weather_client.py
│       │   │   └── peer_validator.py
│       │   ├── tasks/
│       │   │   ├── api_polling.py   ← Every 10–15 min weather poll
│       │   │   ├── premium_renewal.py ← Monday auto-renewal
│       │   │   └── model_retrain.py ← Monthly retraining pipeline
│       │   └── data/                ← Training datasets (CSV)
│       └── requirements.txt
│
├── packages/
│   └── database/
│       └── prisma/
│           └── schema.prisma        ← Worker, Policy, Claim, TriggerEvent
│
├── docker-compose.yml               ← web + ml-service + postgres + redis
├── .env.example
└── turbo.json                       ← Turborepo monorepo config
```

---

## 🗄️ Database Schema

```prisma
model Worker {
  id              String   @id @default(cuid())
  phone           String   @unique
  zomatoPartnerId String?
  cityZone        String                        // "Chennai-Velachery"
  pincode         String
  riskTier        Int      @default(1)          // 1–5 (K-Means cluster)
  loyaltyWeeks    Int      @default(0)
  totalPremiumPaid Float   @default(0)
  policies        Policy[]
  claims          Claim[]
  wellnessProfile WellnessProfile?
}

model Policy {
  id            String      @id @default(cuid())
  workerId      String
  tier          PolicyTier  // BASIC | STANDARD | PREMIUM
  weeklyPremium Float
  startDate     DateTime
  endDate       DateTime
  isActive      Boolean     @default(true)
  autoRenew     Boolean     @default(true)
  zoneRiskMult  Float       @default(1.0)       // ZRM at time of purchase
}

model Claim {
  id           String      @id @default(cuid())
  workerId     String
  policyId     String
  triggerType  TriggerType // RAIN|AQI|HEAT|CURFEW|PLATFORM
  triggerValue Float       // Actual reading (e.g., 85mm)
  blockedHours Float
  baseAmount   Float
  loyaltyBonus Float       @default(0)
  totalPayout  Float
  fraudScore   Float       // Isolation Forest anomaly score
  gpsVerified  Boolean     @default(false)
  peerCount    Int         @default(0)
  status       ClaimStatus // PENDING|APPROVED|REJECTED|FRAUD
  payoutId     String?
  createdAt    DateTime    @default(now())
}

model TriggerEvent {
  id              String      @id @default(cuid())
  zone            String
  triggerType     TriggerType
  actualValue     Float
  threshold       Float
  affectedWorkers Int
  firedAt         DateTime
}
```

---

## 🔌 API Integrations

```
┌─────────────────────────────────────────────────────────────────┐
│                    API INTEGRATION MAP                           │
│                                                                  │
│  DATA APIS (Free)           PAYMENT & COMMS                     │
│  ─────────────────          ────────────────────────────        │
│  📡 OpenWeatherMap          💳 Razorpay Test Mode               │
│     Rainfall, temp, wind       UPI payout simulation            │
│     Polling: 10 min            On-demand payout initiation      │
│                                Webhook for confirmation         │
│  🌫️ CPCB + SAFAR                                               │
│     AQI, PM2.5, PM10        📱 Twilio Sandbox                   │
│     Polling: 15 min            SMS in Hindi/Tamil/English       │
│                                WhatsApp payout receipts         │
│  🌡️ IMD + MAUSAM                                               │
│     Official alerts                                             │
│     Heat wave criteria      PLATFORM APIS (Mock)                │
│                             ─────────────────────────          │
│  🗺️ HERE Maps Free             🛵 Zomato/Swiggy Mock            │
│     Zone congestion             Zone availability status        │
│     Road closures               Order volume index             │
│     Polling: 20 min             Polling: 5 min                 │
│                                                                  │
│  📰 NewsAPI + PIB RSS        AUTH                               │
│     Curfew detection         ────────────────────────          │
│     Strike news                📲 Phone OTP (Twilio)            │
│     Polling: 30 min            🔑 NextAuth v5 (JWT)             │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📊 Dashboards

### Worker Dashboard Widgets

| Widget | Data Shown | Update Frequency |
|---|---|---|
| 🟢 **Policy Status Card** | Active/Lapsed, Plan tier, Renewal date, ₹ coverage this week | Real-time |
| 🔴 **Zone Risk Indicator** | Green/Amber/Red zone status with live weather overlay | Every 10 min |
| 📈 **Earnings Protected Bar** | Total ₹ payouts this week vs premium paid | Per payout |
| 🔔 **Disruption Alert Feed** | "Rain alert: Your zone is under coverage. Auto-payout will initiate if halted." | Push |
| 💰 **Payout History** | Last 12 weeks: date, trigger, ₹ amount, time-to-payout | Per payout |
| 💆 **Wellness Vault Score** | Hair Risk: 34/100 · Skin Risk: 58/100 + weekly wellness tip | Weekly |
| 🏦 **Loyalty Pool Meter** | Weeks paid + current unlock % + estimated bonus | Weekly |

### Insurer Admin Dashboard Panels

| Panel | Analytics Provided |
|---|---|
| 📋 **Portfolio Overview** | Active policies by zone, plan tier, city; weekly premium collected vs projected |
| 📉 **Loss Ratio Monitor** | Real-time loss ratio per zone + trigger type. Red flag if LR > 85% |
| 🚩 **Fraud Queue** | Isolation Forest flagged claims with anomaly score + GPS trace replay |
| 🔮 **Predictive Forecast** | LSTM 7-day disruption probability + expected claims volume + payout liability |
| 🗺️ **Zone Risk Heatmap** | Leaflet.js choropleth map showing claim density + AQI + flood overlay |
| 💚 **Wellness Index** | Aggregate hair/skin risk distribution across portfolio |

---

## 💰 Business Model

### Revenue Simulation (Per 1,000 Workers, Year 1)

| Segment | Workers | Avg Weekly Premium | Annual Premium | Expected Claims | Net Pool |
|---|---|---|---|---|---|
| Low Risk (Coimbatore) | 400 | ₹58/avg | ₹12,00,000 | ₹3,60,000 (30%) | ₹8,40,000 |
| Medium Risk (Bangalore) | 350 | ₹92/avg | ₹16,74,000 | ₹5,86,000 (35%) | ₹10,88,000 |
| High Risk (Chennai/Mumbai) | 250 | ₹107/avg | ₹13,91,000 | ₹5,84,000 (42%) | ₹8,07,000 |
| **TOTAL** | **1,000** | | **₹42,65,000** | **₹15,30,000** | **₹27,35,000** |

> GigKavach retains **15–20% as technology fee** = ₹6.4–8.5L per 1,000 workers/year.
> Target loss ratio: **55–65%** — financially sustainable.

### 3-Year Growth Vision

```
Year 1: Mumbai + Delhi + Bangalore
        → 500,000 active weekly policies
        → ₹284 Crore GWP
        → GigKavach revenue: ₹42–57 Crore

Year 2: 15 Cities
        → Expand to E-commerce (Amazon/Flipkart) + Grocery (Zepto/Blinkit)
        → 2M+ active weekly policies

Year 3: National Scale
        → Mandated social security layer (Code on Social Security 2020)
        → 3M+ gig workers covered across all platform categories
        → IPO readiness
```

---

## ⚠️ Risks & Mitigation

| Risk | Description | Mitigation |
|---|---|---|
| **Adverse Selection** | High-risk zone workers over-subscribe, inflating loss ratio | Zone-based ZRM pricing reflects true risk; auto-adjust if LR > 85% for 2 weeks |
| **API Downtime** | IMD/CPCB APIs fail during critical disruption | 3-source redundancy (IMD + OpenWeatherMap + SAFAR); 2-of-3 consensus for payout |
| **Coordinated Fraud** | Organised groups fake profiles + coordinate claims | Triple KYC + peer validation threshold + Isolation Forest + weekly velocity caps |
| **Low Adoption** | Workers lack smartphone proficiency | WhatsApp-first strategy; Hindi voice interface (Phase 2); Zomato in-app banner |
| **IRDAI Compliance** | Parametric micro-insurance is novel category | Launch under IRDAI Innovation Sandbox 2023; partner with ACKO/Go Digit as underwriter |
| **ML Model Drift** | Models degrade as climate patterns shift | Monthly automated retraining pipeline; Grafana drift alerts on >5% accuracy drop |

---

## 📅 6-Week Roadmap

```
PHASE 1 [Mar 4–20]: Ideation & Foundation ← YOU ARE HERE ✅
├── ✅ Persona definition (Ravi — Zomato food delivery, Mumbai)
├── ✅ GitHub repo + README.md (this document)
├── ✅ Weekly premium model spec + trigger definitions
├── ✅ Parametric trigger table (5 triggers)
├── ✅ ML model selection + architecture designed
├── ✅ Tech stack finalized (Next.js 14 + FastAPI + Supabase)
├── ✅ Folder structure designed
├── ✅ Prisma database schema drafted
├── ⬜ Dataset collection (IMD, CPCB, synthetic CSV generation)
├── ⬜ K-Means zone clustering v1 (initial training)
├── ⬜ XGBoost premium calculator v1 (mock data training)
└── ⬜ 2-minute strategy video recorded and uploaded

PHASE 2 [Mar 21 – Apr 4]: Automation & Protection
├── ⬜ Worker registration PWA (React + OTP auth)
├── ⬜ Policy creation + weekly auto-renewal logic
├── ⬜ XGBoost premium calculator live in FastAPI
├── ⬜ 5 parametric trigger automations (API integrations)
├── ⬜ Random Forest trigger classifier deployed
├── ⬜ Claims management dashboard (worker-facing)
├── ⬜ Razorpay UPI sandbox payout flow (end-to-end)
├── ⬜ Basic Isolation Forest fraud detection
└── ⬜ 2-minute demo video

PHASE 3 [Apr 5–17]: Scale & Optimise
├── ⬜ LSTM weather forecast (TensorFlow, 14-day lookback)
├── ⬜ Advanced GPS spoofing detection (Random Forest)
├── ⬜ Peer validation network (PostGIS spatial queries)
├── ⬜ Full Loyalty Pool implementation
├── ⬜ Wellness Vault (hair loss + skin risk modules)
├── ⬜ Insurer analytics dashboard (loss ratios + heatmap)
├── ⬜ TF-IDF + LogReg NLP curfew detector
├── ⬜ 5-minute final demo video (flood trigger simulation)
└── ⬜ Final pitch deck PDF
```

---

## 🌟 Innovation Highlights

<table>
<tr>
<td align="center" width="25%">

### 🏦 Loyalty Pool
**First in class**

Workers earn from consistency. 32 weeks paid + 0 claims = ₹500 bonus on disaster payout. Solves the "Why pay when nothing happens?" objection permanently.

</td>
<td align="center" width="25%">

### ⚡ 90-Second Payout
**Zero human touch**

From API threshold breach to UPI credit in under 90 seconds. No forms. No calls. No waiting. The trigger IS the claim.

</td>
<td align="center" width="25%">

### 🗺️ Hyper-Local Pricing
**Zone-level precision**

K-Means clusters pincodes into 5 risk tiers. Chennai Velachery ≠ Coimbatore. Fairer pricing. More accurate triggers. Better loss ratios.

</td>
<td align="center" width="25%">

### 💆 Wellness Vault
**First of its kind**

Hair loss + skin risk scoring for delivery workers. Not health insurance — occupational awareness that feeds actuarial modelling.

</td>
</tr>
</table>

---

## 🛠️ Local Development Setup

```bash
# Clone the repository
git clone https://github.com/[YOUR-TEAM]/gigkavach.git
cd gigkavach

# Install dependencies (monorepo)
npm install

# Copy environment variables
cp .env.example .env.local
# Fill in: SUPABASE_URL, RAZORPAY_KEY_TEST, TWILIO_SID, OPENWEATHER_KEY

# Start all services with Docker
docker-compose up -d

# Run Next.js frontend
cd apps/web && npm run dev
# → http://localhost:3000 (Worker PWA)
# → http://localhost:3000/admin (Insurer Dashboard)

# Run FastAPI ML service
cd apps/ml-service
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
# → http://localhost:8000/docs (Auto API docs)

# Train ML models (first-time setup)
cd apps/ml-service
python app/models/zone_clusterer/train.py     # K-Means
python app/models/premium_engine/train.py    # XGBoost
python app/models/fraud_detector/train.py    # Isolation Forest
python app/models/trigger_classifier/train.py # Random Forest
```

### Environment Variables Required

```env
# Database
DATABASE_URL=postgresql://...         # Supabase PostgreSQL
MONGODB_URI=mongodb+srv://...          # MongoDB Atlas

# Auth
NEXTAUTH_SECRET=your-secret
TWILIO_ACCOUNT_SID=ACxxxxxx
TWILIO_AUTH_TOKEN=xxxxxx
TWILIO_PHONE=+1xxxxxxxxxx

# APIs
OPENWEATHER_API_KEY=xxxxxx
CPCB_API_KEY=xxxxxx
NEWS_API_KEY=xxxxxx

# Payments
RAZORPAY_KEY_ID=rzp_test_xxxxxx
RAZORPAY_KEY_SECRET=xxxxxx

# ML Service
ML_SERVICE_URL=http://localhost:8000

# Cache
UPSTASH_REDIS_URL=https://...
```

---

## 🎬 What to Expect in Our Demo Video

> 📹 **2-Minute Strategy Video** — [VIDEO LINK HERE]

The video covers:
- `0:00–0:20` — Ravi's ₹1,990 weekly income loss (the problem, real data)
- `0:20–0:40` — GigKavach solution overview + 90-second payout promise
- `0:40–1:00` — Wireframe walkthrough: Worker onboards → picks ₹89/week plan
- `1:00–1:20` — Trigger simulation: Flood fires → auto-payout screen
- `1:20–1:40` — Loyalty Pool explained: "32 weeks paid = ₹500 bonus"
- `1:40–2:00` — ML stack overview + team intro + Phase 2 preview

---

## 👥 Team

| Name | Role | Responsibility |
|---|---|---|
| [Name 1] | 🏗️ Full Stack Lead | Next.js + API architecture |
| [Name 2] | 🤖 ML Engineer | XGBoost + LSTM + Isolation Forest |
| [Name 3] | 🎨 UI/UX + Frontend | PWA + Worker dashboard |
| [Name 4] | ⚙️ Backend + DevOps | FastAPI + Docker + CI/CD |

---

## 🔗 Links

| Resource | Link |
|---|---|
| 📁 **GitHub Repository** | [https://github.com/[TEAM]/gigkavach](https://github.com) |
| 🎥 **Phase 1 Strategy Video** | [YouTube / Loom Link] |
| 🎨 **Figma Wireframes** | [Figma Link] |
| 🌐 **Live Demo (Phase 2)** | [Vercel Deployment Link] |
| 📊 **ML Service API Docs** | [Render Deployment]/docs |

---

<div align="center">

---

### 🏆 Built for Guidewire DEVTrails 2026

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![FastAPI](https://img.shields.io/badge/FastAPI-Python-009688?style=flat-square&logo=fastapi)
![XGBoost](https://img.shields.io/badge/XGBoost-2.0-FF6600?style=flat-square)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.16-FF6F00?style=flat-square&logo=tensorflow)
![scikit-learn](https://img.shields.io/badge/scikit--learn-1.5-F7931E?style=flat-square&logo=scikit-learn)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-PostGIS-336791?style=flat-square&logo=postgresql)
![Redis](https://img.shields.io/badge/Redis-7.2-DC382D?style=flat-square&logo=redis)
![Razorpay](https://img.shields.io/badge/Razorpay-Test%20Mode-02042B?style=flat-square)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker)

---

> **GigKavach** — Income protection for every delivery. Every disruption. Every worker. **Automatically.**
>
> *Guidewire DEVTrails 2026 | Team GigKavach | Phase 1 Submission — March 20, 2026*

</div>
