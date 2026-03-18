# PayMigo

Parametric Insurance for Gig Workers powered by AI.

## Project Structure

This monorepo contains the following complete folder structure:

```
gigkavach/
│
├── apps/
│   ├── web/                          ← Next.js 14 (Worker PWA + Admin)
│   │   ├── app/
│   │   │   ├── (auth)/               ← Auth route group
│   │   │   ├── (worker)/             ← Worker-facing PWA routes
│   │   │   ├── (insurer)/            ← Insurer/Admin portal
│   │   │   └── api/                  ← Next.js API Routes (backend)
│   │   ├── components/               ← Shared & Feature UI components
│   │   ├── lib/                      ← Utility and config files
│   │   ├── hooks/                    ← Custom React hooks
│   │   ├── store/                    ← Zustand global state
│   │   ├── i18n/                     ← Translations
│   │   └── types/                    ← TypeScript type definitions
│   │
│   └── ml-service/                   ← FastAPI Python (All ML Models)
│       ├── app/
│       │   ├── api/                  ← API route handlers
│       │   ├── models/               ← ML model files (XGBoost, LSTM, isolation Forest)
│       │   ├── schemas/              ← Pydantic request/response models
│       │   ├── services/             ← Business logic
│       │   ├── tasks/                ← Background jobs (Bull/Celery)
│       │   └── data/                 ← Training datasets
│       ├── requirements.txt
│       └── Dockerfile
│
├── packages/
│   ├── database/                     ← Prisma schema + migrations
│   ├── shared-types/                 ← TypeScript types shared across apps
│   └── ui/                           ← Shared UI components
│
├── docker/                           ← Docker configs
├── docker-compose.yml
├── .env.example
├── turbo.json                        ← Turborepo monorepo config
└── package.json
```

## Getting Started

### Prerequisites

- Node.js >= 18
- Python >= 3.11
- Docker & Docker Compose

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server (Web App):
   ```bash
   npm run dev
   ```

3. Start services with Docker:
   ```bash
   docker-compose up
   ```
   