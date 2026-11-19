# Nicolás Palacio — Portfolio

> **Full Stack Software Engineer | Building Modular SaaS & Applied AI Systems**  
> _Node.js • TypeScript • Next.js • PostgreSQL • pgvector • Applied AI_

Personal portfolio and technical showcase engineered for international technical recruiters, engineering leaders, and nearshore software teams.

---

## ⚡ Architectural Overview

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack, React 19)
- **Styling & Design System:** [Tailwind CSS v4](https://tailwindcss.com) with OKLCH dynamic color tokenization and Shadcn UI primitives
- **Typography:** `Space Grotesk` (headings/display) and `JetBrains Mono` (code/telemetry)
- **Quality & Defensive Architecture:** Strict TypeScript 5, ESLint 9, zero-leak runtime invariants
- **SEO & Social Graphs:** Fully optimized OpenGraph 1200x630 cards, Twitter Cards, robots indexing, and semantic meta tags

---

## 🌟 Featured Project: SprintHub

**Enterprise-Grade Project & Sprint Management SaaS**

- **Live Demo:** [sprinthub-omega.vercel.app](https://sprinthub-omega.vercel.app/)
- **GitHub & Architecture Docs (SAD / ADRs):** [github.com/nicolasdev97/sprinthub](https://github.com/nicolasdev97/sprinthub)
- **Instant Demo Access:**
  - **Owner / Admin:** `admin@sprinthub.dev` | `Password123!`
  - **Member / Dev:** `dev@sprinthub.dev` | `Password123!`

### Technical Highlights:

1. **Monorepo & Modular Monolith:** `npm workspaces` with strict `Controller → Service → Repository` layering in Node.js 22, Express 5, TypeScript, Prisma 6, PostgreSQL 17, Next.js 15, and Docker.
2. **Defensive Security & RBAC:** Multi-tenant contextual permissions (`OWNER`, `ADMIN`, `MEMBER`), short-lived JWT + Refresh Tokens in `HttpOnly` cookies, recursive input sanitization, Helmet, rate limiting, and strict Zod validation against IDOR & mass-assignment.
3. **Real-Time & Quality:** Server-Sent Events (SSE at `/api/events`) + `BroadcastChannel`, OpenAPI 3.0 / Swagger UI documentation at `/api/docs`, GitHub Actions CI/CD, and automated test pyramid (Vitest, Jest, Supertest over isolated PostgreSQL, and Playwright E2E).
4. **Applied AI Roadmap:** Semantic search integration using PostgreSQL 17 with `pgvector` and deterministic LLM task workflows powered by Vercel AI SDK.

---

## 🛠️ Tech Stack Matrix

| Domain                        | Technologies & Methodologies                                                                               |
| :---------------------------- | :--------------------------------------------------------------------------------------------------------- |
| **Backend & Architecture**    | Node.js, TypeScript, Express 5, RESTful APIs, GraphQL, Prisma ORM, Modular Monolith, RBAC, OpenAPI/Swagger |
| **Frontend Engineering**      | React 19, Next.js 15, TanStack Query, Tailwind CSS v4, Zod, React Hook Form                                |
| **Databases & Data Modeling** | PostgreSQL 17 (Indexing & Query Optimization), MongoDB, `pgvector` (AI Roadmap)                            |
| **Testing & Quality**         | Vitest, Jest, Supertest, Playwright (E2E), Cypress, React Testing Library                                  |
| **DevOps & Cloud**            | Docker, Docker Compose, GitHub Actions (CI/CD), Linux, AWS Fundamentals (in progress)                      |
| **Applied AI Focus**          | LLMs, Prompt Engineering, RAG Pipelines, Vercel AI SDK, LangChain                                          |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ (recommended: Node.js 22 LTS)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/nicolasdev97/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3002](http://localhost:3002) in your browser.

### Quality Control & Production Build

```bash
# Typecheck & Lint
npm run lint

# Production Build
npm run build
```

---

## 📬 Contact & Channels

- **Email:** [nicolas.po.im@gmail.com](mailto:nicolas.po.im@gmail.com)
- **LinkedIn:** [linkedin.com/in/nicolas-po](https://www.linkedin.com/in/nicolas-po)
- **GitHub:** [github.com/nicolasdev97](https://github.com/nicolasdev97)
- **Location:** Cali, Colombia — Open to Remote Worldwide

---

© 2026 Nicolás Palacio. All rights reserved.
