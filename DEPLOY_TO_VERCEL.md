# Deploying Kute Hospital Website to Vercel

## What You Need
- A free [Vercel account](https://vercel.com/signup)
- A free [GitHub account](https://github.com/signup)
- This project pushed to a GitHub repository

---

## Step 1 — Push This Project to GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** button in the top right → **"New repository"**
3. Name it something like `kute-hospital-website`
4. Set it to **Private** (recommended) or Public
5. Click **"Create repository"**
6. GitHub will show you commands — you'll use these in Replit's Shell

In Replit, open the **Shell** tab and run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/kute-hospital-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

> If it asks for a password, use a GitHub **Personal Access Token** instead.
> Create one at: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token (check "repo" scope).

---

## Step 2 — Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use "Continue with GitHub")
2. Click **"Add New Project"**
3. Find your `kute-hospital-website` repository and click **"Import"**

---

## Step 3 — Configure the Project

Vercel will show a configuration screen. Set it up exactly like this:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Other |
| **Root Directory** | `.` (leave as the default — the repo root) |
| **Build Command** | `pnpm --filter @workspace/kute-hospital run build` |
| **Output Directory** | `artifacts/kute-hospital/dist/public` |
| **Install Command** | `pnpm install` |

> These settings are also saved in `vercel.json` at the repo root, so Vercel may auto-detect them. If it does, you can skip this step.

---

## Step 4 — Add Environment Variables

In the same configuration screen, scroll to **"Environment Variables"** and add:

| Name | Value |
|------|-------|
| `BASE_PATH` | `/` |

Click **"Add"** after entering each one.

---

## Step 5 — Deploy

Click **"Deploy"**.

Vercel will:
1. Install dependencies with pnpm
2. Build the React app
3. Publish it to a `*.vercel.app` URL

The first deployment takes about 2–4 minutes.

---

## Step 6 — Your Site is Live

Once done, Vercel gives you a URL like:
```
https://kute-hospital-website.vercel.app
```

Every time you push changes to GitHub, Vercel automatically re-deploys.

---

## Adding a Custom Domain (Optional)

To use your own domain (e.g., `kutehospital.com`):

1. In Vercel dashboard → your project → **"Domains"** tab
2. Click **"Add"** and enter your domain name
3. Vercel will show you DNS records to add
4. Go to your domain registrar (GoDaddy, Namecheap, etc.) and add those records
5. Wait 5–30 minutes for DNS to propagate

---

## Troubleshooting

**Build fails with "pnpm not found"**
→ In Vercel project settings → General → scroll to "Node.js Version" → set to **20.x**. Vercel auto-detects pnpm from the lockfile.

**Pages show 404 on refresh**
→ Make sure `vercel.json` is at the repo root (it is — don't delete it). It handles routing for the single-page app.

**Images not loading**
→ All images use direct URLs from kutehospital.com. If those URLs ever change, update them in the source files.

**"BASE_PATH not found" error**
→ Check that the `BASE_PATH` environment variable is set to `/` in Vercel project settings → Environment Variables.

---

## File Reference

| File | Purpose |
|------|---------|
| `vercel.json` | Tells Vercel how to build and route the app |
| `artifacts/kute-hospital/vite.config.ts` | Vite build config (already updated for Vercel) |
| `artifacts/kute-hospital/dist/public/` | Build output (generated, not committed) |
