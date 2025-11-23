# Vercel Deployment Guide

## Prerequisites

- GitHub account
- Vercel account (sign up at https://vercel.com)
- Git repository with your Next.js project

---

## Step 1: Prepare Your Project

### 1.1 Verify Build Succeeds Locally

```bash
npm run build
npm run start
```

Visit `http://localhost:3000` and test all pages.

### 1.2 Create Environment Variables File

Create `.env.example` in project root:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_DOMAIN=https://yourdomain.com

# reCAPTCHA (optional)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here

# Analytics (optional)
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

### 1.3 Update `.gitignore`

Ensure these lines are in `.gitignore`:

```
.env
.env.local
.env.production
.vercel
.next
node_modules
```

### 1.4 Commit and Push to GitHub

```bash
git add .
git commit -m "Ready for production deployment"
git push origin main
```

---

## Step 2: Connect GitHub to Vercel

### 2.1 Sign Up / Log In to Vercel

1. Go to https://vercel.com
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### 2.2 Import Your Project

1. Click "Add New..." → "Project"
2. Select your GitHub repository: `IndonesianImporter`
3. Click "Import"

---

## Step 3: Configure Build Settings

Vercel auto-detects Next.js projects. Verify these settings:

### 3.1 Framework Preset

- **Framework Preset**: Next.js
- **Root Directory**: `./` (leave as default)

### 3.2 Build & Development Settings

- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### 3.3 Node.js Version

- **Node.js Version**: 18.x or 20.x (recommended: 20.x)

---

## Step 4: Configure Environment Variables

### 4.1 Add Environment Variables in Vercel Dashboard

1. In your project settings, go to "Settings" → "Environment Variables"
2. Add each variable from your `.env.example`:

| Key | Value | Environment |
|-----|-------|-------------|
| `NEXT_PUBLIC_API_URL` | `https://api.yourdomain.com` | Production |
| `NEXT_PUBLIC_DOMAIN` | `https://yourdomain.com` | Production |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | `your_site_key` | Production |
| `RECAPTCHA_SECRET_KEY` | `your_secret_key` | Production |

3. For each variable:
   - Enter **Key** (e.g., `NEXT_PUBLIC_API_URL`)
   - Enter **Value** (your actual value)
   - Select **Environment**: Production, Preview, Development
   - Click "Add"

### 4.2 Redeploy After Adding Variables

Environment variable changes require redeployment:

1. Go to "Deployments" tab
2. Click "Redeploy" on the latest deployment
3. Select "Use existing Build Cache" (faster)

---

## Step 5: Deploy Your Project

### 5.1 Initial Deployment

1. After importing and configuring, click **"Deploy"**
2. Vercel will:
   - Clone your repository
   - Install dependencies
   - Run build command
   - Deploy to production
3. Wait 2-5 minutes for deployment to complete

### 5.2 Deployment URL

Once deployed, Vercel provides:

- **Production URL**: `your-project.vercel.app`
- **Preview URL**: Unique URL for each PR/branch

---

## Step 6: Configure Custom Domain (Optional)

### 6.1 Add Your Domain

1. Go to "Settings" → "Domains"
2. Enter your custom domain: `yourdomain.com`
3. Click "Add"

### 6.2 Configure DNS

Vercel will provide DNS records:

**For Root Domain (`yourdomain.com`):**

- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For Subdomain (`www.yourdomain.com`):**

- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

### 6.3 Update DNS at Your Provider

1. Log in to your domain registrar (GoDaddy, Namecheap, etc.)
2. Go to DNS settings
3. Add the A and CNAME records above
4. Save changes

DNS propagation takes 24-48 hours (usually much faster).

### 6.4 Enable HTTPS

Vercel automatically provisions SSL certificates via Let's Encrypt:

- Production domain: SSL auto-enabled
- Custom domains: SSL auto-enabled after DNS verification

---

## Step 7: Set Up Continuous Deployment

### 7.1 Automatic Deployments

Vercel automatically deploys when you push to GitHub:

- **Push to `main`**: Deploys to production
- **Push to other branches**: Creates preview deployment
- **Open PR**: Creates preview deployment with unique URL

### 7.2 Configure Deployment Branches

1. Go to "Settings" → "Git"
2. **Production Branch**: Set to `main` (or your primary branch)
3. **Preview Branches**: Enable/disable preview deployments

### 7.3 Build & Ignore Settings

**Ignored Build Step** (optional):

If you want to skip deployments for certain commits:

```bash
# vercel.json (project root)
{
  "git": {
    "deploymentEnabled": {
      "main": true,
      "develop": false
    }
  }
}
```

---

## Step 8: Configure Advanced Settings

### 8.1 Environment Variables by Environment

Set different values for Production, Preview, Development:

Example:

- **Production**: `NEXT_PUBLIC_API_URL=https://api.production.com`
- **Preview**: `NEXT_PUBLIC_API_URL=https://api.staging.com`
- **Development**: `NEXT_PUBLIC_API_URL=http://localhost:3001`

### 8.2 Redirects & Rewrites

Create `vercel.json` in project root for custom redirects:

```json
{
  "redirects": [
    {
      "source": "/old-pricing",
      "destination": "/pricing",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        }
      ]
    }
  ]
}
```

### 8.3 Enable Vercel Analytics (Optional)

1. Go to "Analytics" tab
2. Click "Enable Analytics"
3. Add to your app:

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## Step 9: Post-Deployment Validation

### 9.1 Test Production URL

Visit `your-project.vercel.app` and verify:

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms submit successfully
- [ ] Images display properly
- [ ] Dark mode toggle works
- [ ] No console errors

### 9.2 Run Lighthouse Audit

1. Open Chrome DevTools
2. Go to "Lighthouse" tab
3. Run audit on production URL
4. Verify scores > 90 for all metrics

### 9.3 Test Core Web Vitals

Check in Vercel dashboard:

1. Go to "Analytics" → "Web Vitals"
2. Monitor LCP, FID, CLS
3. Ensure all metrics are "Good"

---

## Step 10: Monitoring & Maintenance

### 10.1 Deployment Notifications

Enable notifications in Vercel:

1. Go to "Settings" → "Notifications"
2. Enable email/Slack notifications for:
   - Deployment succeeded
   - Deployment failed
   - Build errors

### 10.2 Review Deployment Logs

If deployment fails:

1. Go to "Deployments" tab
2. Click on failed deployment
3. View "Build Logs" for error details

### 10.3 Rollback if Needed

To rollback to a previous deployment:

1. Go to "Deployments"
2. Find working deployment
3. Click "..." → "Promote to Production"

---

## Common Issues & Solutions

### Issue 1: Build Fails

**Error**: `Module not found` or `Type error`

**Solution**:
```bash
# Locally, ensure build succeeds
npm run build

# Fix any TypeScript errors
npx tsc --noEmit

# Push fix to GitHub
git add .
git commit -m "Fix build errors"
git push
```

### Issue 2: Environment Variables Not Working

**Error**: `undefined` when accessing `process.env.NEXT_PUBLIC_*`

**Solution**:
- Verify variables are prefixed with `NEXT_PUBLIC_` for client-side
- Redeploy after adding variables in Vercel dashboard
- Check variables are set for correct environment (Production/Preview)

### Issue 3: 404 on Custom Domain

**Error**: Domain shows 404 or doesn't resolve

**Solution**:
- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check domain status in Vercel dashboard

### Issue 4: Images Not Loading

**Error**: Images show broken or 404

**Solution**:
- Verify image paths are correct
- Check `next.config.js` has correct `remotePatterns`
- Use Next.js `Image` component, not `<img>` tag

---

## Deployment Checklist

Before deploying to production:

- [ ] Local build succeeds: `npm run build`
- [ ] All tests pass: `npm test`
- [ ] E2E tests pass: `npx playwright test`
- [ ] Environment variables configured in Vercel
- [ ] `.env` not committed to Git
- [ ] Custom domain DNS configured (if applicable)
- [ ] SSL certificate verified
- [ ] Analytics enabled
- [ ] Lighthouse score > 90

---

## Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Vercel CLI**: https://vercel.com/docs/cli
- **Vercel Support**: https://vercel.com/support

---

## Success Criteria

✅ **Production URL accessible**  
✅ **All pages load without errors**  
✅ **Lighthouse score > 90**  
✅ **Core Web Vitals: Good**  
✅ **HTTPS enabled**  
✅ **Custom domain configured** (if applicable)  
✅ **Continuous deployment working**  
✅ **Analytics tracking events**

---

**Congratulations!** 🎉 Your application is now live in production!
