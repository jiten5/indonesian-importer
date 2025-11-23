# Vercel Deployment Guide - Indonesian Importer Platform

## 📋 Prerequisites

- [x] GitHub account
- [x] Vercel account (sign up at [vercel.com](https://vercel.com))
- [x] Project code pushed to GitHub repository
- [x] All tests passing locally
- [x] Production build successful (`npm run build`)

---

## 🚀 Step 1: Connect GitHub Repository to Vercel

### 1.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### 1.2 Import Project
1. Click **"Add New Project"** from your Vercel dashboard
2. Under **"Import Git Repository"**, find your repository:
   - Repository name: `IndonesianImporter`
3. Click **"Import"**

### 1.3 Configure Project Settings
Vercel will auto-detect Next.js. Verify the following:

**Framework Preset:** Next.js  
**Root Directory:** `./` (leave as is)  
**Build Command:** `npm run build`  
**Output Directory:** `.next` (auto-detected)  
**Install Command:** `npm install`

---

## 🔧 Step 2: Set Environment Variables

### 2.1 Access Environment Variables
1. In your Vercel project, click **"Settings"**
2. Navigate to **"Environment Variables"**

### 2.2 Add Variables
Add the following environment variables:

#### Required Variables:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Indonesian Importer
```

#### Optional Variables (add as needed):
```
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

**For each variable:**
1. Click **"Add New"**
2. Enter **Name** (e.g., `NEXT_PUBLIC_SITE_URL`)
3. Enter **Value** (e.g., `https://yourdomain.com`)
4. Select Environment: **Production**, **Preview**, **Development** (check all 3)
5. Click **"Save"**

---

## 🌐 Step 3: Configure Custom Domain

### 3.1 Add Domain
1. In your Vercel project, go to **"Settings"** → **"Domains"**
2. Click **"Add"**
3. Enter your domain name (e.g., `indonesianimporter.com`)
4. Click **"Add"**

### 3.2 Configure DNS
Vercel will provide DNS records. Configure your domain provider:

**For Root Domain (`yourdomain.com`):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For WWW Subdomain (`www.yourdomain.com`):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Verification:**
- DNS propagation can take 24-48 hours
- Vercel automatically provisions SSL certificate (free)
- Domain will show as **"Valid"** when ready

---

## ⚙️ Step 4: Enable Auto-Deployments

### 4.1 Production Deployments (Main Branch)
1. Go to **"Settings"** → **"Git"**
2. Ensure **"Production Branch"** is set to `main` (or `master`)
3. **Auto-deploy:** Every push to `main` branch triggers production deployment

### 4.2 Preview Deployments (Pull Requests)
1. Under **"Git"** settings
2. Enable **"Deploy Preview"**
3. **Auto-deploy:** Every Pull Request gets a unique preview URL
4. Comments with preview URL posted automatically on PR

### 4.3 Deployment Protection (Optional)
1. Go to **"Settings"** → **"Deployment Protection"**
2. Enable **"Vercel Authentication"** to password-protect deployments
3. Add team members who should have access

---

## 📦 Step 5: Initial Deployment

### 5.1 Trigger First Deployment
Option A: **Automatic (Recommended)**
- Simply push to `main` branch:
  ```bash
  git add .
  git commit -m "Deploy to production"
  git push origin main
  ```

Option B: **Manual Deploy**
- In Vercel dashboard, click **"Deployments"**
- Click **"Redeploy"** on any previous deployment

### 5.2 Monitor Deployment
1. Click on the deployment to view logs
2. Watch build process in real-time
3. Deployment typically takes 2-5 minutes

**Build Stages:**
- ✓ Cloning repository
- ✓ Installing dependencies
- ✓ Building application
- ✓ Uploading build artifacts
- ✓ Deployment complete

### 5.3 Verify Deployment
1. Once complete, click **"Visit"** to open your site
2. Test critical functionality:
   - Homepage loads
   - Navigation works
   - Forms submit
   - Dark mode toggles
   - Responsive on mobile

---

## 🔍 Step 6: Post-Deployment Configuration

### 6.1 Configure Redirects (Optional)
Create `vercel.json` in project root:

```json
{
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 6.2 Enable Analytics
1. Go to **"Analytics"** in Vercel dashboard
2. Click **"Enable Analytics"**
3. Monitor:
   - Page views
   - Top pages
   - Top referrers
   - Real User Monitoring (RUM)

### 6.3 Set Up Speed Insights
1. Go to **"Speed Insights"**
2. Click **"Enable"**
3. Track Core Web Vitals in production

---

## 🛠️ Step 7: Continuous Deployment Workflow

### Development Workflow
```bash
# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Make changes and commit
git add .
git commit -m "Add new feature"

# 3. Push to GitHub
git push origin feature/new-feature

# 4. Create Pull Request on GitHub
# Vercel automatically creates preview deployment

# 5. Review preview deployment
# Test changes on preview URL

# 6. Merge PR when ready
# Automatic production deployment triggered
```

### Deployment Environments
- **Production:** `main` branch → `yourdomain.com`
- **Preview:** PRs → `your-project-git-branch.vercel.app`
- **Development:** Local → `localhost:3000`

---

## 📊 Step 8: Monitoring & Maintenance

### 8.1 Monitor Deployments
- **Dashboard:** View all deployments
- **Logs:** Real-time build and function logs
- **Analytics:** User behavior and performance

### 8.2 Rollback (If Needed)
1. Go to **"Deployments"**
2. Find previous successful deployment
3. Click **"···"** (three dots)
4. Select **"Promote to Production"**
5. Previous version goes live instantly

### 8.3 Set Up Notifications
1. Go to **"Settings"** → **"Notifications"**
2. Configure:
   - Deployment failed
   - Deployment succeeded
   - Comment on PR
3. Choose notification methods:
   - Email
   - Slack
   - Discord

---

## 🔐 Step 9: Security Best Practices

### 9.1 Environment Variables
- ✓ Never commit `.env.local` to Git
- ✓ Use `NEXT_PUBLIC_` prefix for client-side variables only
- ✓ Sensitive keys should NOT have `NEXT_PUBLIC_` prefix
- ✓ Rotate API keys regularly

### 9.2 Security Headers
Already configured in `vercel.json` (see Step 6.1)

### 9.3 SSL/HTTPS
- ✓ Automatic SSL certificates from Let's Encrypt
- ✓ Auto-renewal before expiration
- ✓ HTTP → HTTPS redirect enabled by default

---

## 📈 Step 10: Performance Optimization

### 10.1 Enable Edge Caching
Vercel automatically caches static assets at edge locations globally.

### 10.2 Optimize Images
Already configured via `next/image`:
- Automatic WebP/AVIF conversion
- Responsive images
- Lazy loading

### 10.3 Bundle Analysis
Run locally before deploying:
```bash
ANALYZE=true npm run build
```

---

## 🆘 Troubleshooting

### Build Failures

**Error: "Module not found"**
```bash
# Solution: Clear cache and reinstall
npm ci
npm run build
```

**Error: "Environment variable not found"**
- Check variable names match exactly
- Verify variables set in Vercel dashboard
- Redeploy after adding new variables

### Deployment Issues

**Domain not working**
- Wait 24-48 hours for DNS propagation
- Verify DNS records with registrar
- Check SSL certificate status

**Preview deployment not created**
- Ensure GitHub integration is active
- Check "Deploy Preview" is enabled
- Verify branch protection rules

### Performance Issues

**Slow page loads**
- Run Lighthouse audit
- Check bundle size (`ANALYZE=true npm run build`)
- Optimize images
- Enable caching

---

## 📞 Support Resources

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Community:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Status Page:** [vercel-status.com](https://www.vercel-status.com/)

---

## ✅ Deployment Checklist

- [ ] GitHub repository connected
- [ ] Environment variables configured
- [ ] Custom domain added (optional)
- [ ] DNS configured (if custom domain)
- [ ] Auto-deployments enabled
- [ ] Initial deployment successful
- [ ] Production site verified
- [ ] Analytics enabled
- [ ] Speed Insights enabled
- [ ] Security headers configured
- [ ] Team notifications set up
- [ ] Rollback procedure tested

---

## 🎉 Success!

Your Indonesian Importer platform is now live on Vercel!

**Next Steps:**
1. Monitor analytics and performance
2. Set up error tracking (Sentry)
3. Configure CDN for assets
4. Enable monitoring alerts
5. Plan regular security audits

**Production URL:** `https://yourdomain.com`  
**Vercel Dashboard:** `https://vercel.com/your-username/indonesianimporter`

---

*Last Updated: November 23, 2025*
