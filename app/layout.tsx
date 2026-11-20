import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.VERCEL_ENV === "preview"
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://nicolaspalacio.dev";

const title = `${PORTFOLIO_DATA.profile.name} | Full Stack Software Engineer | Modular SaaS & Applied AI`;
const description =
  "Full Stack Software Engineer specializing in scalable modular SaaS architectures (Node.js, TypeScript, Next.js, PostgreSQL) and applied AI systems (RAG, pgvector, Vercel AI SDK). Based in Cali, Colombia — Open to Remote Worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${PORTFOLIO_DATA.profile.name}`,
  },
  description,
  keywords: [
    "Full Stack Software Engineer",
    "Applied AI Engineer",
    "Nicolás Palacio",
    "SprintHub",
    "Node.js",
    "TypeScript",
    "Next.js",
    "React",
    "PostgreSQL",
    "pgvector",
    "RAG",
    "Vercel AI SDK",
    "Prisma ORM",
    "Modular Monolith",
    "Cali Colombia",
    "Remote Developer",
  ],
  authors: [
    {
      name: PORTFOLIO_DATA.profile.name,
      url: PORTFOLIO_DATA.profile.socials.github,
    },
  ],
  creator: PORTFOLIO_DATA.profile.name,
  openGraph: {
    title,
    description,
    url: "./",
    siteName: `${PORTFOLIO_DATA.profile.name} — Portfolio`,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${PORTFOLIO_DATA.profile.name} — Full Stack Software Engineer & Applied AI`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
    creator: "@nicolasdev97",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth shadcn">
      <body
        className={`font-body antialiased ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
