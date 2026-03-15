# JONTRO — Backend Product Requirements Document

**Stack: Node.js · Express.js · PostgreSQL · Prisma ORM**
**Version: 1.0 | Status: Draft | 100% Free Stack**

---

## Table of Contents

1. [Free Stack Overview](#1-free-stack-overview)
2. [Project Structure](#2-project-structure)
3. [Environment Variables](#3-environment-variables)
4. [Database Schema](#4-database-schema)
5. [API Routes](#5-api-routes)
6. [Middleware](#6-middleware)
7. [Validation Schemas (Zod)](#7-validation-schemas-zod)
8. [Email Notifications](#8-email-notifications)
9. [File Uploads](#9-file-uploads)
10. [Admin Dashboard API](#10-admin-dashboard-api)
11. [Security](#11-security)
12. [Database Setup & Prisma](#12-database-setup--prisma)
13. [Deployment — 100% Free](#13-deployment--100-free)
14. [Recommended Build Order](#14-recommended-build-order)
15. [Full Package List](#15-full-package-list)

---

## 1. Free Stack Overview

Every paid service replaced with a free alternative. Zero cost to launch.

| Layer | Paid Option | FREE Alternative | Free Tier |
|---|---|---|---|
| **Backend hosting** | Heroku | [Render.com](https://render.com) | 1 free web service |
| **Database** | PlanetScale / Supabase Pro | [Supabase](https://supabase.com) (PostgreSQL) | 500MB, unlimited API calls |
| **Database (alt)** | AWS RDS | [Neon.tech](https://neon.tech) | 0.5GB, serverless Postgres |
| **Email sending** | Resend Pro / SendGrid | [Resend.com](https://resend.com) | 3,000 emails/month free |
| **Email (alt)** | — | [Brevo (Sendinblue)](https://brevo.com) | 300 emails/day free |
| **File storage** | AWS S3 | [Cloudflare R2](https://cloudflare.com/r2) | 10GB free forever |
| **File storage (alt)** | — | [Supabase Storage](https://supabase.com) | 1GB free |
| **Image CDN** | Cloudinary Pro | [Cloudinary](https://cloudinary.com) | 25GB free |
| **Cron jobs** | Heroku Scheduler | [cron-job.org](https://cron-job.org) | Free unlimited |
| **Monitoring** | Datadog | [UptimeRobot](https://uptimerobot.com) | 50 monitors free |
| **Secrets/Env** | Vault | Render built-in env vars | Free |

### Recommended Free Combo (Best for JONTRO)

```
Backend   → Render.com (free web service)
Database  → Supabase (free PostgreSQL)
Email     → Resend (3000/month free)
Storage   → Supabase Storage (1GB free) OR Cloudinary
Monitoring→ UptimeRobot (free)
```

> **Important:** Render's free tier spins down after 15 minutes of inactivity (cold start ~30s).
> To avoid this, use UptimeRobot to ping `/api/health` every 5 minutes — keeps it awake for free.

---

## 2. Project Structure

```
jontro-backend/
├── src/
│   ├── app.js                    # Express app setup, middleware registration
│   ├── server.js                 # Entry point — starts the server
│   ├── routes/
│   │   ├── auth.js               # Admin login / logout
│   │   ├── leads.js              # Contact form submissions
│   │   ├── blog.js               # Blog CRUD
│   │   ├── portfolio.js          # Case studies & work
│   │   ├── careers.js            # Job listings & applications
│   │   ├── services.js           # Services content
│   │   ├── testimonials.js       # Testimonials
│   │   ├── team.js               # Team members
│   │   ├── stats.js              # Homepage stats bar
│   │   └── admin.js              # Admin dashboard aggregates
│   ├── middleware/
│   │   ├── auth.js               # JWT verification middleware
│   │   ├── validate.js           # Zod schema middleware
│   │   └── rateLimiter.js        # Per-route rate limiters
│   ├── services/
│   │   ├── emailService.js       # Resend email sending
│   │   ├── fileService.js        # Supabase/Cloudinary upload & delete
│   │   └── slugService.js        # Auto slug generation
│   └── config/
│       └── env.js                # Validated env vars with defaults
├── prisma/
│   ├── schema.prisma
│   └── seed.js                   # Initial admin user + default data
├── .env
├── .env.example
├── .gitignore
└── package.json
```

---

## 3. Environment Variables

Create `.env` at the project root. **Never commit this file to Git.**

```env
# ── Server ────────────────────────────────────────────
PORT=4000
NODE_ENV=development

# ── Database (Supabase or Neon — copy from dashboard) ─
DATABASE_URL=postgresql://postgres:[password]@db.[ref].supabase.co:5432/postgres

# ── JWT ───────────────────────────────────────────────
JWT_SECRET=generate_a_long_random_string_here_minimum_32_chars
JWT_EXPIRES_IN=7d

# ── Email (Resend — free tier) ────────────────────────
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
EMAIL_FROM=hello@jontro.com
ADMIN_EMAIL=youremail@gmail.com

# ── File Storage (Supabase Storage — free 1GB) ────────
SUPABASE_URL=https://[ref].supabase.co
SUPABASE_SERVICE_KEY=your_service_role_key
SUPABASE_BUCKET=jontro-uploads

# ── OR Cloudinary (free 25GB) — use one or the other ──
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# ── Frontend ──────────────────────────────────────────
FRONTEND_URL=https://jontro.com
```

---

## 4. Database Schema

Full Prisma schema for every page of the JONTRO frontend.

### 4.1 Complete `schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ── Enums ──────────────────────────────────────────────────────────

enum LeadStatus {
  NEW
  CONTACTED
  QUALIFIED
  PROPOSAL
  CLOSED_WON
  CLOSED_LOST
}

enum AdminRole {
  SUPER_ADMIN
  EDITOR
}

enum ApplicationStatus {
  RECEIVED
  REVIEWING
  INTERVIEW
  OFFER
  REJECTED
}

// ── Models ─────────────────────────────────────────────────────────

model Lead {
  id          String     @id @default(uuid())
  name        String
  email       String
  company     String?
  country     String?
  service     String?
  budget      String?
  description String
  referral    String?
  status      LeadStatus @default(NEW)
  notes       String?
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
}

model AdminUser {
  id        String    @id @default(uuid())
  email     String    @unique
  password  String    // bcrypt hashed — never store plain text
  name      String?
  role      AdminRole @default(EDITOR)
  createdAt DateTime  @default(now())
}

model BlogPost {
  id             String     @id @default(uuid())
  title          String
  slug           String     @unique
  excerpt        String
  content        String     @db.Text
  heroImage      String?
  category       String
  tags           String[]
  author         TeamMember @relation(fields: [authorId], references: [id])
  authorId       String
  readTime       Int        // minutes
  published      Boolean    @default(false)
  seoTitle       String?
  seoDescription String?
  publishedAt    DateTime?
  createdAt      DateTime   @default(now())
  updatedAt      DateTime   @updatedAt
}

model Project {
  id          String       @id @default(uuid())
  title       String
  slug        String       @unique
  client      String
  thumbnail   String
  category    String[]
  challenge   String       @db.Text
  approach    String       @db.Text
  features    String[]
  techStack   String[]
  results     String?      @db.Text
  testimonial Testimonial? @relation(fields: [testimonialId], references: [id])
  testimonialId String?
  featured    Boolean      @default(false)
  order       Int          @default(0)
  published   Boolean      @default(false)
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
}

model Service {
  id             String   @id @default(uuid())
  title          String
  slug           String   @unique
  icon           String?
  description    String   @db.Text
  features       String[]
  industries     String[]
  deliverables   String[]
  process        Json?    // Array of { step, title, description }
  useCases       String[]
  techStack      String[]
  pricingTiers   Json?    // Array of { name, price, features[] }
  faq            Json?    // Array of { question, answer }
  seoTitle       String?
  seoDescription String?
  order          Int      @default(0)
  published      Boolean  @default(true)
}

model Testimonial {
  id        String    @id @default(uuid())
  name      String
  role      String
  avatar    String?
  quote     String    @db.Text
  rating    Int?
  projects  Project[]
  published Boolean   @default(true)
  order     Int       @default(0)
}

model TeamMember {
  id        String     @id @default(uuid())
  name      String
  role      String
  bio       String     @db.Text
  avatar    String?
  linkedIn  String?
  twitter   String?
  blogPosts BlogPost[]
  order     Int        @default(0)
  published Boolean    @default(true)
}

model JobListing {
  id               String            @id @default(uuid())
  title            String
  department       String
  type             String            // Full-time, Part-time, Contract
  location         String
  description      String            @db.Text
  responsibilities String[]
  requirements     String[]
  niceToHave       String[]
  salaryMin        Int?
  salaryMax        Int?
  published        Boolean           @default(false)
  closingDate      DateTime?
  applications     JobApplication[]
  createdAt        DateTime          @default(now())
  updatedAt        DateTime          @updatedAt
}

model JobApplication {
  id           String            @id @default(uuid())
  job          JobListing?       @relation(fields: [jobId], references: [id])
  jobId        String?           // null = open application
  name         String
  email        String
  phone        String?
  coverLetter  String?           @db.Text
  resumeUrl    String            // Supabase Storage or Cloudinary URL
  portfolioUrl String?
  linkedIn     String?
  status       ApplicationStatus @default(RECEIVED)
  notes        String?
  createdAt    DateTime          @default(now())
  updatedAt    DateTime          @updatedAt
}

model Stat {
  id    String @id @default(uuid())
  label String // "Projects Delivered"
  value String // "50+"
  order Int    @default(0)
}
```

---

### 4.2 Schema Summary Table

| Model | Purpose | Page |
|---|---|---|
| `Lead` | Contact form submissions | `/contact` |
| `AdminUser` | Admin dashboard login | `/admin` |
| `BlogPost` | Blog articles | `/blog`, `/blog/*` |
| `Project` | Portfolio case studies | `/work`, `/work/*` |
| `Service` | Services with full detail | `/services`, `/services/*` |
| `Testimonial` | Client quotes | Home, `/work/*` |
| `TeamMember` | Team + blog authors | `/about` |
| `JobListing` | Open positions | `/careers` |
| `JobApplication` | Submitted applications | `/careers` |
| `Stat` | Homepage stats bar | Home (`/`) |

---

## 5. API Routes

All routes prefixed with `/api`. Protected routes require `Authorization: Bearer <token>` header.

### 5.1 Authentication

| Method | Route | Description | Auth |
|---|---|---|---|
| `POST` | `/api/auth/login` | Admin login — returns JWT | Public |
| `POST` | `/api/auth/logout` | Clear token (client-side) | Admin |
| `GET` | `/api/auth/me` | Get current admin info | Admin |
| `PUT` | `/api/auth/me/password` | Change admin password | Admin |

**POST `/api/auth/login` — Request:**
```json
{ "email": "admin@jontro.com", "password": "your_password" }
```

**POST `/api/auth/login` — Response:**
```json
{ "token": "eyJhbGci...", "user": { "id": "...", "email": "...", "name": "..." } }
```

---

### 5.2 Leads (Contact Form)

| Method | Route | Description | Auth |
|---|---|---|---|
| `POST` | `/api/leads` | Submit contact form | Public |
| `GET` | `/api/admin/leads` | List all leads (filterable) | Admin |
| `GET` | `/api/admin/leads/:id` | Get single lead | Admin |
| `PATCH` | `/api/admin/leads/:id` | Update status or notes | Admin |
| `DELETE` | `/api/admin/leads/:id` | Delete lead | Admin |

**POST `/api/leads` — Request Body:**
```json
{
  "name": "John Smith",
  "email": "john@company.com",
  "company": "Acme Corp",
  "country": "Singapore",
  "service": "AI Agent Development",
  "budget": "$15K-$50K",
  "description": "We need an AI agent to...",
  "referral": "Google"
}
```

**GET `/api/admin/leads` — Query Params:**

| Param | Type | Description |
|---|---|---|
| `status` | string | Filter by LeadStatus enum |
| `search` | string | Search name, email, company |
| `page` | number | Page number (default: 1) |
| `limit` | number | Per page (default: 20) |
| `sortBy` | string | `createdAt`, `status`, `name` |
| `order` | string | `asc` or `desc` |

---

### 5.3 Blog

| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/blog` | List published posts (paginated) | Public |
| `GET` | `/api/blog/:slug` | Get single post by slug | Public |
| `GET` | `/api/blog/categories` | List all categories | Public |
| `GET` | `/api/admin/blog` | List all posts including drafts | Admin |
| `POST` | `/api/admin/blog` | Create new blog post | Admin |
| `PUT` | `/api/admin/blog/:id` | Update post | Admin |
| `PATCH` | `/api/admin/blog/:id/publish` | Toggle published | Admin |
| `DELETE` | `/api/admin/blog/:id` | Delete post | Admin |

**GET `/api/blog` — Query Params:** `category`, `search`, `page`, `limit`, `featured`

---

### 5.4 Portfolio & Case Studies

| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/work` | List published projects | Public |
| `GET` | `/api/work/featured` | Featured projects (home page) | Public |
| `GET` | `/api/work/:slug` | Get case study by slug | Public |
| `GET` | `/api/admin/work` | List all projects | Admin |
| `POST` | `/api/admin/work` | Create project | Admin |
| `PUT` | `/api/admin/work/:id` | Update project | Admin |
| `PATCH` | `/api/admin/work/:id/publish` | Toggle published | Admin |
| `DELETE` | `/api/admin/work/:id` | Delete project | Admin |

**GET `/api/work` — Query Params:** `category` (Web, Mobile, AI, SaaS, Automation), `page`, `limit`

---

### 5.5 Services

| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/services` | List all published services | Public |
| `GET` | `/api/services/:slug` | Get service detail by slug | Public |
| `GET` | `/api/admin/services` | List all services | Admin |
| `POST` | `/api/admin/services` | Create service | Admin |
| `PUT` | `/api/admin/services/:id` | Update service | Admin |
| `DELETE` | `/api/admin/services/:id` | Delete service | Admin |

---

### 5.6 Testimonials

| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/testimonials` | List published testimonials | Public |
| `GET` | `/api/admin/testimonials` | List all testimonials | Admin |
| `POST` | `/api/admin/testimonials` | Create testimonial | Admin |
| `PUT` | `/api/admin/testimonials/:id` | Update testimonial | Admin |
| `DELETE` | `/api/admin/testimonials/:id` | Delete testimonial | Admin |

---

### 5.7 Team Members

| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/team` | List published team members | Public |
| `GET` | `/api/admin/team` | List all team members | Admin |
| `POST` | `/api/admin/team` | Add team member | Admin |
| `PUT` | `/api/admin/team/:id` | Update member | Admin |
| `DELETE` | `/api/admin/team/:id` | Remove member | Admin |

---

### 5.8 Careers & Job Applications

| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/careers` | List published job listings | Public |
| `GET` | `/api/careers/:id` | Get single job listing | Public |
| `POST` | `/api/careers/:id/apply` | Apply to a specific job | Public |
| `POST` | `/api/careers/apply` | Submit open application | Public |
| `GET` | `/api/admin/careers` | List all job listings | Admin |
| `POST` | `/api/admin/careers` | Create job listing | Admin |
| `PUT` | `/api/admin/careers/:id` | Update listing | Admin |
| `PATCH` | `/api/admin/careers/:id/publish` | Toggle published | Admin |
| `DELETE` | `/api/admin/careers/:id` | Delete listing | Admin |
| `GET` | `/api/admin/applications` | List all applications | Admin |
| `GET` | `/api/admin/applications/:id` | Get application detail | Admin |
| `PATCH` | `/api/admin/applications/:id` | Update status / notes | Admin |
| `DELETE` | `/api/admin/applications/:id` | Delete application | Admin |

**POST `/api/careers/:id/apply` — Multipart Form Data:**

| Field | Type | Required |
|---|---|---|
| `name` | string | Yes |
| `email` | string | Yes |
| `phone` | string | No |
| `coverLetter` | string | No |
| `resume` | file (PDF/DOCX, max 5MB) | Yes |
| `portfolioUrl` | string | No |
| `linkedIn` | string | No |

---

### 5.9 Stats

| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/stats` | Get all stats for home page | Public |
| `GET` | `/api/admin/stats` | List all stats | Admin |
| `POST` | `/api/admin/stats` | Create stat | Admin |
| `PUT` | `/api/admin/stats/:id` | Update stat | Admin |
| `DELETE` | `/api/admin/stats/:id` | Delete stat | Admin |

---

### 5.10 File Uploads

| Method | Route | Description | Auth |
|---|---|---|---|
| `POST` | `/api/admin/upload/image` | Upload image, returns URL | Admin |
| `DELETE` | `/api/admin/upload/image` | Delete image by URL | Admin |

---

### 5.11 Health Check

| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/health` | Server health check (keeps Render awake) | Public |

```js
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
```

---

## 6. Middleware

### 6.1 Auth Middleware (`middleware/auth.js`)

Applied to all `/api/admin/*` routes. Verifies Bearer JWT, attaches decoded admin to `req.admin`.

```js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    req.admin = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};
```

---

### 6.2 Validation Middleware (`middleware/validate.js`)

Runs Zod schema against `req.body`. Returns 422 with error details on failure.

```js
const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(422).json({ errors: result.error.flatten().fieldErrors });
  }
  req.body = result.data;
  next();
};

module.exports = validate;
```

---

### 6.3 Rate Limiters (`middleware/rateLimiter.js`)

| Limiter | Window | Max Requests | Applied To |
|---|---|---|---|
| `globalLimiter` | 15 min | 200 | All routes |
| `authLimiter` | 15 min | 10 | `POST /auth/login` |
| `leadLimiter` | 60 min | 5 | `POST /leads` |
| `applyLimiter` | 60 min | 3 | `POST /apply` |
| `uploadLimiter` | 60 min | 20 | `POST /upload` |

```js
const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many login attempts, try again later' }
});

const leadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { error: 'Too many submissions, try again later' }
});

module.exports = { authLimiter, leadLimiter };
```

---

## 7. Validation Schemas (Zod)

### 7.1 Lead / Contact Form

```js
const { z } = require('zod');

const leadSchema = z.object({
  name:        z.string().min(2).max(100),
  email:       z.string().email(),
  company:     z.string().max(100).optional(),
  country:     z.string().max(60).optional(),
  service:     z.string().max(100).optional(),
  budget:      z.enum(['<$5K', '$5K-$15K', '$15K-$50K', '$50K+']).optional(),
  description: z.string().min(20).max(2000),
  referral:    z.string().max(100).optional(),
});
```

### 7.2 Auth

```js
const loginSchema = z.object({
  email:    z.string().email(),
  password: z.string().min(8).max(72),
});
```

### 7.3 Job Application

```js
const applicationSchema = z.object({
  name:         z.string().min(2).max(100),
  email:        z.string().email(),
  phone:        z.string().optional(),
  coverLetter:  z.string().max(3000).optional(),
  portfolioUrl: z.string().url().optional().or(z.literal('')),
  linkedIn:     z.string().url().optional().or(z.literal('')),
});
```

### 7.4 Blog Post

```js
const blogSchema = z.object({
  title:          z.string().min(5).max(200),
  slug:           z.string().min(3).max(200).optional(), // auto-generated if omitted
  excerpt:        z.string().min(20).max(500),
  content:        z.string().min(100),
  heroImage:      z.string().url().optional(),
  category:       z.string().max(60),
  tags:           z.array(z.string()).optional(),
  authorId:       z.string().uuid(),
  readTime:       z.number().int().min(1),
  seoTitle:       z.string().max(60).optional(),
  seoDescription: z.string().max(160).optional(),
});
```

---

## 8. Email Notifications

### 8.1 Free Email Setup — Resend

Sign up at [resend.com](https://resend.com) — **3,000 emails/month free**, no credit card needed.

```bash
npm install resend
```

```js
// services/emailService.js
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendLeadNotification(lead) {
  await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: `New Lead: ${lead.name} — ${lead.company || 'No company'}`,
    html: `
      <h2>New Lead Received</h2>
      <p><strong>Name:</strong> ${lead.name}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Company:</strong> ${lead.company || '—'}</p>
      <p><strong>Service:</strong> ${lead.service || '—'}</p>
      <p><strong>Budget:</strong> ${lead.budget || '—'}</p>
      <p><strong>Message:</strong> ${lead.description}</p>
    `
  });
}

async function sendLeadConfirmation(lead) {
  await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: lead.email,
    subject: `Thanks for reaching out, ${lead.name.split(' ')[0]}!`,
    html: `
      <h2>We got your message!</h2>
      <p>Hi ${lead.name.split(' ')[0]}, thanks for contacting JONTRO.</p>
      <p>We'll review your project and get back to you within 24 hours.</p>
    `
  });
}

module.exports = { sendLeadNotification, sendLeadConfirmation };
```

### 8.2 Email Trigger Map

| Event | Recipient | Function |
|---|---|---|
| New lead submitted | Admin team | `sendLeadNotification` |
| New lead submitted | Lead (auto-reply) | `sendLeadConfirmation` |
| Job application received | Admin team | `sendApplicationNotification` |
| Job application received | Applicant | `sendApplicationConfirmation` |

---

## 9. File Uploads

### 9.1 Free Option A — Supabase Storage (Recommended)

Supabase gives **1GB free storage** with your free Postgres. Perfect for resumes and images.

```bash
npm install @supabase/supabase-js multer
```

```js
// services/fileService.js
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

async function uploadResume(fileBuffer, fileName, mimeType) {
  const path = `resumes/${Date.now()}-${fileName}`;
  const { error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET)
    .upload(path, fileBuffer, { contentType: mimeType });
  if (error) throw error;
  const { data } = supabase.storage
    .from(process.env.SUPABASE_BUCKET)
    .getPublicUrl(path);
  return data.publicUrl;
}

async function uploadImage(fileBuffer, fileName, mimeType) {
  const path = `images/${Date.now()}-${fileName}`;
  const { error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET)
    .upload(path, fileBuffer, { contentType: mimeType });
  if (error) throw error;
  const { data } = supabase.storage
    .from(process.env.SUPABASE_BUCKET)
    .getPublicUrl(path);
  return data.publicUrl;
}

module.exports = { uploadResume, uploadImage };
```

### 9.2 Free Option B — Cloudinary (25GB free)

Better for images (auto compression + CDN). Great for blog hero images and project thumbnails.

```bash
npm install cloudinary multer
```

```js
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadImage(fileBuffer) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: 'jontro', resource_type: 'image' },
      (err, result) => err ? reject(err) : resolve(result.secure_url)
    ).end(fileBuffer);
  });
}
```

### 9.3 Multer Config (shared)

```js
const multer = require('multer');

const resumeUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowed = ['application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    cb(null, allowed.includes(file.mimetype));
  }
});

const imageUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 3 * 1024 * 1024 }, // 3MB
  fileFilter: (req, file, cb) => {
    cb(null, file.mimetype.startsWith('image/'));
  }
});

module.exports = { resumeUpload, imageUpload };
```

---

## 10. Admin Dashboard API

### 10.1 Summary Endpoint

```
GET /api/admin/dashboard  →  Admin only
```

**Response shape:**
```json
{
  "leads": { "total": 42, "new": 8, "contacted": 12, "qualified": 6 },
  "blog": { "total": 15, "published": 12, "drafts": 3 },
  "work": { "total": 8, "published": 6 },
  "careers": { "openRoles": 3, "applications": 24, "newApplications": 5 },
  "recentLeads": [ ...last 5 leads ],
  "recentApplications": [ ...last 5 applications ]
}
```

### 10.2 Admin Auth Flow

```
1. Visit /admin login page
2. POST /api/auth/login  →  receive JWT
3. Store JWT in localStorage (or httpOnly cookie)
4. All admin API calls: Authorization: Bearer <token>
5. authMiddleware verifies token on every /api/admin/* route
6. Logout: clear token from storage
```

---

## 11. Security

### 11.1 Security Measures

| Measure | Package | Purpose |
|---|---|---|
| Secure HTTP headers | `helmet` | CSP, HSTS, X-Frame-Options |
| CORS restriction | `cors` | Only allow your frontend domain |
| Rate limiting | `express-rate-limit` | Prevent abuse & spam |
| Input validation | `zod` | Reject malformed inputs before DB |
| Password hashing | `bcryptjs` (rounds: 12) | Never store plain passwords |
| JWT auth | `jsonwebtoken` | Stateless admin auth |
| SQL injection | Prisma (built-in) | Parameterised queries always |
| File type whitelist | multer `fileFilter` | Only PDF/DOCX for resumes |

### 11.2 App Setup (`app.js`)

```js
const express = require('express');
const helmet  = require('helmet');
const cors    = require('cors');
const { globalLimiter } = require('./middleware/rateLimiter');

const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json({ limit: '10kb' })); // reject huge payloads
app.use(globalLimiter);

// Routes
app.use('/api/auth',         require('./routes/auth'));
app.use('/api/leads',        require('./routes/leads'));
app.use('/api/blog',         require('./routes/blog'));
app.use('/api/work',         require('./routes/portfolio'));
app.use('/api/services',     require('./routes/services'));
app.use('/api/testimonials', require('./routes/testimonials'));
app.use('/api/team',         require('./routes/team'));
app.use('/api/careers',      require('./routes/careers'));
app.use('/api/stats',        require('./routes/stats'));
app.use('/api/admin',        require('./routes/admin'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production' ? 'Server error' : err.message
  });
});

module.exports = app;
```

---

## 12. Database Setup & Prisma

### 12.1 Free PostgreSQL Setup (Supabase)

1. Go to [supabase.com](https://supabase.com) → New project
2. Copy the **Connection string** from Settings → Database
3. Paste into `.env` as `DATABASE_URL`

### 12.2 Prisma Commands

```bash
# Install
npm install prisma @prisma/client
npx prisma init

# After writing schema.prisma:
npx prisma migrate dev --name init

# Generate client after any schema change:
npx prisma generate

# Seed initial data:
npx prisma db seed

# View DB in browser:
npx prisma studio
```

### 12.3 Seed Script (`prisma/seed.js`)

```js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  // Admin user
  await prisma.adminUser.upsert({
    where: { email: 'admin@jontro.com' },
    update: {},
    create: {
      email: 'admin@jontro.com',
      password: await bcrypt.hash('changeme123!', 12),
      name: 'JONTRO Admin',
      role: 'SUPER_ADMIN',
    }
  });

  // Homepage stats
  const stats = [
    { label: 'Projects Delivered', value: '50+', order: 1 },
    { label: 'Happy Clients',      value: '30+', order: 2 },
    { label: 'Team Members',       value: '10+', order: 3 },
    { label: 'Years Experience',   value: '5+',  order: 4 },
  ];
  for (const stat of stats) {
    await prisma.stat.create({ data: stat });
  }

  console.log('Seed complete. Change the admin password immediately!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
```

Add to `package.json`:
```json
"prisma": {
  "seed": "node prisma/seed.js"
}
```

---

## 13. Deployment — 100% Free

### 13.1 Recommended: Render + Supabase

**Step 1 — Push code to GitHub**
```bash
git init
git add .
git commit -m "Initial backend"
git remote add origin https://github.com/yourname/jontro-backend.git
git push -u origin main
```

**Step 2 — Create Render Web Service**

1. Go to [render.com](https://render.com) → New Web Service
2. Connect your GitHub repo
3. Set Build Command: `npm install && npx prisma generate`
4. Set Start Command: `node src/server.js`
5. Add all `.env` variables in the Environment tab
6. Deploy

**Step 3 — Keep Render awake (free tier fix)**

1. Go to [uptimerobot.com](https://uptimerobot.com) → Add New Monitor
2. Monitor type: HTTP(S)
3. URL: `https://your-app.onrender.com/api/health`
4. Interval: **every 5 minutes**

This prevents the free tier 15-minute sleep.

---

### 13.2 Alternative: Railway

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

Railway gives **$5 free credit/month** — enough for a small backend + PostgreSQL add-on.

---

### 13.3 `.gitignore`

```
node_modules/
.env
.env.local
dist/
*.log
```

---

### 13.4 Production Checklist

- [ ] `NODE_ENV=production` set in host env vars
- [ ] `JWT_SECRET` is at least 32 random characters
- [ ] Admin password changed from seed default
- [ ] `FRONTEND_URL` set to your actual domain (not `*`)
- [ ] UptimeRobot pinging `/api/health` every 5 min
- [ ] Supabase database has daily backups enabled (free in dashboard)
- [ ] `.env` is in `.gitignore` — never committed to Git
- [ ] `npx prisma migrate deploy` run after each deploy

---

## 14. Recommended Build Order

| Phase | Task | What You'll Have |
|---|---|---|
| 1 | Project setup | Express, Helmet, CORS, .env, health check |
| 2 | Database | Prisma schema, Supabase connection, migrations, seed |
| 3 | Auth | `POST /auth/login`, JWT, `authMiddleware` |
| 4 | Contact / Leads | `POST /leads` with Zod validation + Resend email |
| 5 | Admin lead CRUD | Full lead management with filters + pagination |
| 6 | Blog CMS | Post CRUD, slug generation, publish toggle |
| 7 | Portfolio | Project + case study CRUD |
| 8 | Services | Services with full detail fields |
| 9 | Careers | Job listings + application with file upload |
| 10 | Supporting data | Team, testimonials, stats |
| 11 | Admin dashboard | Summary endpoint, all data in one call |
| 12 | Deploy | Render + Supabase, UptimeRobot, .env in dashboard |

---

## 15. Full Package List

### 15.1 Install Production Dependencies

```bash
npm install express @prisma/client bcryptjs jsonwebtoken zod \
  cors helmet express-rate-limit dotenv multer \
  resend @supabase/supabase-js slugify uuid
```

### 15.2 Install Dev Dependencies

```bash
npm install -D prisma nodemon
```

### 15.3 `package.json` Scripts

```json
{
  "scripts": {
    "dev":   "nodemon src/server.js",
    "start": "node src/server.js",
    "db:migrate": "prisma migrate dev",
    "db:deploy":  "prisma migrate deploy",
    "db:seed":    "prisma db seed",
    "db:studio":  "prisma studio",
    "db:generate":"prisma generate"
  },
  "prisma": {
    "seed": "node prisma/seed.js"
  }
}
```

### 15.4 Complete Package Reference

| Package | Version | Purpose |
|---|---|---|
| `express` | ^5 | Web framework |
| `@prisma/client` | ^5 | Database ORM client |
| `prisma` | ^5 | ORM CLI (dev) |
| `bcryptjs` | ^2 | Password hashing |
| `jsonwebtoken` | ^9 | JWT auth |
| `zod` | ^3 | Input validation |
| `cors` | ^2 | Cross-origin requests |
| `helmet` | ^7 | Security headers |
| `express-rate-limit` | ^7 | Rate limiting |
| `dotenv` | ^16 | Environment variables |
| `multer` | ^1 | Multipart file parsing |
| `resend` | ^3 | Email sending (free tier) |
| `@supabase/supabase-js` | ^2 | Storage + DB client |
| `slugify` | ^1 | URL slug generation |
| `uuid` | ^9 | UUID generation |
| `nodemon` | ^3 | Dev auto-restart |

---

*JONTRO Backend PRD v1.0 — Free Stack Edition*
