export interface DemoCredentials {
  role: string;
  email: string;
  password: string;
}

export interface ProjectPillars {
  architecture: string;
  security: string;
  realTimeAndQuality: string;
  aiRoadmap: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  demoCredentials?: {
    admin: DemoCredentials;
    dev: DemoCredentials;
  };
  pillars?: ProjectPillars;
  stats?: { label: string; value: string }[];
  image?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  date: string;
  location: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  items: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Nicolás Palacio",
    shortName: "Nicolás",
    role: "Full Stack Software Engineer",
    title: "Full Stack Software Engineer | Building Modular SaaS & Applied AI Systems",
    techSummary: "Node.js • TypeScript • Next.js • PostgreSQL",
    location: "Cali, Colombia (Open to Remote Worldwide)",
    availability: "AVAILABLE FOR HIRE // REMOTE WORLDWIDE",
    phone: "(+57) 300 867 1364",
    email: "nicolas.po.im@gmail.com",
    cvPath: "/cv-nicolas-palacio.pdf",
    cvFilename: "nicolas-palacio-cv.pdf",
    socials: {
      github: "https://github.com/nicolasdev97",
      linkedin: "https://www.linkedin.com/in/nicolas-po",
      email: "mailto:nicolas.po.im@gmail.com",
    },
    aboutNarrative: [
      "3+ years of commercial experience engineering scalable web applications, robust REST/GraphQL APIs, relational database optimization (PostgreSQL), and defensive testing suites.",
      "Actively transitioning into Applied AI Engineering: AI agents and LLMs are probabilistic by nature; operating them reliably in production demands deterministic backends, strict runtime schema validation (Zod), defensive security boundaries, and resilient retrieval pipelines (RAG with pgvector, Vercel AI SDK, LangChain).",
    ],
  },

  featuredProject: {
    id: "sprinthub",
    title: "SprintHub",
    tagline: "Enterprise-Grade Project & Sprint Management SaaS",
    description:
      "A high-assurance, enterprise-grade project and sprint management platform engineered with a strict modular monolith architecture, defensive multi-tenant security, real-time sync, and an applied AI roadmap.",
    liveUrl: "https://sprinthub-omega.vercel.app/",
    repoUrl: "https://github.com/nicolasdev97/sprinthub",
    featured: true,
    tags: [
      "Node.js 22",
      "TypeScript",
      "Express 5",
      "Prisma 6",
      "PostgreSQL 17",
      "Next.js 15",
      "React 19",
      "Docker",
      "OpenAPI 3.0",
      "SSE",
      "Zod",
      "pgvector",
    ],
    stats: [
      { label: "BACKEND ARCH", value: "Modular Monolith" },
      { label: "REAL-TIME SYNC", value: "SSE + Broadcast" },
      { label: "AUTH & RBAC", value: "JWT + HttpOnly" },
      { label: "AI PIPELINE", value: "RAG / pgvector" },
    ],
    demoCredentials: {
      admin: {
        role: "Owner / Admin",
        email: "admin@sprinthub.dev",
        password: "Password123!",
      },
      dev: {
        role: "Member / Dev",
        email: "dev@sprinthub.dev",
        password: "Password123!",
      },
    },
    pillars: {
      architecture:
        "Monorepo (npm workspaces) with strict Modular Monolith (Controller → Service → Repository) in Node.js 22, Express 5, TypeScript, Prisma 6, PostgreSQL 17, Next.js 15, React 19, and Docker.",
      security:
        "Contextual RBAC (OWNER, ADMIN, MEMBER), short-lived JWT + Refresh Tokens in HttpOnly cookies, recursive input sanitization, Helmet, rate limiting, and strict Zod validation against IDOR and mass-assignment.",
      realTimeAndQuality:
        "Live sync via Server-Sent Events (SSE at /api/events) + BroadcastChannel, interactive OpenAPI 3.0 / Swagger UI (/api/docs), GitHub Actions CI/CD, and automated test suite (Vitest, Jest, Supertest over isolated PostgreSQL, and Playwright E2E).",
      aiRoadmap:
        "Semantic search integration (RAG with pgvector) and intelligent task workflows powered by Vercel AI SDK.",
    },
  } as ProjectItem,

  projects: [
    // Escalable: preparado para añadir futuros proyectos de SaaS y Applied AI
  ] as ProjectItem[],

  experience: [
    {
      role: "Full Stack Developer",
      company: "Freelancer",
      location: "Remote",
      period: "March 2025 – December 2025",
      achievements: [
        "Architected and delivered end-to-end Full Stack applications using React, TypeScript, Node.js, Express, and MongoDB.",
        "Designed RESTful APIs and modular backend architectures, cutting overall maintenance time by 30%.",
        "Implemented JWT authentication and defensive automated test suites (Jest, Playwright), reducing functional regressions by 35%.",
        "Configured robust CI/CD pipelines with GitHub Actions and Docker deployments, shortening release cycles by 20%.",
      ],
      skills: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Jest", "Playwright", "Docker", "GitHub Actions"],
    },
    {
      role: "Full Stack Developer",
      company: "Corporación Talentum",
      location: "Remote",
      period: "July 2022 – December 2024",
      achievements: [
        "Engineered SPAs and web platforms using React, TypeScript, and Next.js, boosting initial load performance by 25%.",
        "Built RESTful APIs and backend services with Node.js, Express, and GraphQL, reducing response latencies by 30% through structured middleware and database query optimization.",
        "Modeled and fine-tuned PostgreSQL relational databases with high-efficiency indexing and query plans.",
        "Implemented rigorous automated testing suites (React Testing Library, Cypress, Playwright), achieving >70% code coverage and preventing production incidents.",
        "Optimized containerized deployments with Docker, slashing production bugs and downtime by 40%.",
      ],
      skills: ["React", "TypeScript", "Next.js", "Node.js", "Express", "GraphQL", "PostgreSQL", "Cypress", "Docker"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "Multimedia Engineering",
      institution: "Universidad Autónoma de Occidente",
      date: "October 2023",
      location: "Cali, Colombia",
    },
    {
      degree: "Full Stack Open",
      institution: "University of Helsinki",
      date: "June 2026",
      location: "Remote, Finland",
    },
  ] as EducationItem[],

  languages: [
    {
      name: "English",
      level: "Professional Working Proficiency (B2)",
    },
    {
      name: "Spanish",
      level: "Native",
    },
  ] as LanguageItem[],

  skillsMatrix: [
    {
      category: "Backend & Architecture",
      description: "Deterministic servers, modular monoliths & secure API design",
      items: [
        "Node.js",
        "TypeScript",
        "Express",
        "REST APIs",
        "GraphQL",
        "Prisma ORM",
        "Modular Monolith",
        "RBAC",
        "OpenAPI / Swagger",
      ],
    },
    {
      category: "Frontend Engineering",
      description: "Modern component architecture & responsive, accessible UIs",
      items: [
        "React 19",
        "Next.js 15",
        "TypeScript",
        "TanStack Query",
        "Tailwind CSS",
        "Zod",
        "React Hook Form",
      ],
    },
    {
      category: "Databases & Data Modeling",
      description: "Relational integrity, query planning & vector indexing",
      items: [
        "PostgreSQL",
        "Indexing & Optimization",
        "MongoDB",
        "pgvector (AI Roadmap)",
      ],
    },
    {
      category: "Testing & Quality Assurance",
      description: "Defensive testing pyramids from unit to end-to-end",
      items: [
        "Vitest",
        "Jest",
        "Supertest",
        "Playwright (E2E)",
        "Cypress",
        "React Testing Library",
      ],
    },
    {
      category: "DevOps & Cloud Infrastructure",
      description: "Containerization, automated pipelines & reproducible environments",
      items: [
        "Docker",
        "Docker Compose",
        "GitHub Actions (CI/CD)",
        "Linux",
        "AWS Fundamentals (In progress)",
      ],
    },
    {
      category: "Applied AI & LLM Systems",
      description: "Deterministic backends for probabilistic AI agents",
      items: [
        "LLMs & Prompt Engineering",
        "RAG Pipelines",
        "Vercel AI SDK",
        "LangChain",
        "Deterministic Backend Guards",
      ],
    },
  ] as SkillCategory[],
};
