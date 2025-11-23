# Deployment Guide - Indonesian Importer Platform

## 🚀 Quick Deployment

### Option 1: Deploy to Vercel (Recommended)

**Prerequisites:**
- GitHub account
- Vercel account (free tier available)

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Production ready"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy with Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js configuration
   - Click "Deploy"

3. **Configure Custom Domain (Optional)**
   - In Vercel dashboard, go to "Settings" → "Domains"
   - Add your custom domain
   - Update DNS records as instructed

**Build Command:** `npm run build`  
**Output Directory:** `.next`  
**Install Command:** `npm install`

---

### Option 2: Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Create `netlify.toml`**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. **Deploy**
   - Visit [netlify.com](https://netlify.com)
   - Drag and drop `.next` folder
   - Or connect GitHub repository for automatic deployments

---

### Option 3: Deploy to AWS (Advanced)

**Using AWS Amplify:**

1. **Install AWS Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   amplify add hosting
   amplify publish
   ```

**Using AWS EC2:**

1. **Set up EC2 instance**
   - Launch Ubuntu Server 22.04 LTS
   - Install Node.js 20+
   - Clone repository

2. **Install dependencies**
   ```bash
   npm install
   npm run build
   ```

3. **Run with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "indonesian-importer" -- start
   pm2 save
   pm2 startup
   ```

---

## 🔧 Pre-Deployment Checklist

### 1. Environment Variables
Create `.env.local` for sensitive data:
```env
# Example - Add your actual values
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add other environment variables as needed
```

### 2. Update Configuration Files

**next.config.js** - Update image domains:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'your-cdn-domain.com',
      },
    ],
  },
}

module.exports = nextConfig
```

### 3. SEO Metadata

Update metadata in each page:
```typescript
export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
  openGraph: {
    title: 'Your Page Title',
    description: 'Your page description',
    url: 'https://yourdomain.com',
    siteName: 'Indonesian Importer',
    images: [
      {
        url: 'https://yourdomain.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}
```

### 4. Analytics Setup (Optional)

**Google Analytics:**
Create `app/components/Analytics.tsx`:
```typescript
'use client'

import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </>
  )
}
```

Add to `app/layout.tsx`:
```typescript
import Analytics from '@/components/Analytics'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## 📊 Performance Optimization

### 1. Build Optimization
```bash
# Analyze bundle size
npm run build

# Check for duplicate dependencies
npm dedupe
```

### 2. Image Optimization
- Use `next/image` component (already implemented in components)
- Serve images from CDN
- Use WebP format when possible

### 3. Font Optimization
Already configured in `app/layout.tsx`:
```typescript
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Prevents FOIT (Flash of Invisible Text)
})
```

### 4. Route Caching
Next.js automatically caches static pages. For dynamic pages:
```typescript
// In route handlers
export const revalidate = 3600 // Revalidate every hour
```

---

## 🔒 Security Checklist

- [x] TypeScript strict mode enabled
- [x] No hardcoded secrets in code
- [x] Environment variables for sensitive data
- [ ] Set up CORS policies (if using API)
- [ ] Configure CSP headers
- [ ] Enable HTTPS (automatic on Vercel/Netlify)
- [ ] Set up rate limiting for forms
- [ ] Add CAPTCHA to contact form (optional)

---

## 📈 Post-Deployment

### 1. Monitor Performance
- Set up Vercel Analytics (if using Vercel)
- Monitor Core Web Vitals
- Check Lighthouse scores

### 2. SEO Verification
- Submit sitemap to Google Search Console
- Verify robots.txt is accessible
- Check Open Graph tags with debuggers

### 3. Testing
- Test all 15 pages on mobile and desktop
- Verify dark mode works correctly
- Test form submissions
- Check all internal links
- Verify accessibility with screen readers

---

## 🆘 Troubleshooting

### Build Errors

**Error: TypeScript errors**
```bash
# Run type check
npx tsc --noEmit --skipLibCheck

# Fix errors and rebuild
npm run build
```

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Runtime Errors

**Error: Hydration mismatch**
- Check for `useEffect` dependencies
- Ensure server and client render same content
- Use `suppressHydrationWarning` if needed

**Error: CORS issues**
- Configure CORS in API routes
- Use environment variables for API URLs

---

## 📞 Support

For deployment issues:
- Next.js Documentation: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Community: https://github.com/vercel/next.js/discussions

---

## 🎯 Recommended Deployment Flow

1. **Development** → Local testing (`npm run dev`)
2. **Staging** → Deploy to Vercel preview branch
3. **Testing** → QA on staging environment
4. **Production** → Merge to main branch → Auto-deploy

---

**Estimated Deployment Time:**
- Vercel: 2-5 minutes
- Netlify: 3-7 minutes
- AWS Amplify: 5-10 minutes
- AWS EC2: 15-30 minutes (manual setup)

**Recommended:** Start with Vercel for fastest deployment and best Next.js integration!

---

*Last Updated: November 23, 2025*
