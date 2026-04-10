# LeadFlow Landing

Product landing page for a lead qualification automation service, built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and PostgreSQL. **[Click here to live demo.](https://leadflow-landing-gj2k24yq1-eusuellenyasmin.vercel.app)**


![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwindcss)
![Prisma](https://img.shields.io/badge/Prisma-7.0-2D3748?style=flat-square&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-316192?style=flat-square&logo=postgresql)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://leadflow-landing-gj2k24yq1-eusuellenyasmin.vercel.app)

## Features

- Responsive one-page layout with smooth scroll navigation
- Animated sections using Framer Motion
- Contact form connected to a real PostgreSQL database via API Route
- Sections: Hero, How It Works, Benefits, Plans, Testimonials, and Contact

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **ORM:** Prisma 7 with PrismaPg adapter
- **Database:** Vercel Postgres (PostgreSQL)
- **Deploy:** Vercel

## Architecture Decisions

### API Route for contact form
The contact form submits data via a `POST /api/contact` Next.js API Route, keeping all database logic server-side and out of the client bundle.

### Prisma 7 with PrismaPg adapter
Prisma 7 introduced a new connection model that separates database configuration from the schema file. The `DATABASE_URL` is passed directly to the `PrismaPg` adapter at runtime, and datasource configuration lives in `prisma.config.ts` instead of `schema.prisma`.

### Vercel Postgres
Contact form submissions are persisted in a Vercel Postgres database, making it easy to review leads directly from the Prisma Studio dashboard.

## Project Structure

```
app/
├── api/
│   └── contact/
│       └── route.ts          # POST /api/contact
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Benefits.tsx
│   ├── Plans.tsx
│   ├── Testimonials.tsx
│   └── Contact.tsx
├── globals.css
├── layout.tsx
└── page.tsx
prisma/
├── migrations/
├── schema.prisma             # Contact model
└── prisma.config.ts          # Datasource and migration config
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- PostgreSQL database (or Vercel Postgres)

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/yasminsuellen/leadflow-landing.git
cd leadflow-landing
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file:

```env
DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"
```

4. **Run migrations**

```bash
npx prisma migrate deploy
```

5. **Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Key Learnings

- Building and deploying a fullstack Next.js app from scratch
- Prisma 7 new configuration model with `prisma.config.ts` and driver adapters
- Connecting a PostgreSQL database to a serverless environment on Vercel
- Framer Motion for section animations and scroll-based reveals
- Professional Git workflow with conventional commits

## Technical Challenges

- **Prisma 7 breaking changes:** The new version removed `url` from `schema.prisma` and `datasources` from the `PrismaClient` constructor, requiring a full migration to the adapter-based connection model
- **Serverless database connection:** Configuring `PrismaPg` to correctly receive the `DATABASE_URL` at runtime in Vercel's serverless functions
- **Environment variables:** Ensuring the correct `postgresql://` URL format was consistently applied across local and production environments

---

**Yasmin Suellen**  
[GitHub](https://github.com/yasminsuellen) · [LinkedIn](https://www.linkedin.com/in/yasminsuellen/)
