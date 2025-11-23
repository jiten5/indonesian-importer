# MONITORING SETUP & MAINTENANCE GUIDE

## 📊 POST-DEPLOYMENT MONITORING CONFIGURATION

### 1. VERCEL ANALYTICS SETUP

#### Installation:
```bash
npm install @vercel/analytics @vercel/speed-insights
```

#### Implementation in `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

#### Features Tracked:
- ✅ Page views
- ✅ Unique visitors
- ✅ Referral sources
- ✅ Geographic distribution
- ✅ Device types
- ✅ Browser usage
- ✅ Core Web Vitals
- ✅ Page load performance

#### Access Dashboard:
1. Go to Vercel project dashboard
2. Click "Analytics" tab
3. View real-time and historical data
4. Export reports as needed

---

### 2. ERROR TRACKING WITH SENTRY

#### Installation:
```bash
npx @sentry/wizard@latest -i nextjs
```

#### Configuration Files Created:
- `sentry.client.config.ts`
- `sentry.server.config.ts`
- `sentry.edge.config.ts`
- `next.config.js` (updated)

#### Client Configuration (`sentry.client.config.ts`):
```typescript
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Performance Monitoring
  tracesSampleRate: 1.0,
  
  // Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  
  // Environment
  environment: process.env.NODE_ENV,
  
  // Error Filtering
  beforeSend(event, hint) {
    // Filter out specific errors
    if (event.exception) {
      const error = hint.originalException
      // Don't send third-party errors
      if (error instanceof Error && error.message.includes('third-party')) {
        return null
      }
    }
    return event
  },
  
  // Custom Integrations
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: [
        'localhost',
        'indonesianimporter.com',
        /^\//,
      ],
    }),
    new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
})
```

#### Server Configuration (`sentry.server.config.ts`):
```typescript
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
})
```

#### Environment Variables:
```env
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn-here
SENTRY_AUTH_TOKEN=your-auth-token
SENTRY_ORG=your-org
SENTRY_PROJECT=indonesianimporter
```

#### Features:
- ✅ Real-time error tracking
- ✅ Stack trace analysis
- ✅ User session replay
- ✅ Performance monitoring
- ✅ Release tracking
- ✅ Source map support
- ✅ Custom error context
- ✅ Email/Slack alerts

---

### 3. UPTIME MONITORING

#### Recommended Services:

**Option A: UptimeRobot (Free)**
1. Sign up at https://uptimerobot.com
2. Create new monitor:
   - **Type:** HTTP(s)
   - **URL:** https://yourdomain.com
   - **Name:** IndonesianImporter - Homepage
   - **Interval:** 5 minutes
3. Add alert contacts (email, SMS, Slack)
4. Repeat for critical pages:
   - /contact
   - /pricing
   - /api/health (if API exists)

**Option B: Better Uptime (Premium)**
1. Sign up at https://betteruptime.com
2. Configure monitors with advanced features:
   - Status page generation
   - Incident management
   - On-call scheduling
   - Multiple locations

#### Endpoints to Monitor:
```javascript
// Critical Endpoints
const endpoints = [
  { path: '/', name: 'Homepage', priority: 'high' },
  { path: '/contact', name: 'Contact Form', priority: 'high' },
  { path: '/pricing', name: 'Pricing Page', priority: 'high' },
  { path: '/api/health', name: 'API Health', priority: 'critical' },
  { path: '/data/indonesia-import', name: 'Import Data', priority: 'medium' },
]
```

#### Alert Thresholds:
- **Response Time:** > 5 seconds
- **Error Rate:** > 1%
- **Downtime:** Immediate alert
- **SSL Certificate:** Expiring < 30 days

---

### 4. PERFORMANCE DASHBOARDS

#### Create Custom Dashboard:

**Metrics to Track:**

1. **Core Web Vitals:**
   ```javascript
   // Add to app/layout.tsx
   import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'
   
   function sendToAnalytics(metric) {
     // Send to your analytics endpoint
     fetch('/api/analytics', {
       method: 'POST',
       body: JSON.stringify(metric),
     })
   }
   
   getCLS(sendToAnalytics)
   getFID(sendToAnalytics)
   getFCP(sendToAnalytics)
   getLCP(sendToAnalytics)
   getTTFB(sendToAnalytics)
   ```

2. **Custom Performance Metrics:**
   ```javascript
   // lib/performance.ts
   export function trackPageLoad() {
     if (typeof window !== 'undefined') {
       window.addEventListener('load', () => {
         const perfData = performance.getEntriesByType('navigation')[0]
         
         // Send metrics
         analytics.track('page_load', {
           loadTime: perfData.loadEventEnd - perfData.fetchStart,
           domReady: perfData.domContentLoadedEventEnd - perfData.fetchStart,
           ttfb: perfData.responseStart - perfData.requestStart,
         })
       })
     }
   }
   ```

3. **Error Rate Tracking:**
   ```javascript
   // lib/errorTracking.ts
   export function setupErrorTracking() {
     window.addEventListener('error', (event) => {
       analytics.track('error', {
         message: event.message,
         filename: event.filename,
         lineno: event.lineno,
         colno: event.colno,
       })
     })
     
     window.addEventListener('unhandledrejection', (event) => {
       analytics.track('unhandled_rejection', {
         reason: event.reason,
       })
     })
   }
   ```

#### Dashboard Tools:
- **Vercel Dashboard:** Built-in analytics and performance
- **Google Analytics 4:** User behavior and conversions
- **Grafana:** Custom performance dashboards
- **DataDog:** Full-stack monitoring (enterprise)

---

### 5. GOOGLE ANALYTICS 4 SETUP

#### Installation:
```bash
npm install @next/third-parties
```

#### Configuration in `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

#### Custom Events:
```typescript
// lib/analytics.ts
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Usage examples:
trackEvent('click', 'CTA', 'Get Started Button')
trackEvent('form_submit', 'Contact', 'Contact Form')
trackEvent('download', 'Data', 'Export CSV')
```

#### Events to Track:
- Form submissions
- Button clicks (CTAs)
- Download actions
- Search queries
- Filter interactions
- Page scroll depth
- Video plays
- External link clicks

---

### 6. LOG MANAGEMENT

#### Vercel Logs:
```bash
# View deployment logs
vercel logs <deployment-url>

# Stream logs in real-time
vercel logs --follow

# Filter by function
vercel logs --function=api/contact
```

#### Custom Logging:
```typescript
// lib/logger.ts
export const logger = {
  info: (message: string, data?: any) => {
    console.log(`[INFO] ${message}`, data)
    // Send to external logging service
  },
  
  warn: (message: string, data?: any) => {
    console.warn(`[WARN] ${message}`, data)
    // Send to external logging service
  },
  
  error: (message: string, error?: Error, data?: any) => {
    console.error(`[ERROR] ${message}`, error, data)
    // Send to Sentry
    Sentry.captureException(error, { extra: data })
  },
}
```

#### Log Retention:
- **Vercel Free:** 1 day
- **Vercel Pro:** 30 days
- **External Service (Logtail, LogDNA):** Custom retention

---

### 7. SECURITY MONITORING

#### Content Security Policy (CSP) Reporting:
```javascript
// next.config.js
module.exports = {
  headers: [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy-Report-Only',
          value: `
            default-src 'self';
            script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel-insights.com;
            style-src 'self' 'unsafe-inline';
            img-src 'self' data: https:;
            report-uri /api/csp-report;
          `.replace(/\s{2,}/g, ' ').trim()
        }
      ]
    }
  ]
}
```

#### CSP Violation Handler:
```typescript
// app/api/csp-report/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const report = await request.json()
  
  console.error('CSP Violation:', report)
  
  // Send to monitoring service
  // Sentry.captureMessage('CSP Violation', { extra: report })
  
  return NextResponse.json({ received: true })
}
```

#### Security Headers Monitoring:
Use https://securityheaders.com to scan your deployed site and verify all security headers are properly configured.

---

### 8. AUTOMATED ALERTS

#### Alert Configuration:

**Critical Alerts (Immediate):**
- ✅ Site downtime (> 1 minute)
- ✅ Error rate spike (> 5%)
- ✅ Response time > 10 seconds
- ✅ SSL certificate issues
- ✅ 500 errors on critical paths

**Warning Alerts (Within 1 hour):**
- ✅ Response time > 5 seconds
- ✅ Error rate > 1%
- ✅ Memory usage > 80%
- ✅ API rate limit approaching
- ✅ Form submission failures

**Info Alerts (Daily digest):**
- ✅ Traffic spikes
- ✅ New user registrations
- ✅ Feature usage statistics
- ✅ Performance trends
- ✅ SEO rankings changes

#### Alert Channels:
```javascript
const alertChannels = {
  email: 'team@indonesianimporter.com',
  slack: 'https://hooks.slack.com/services/XXX',
  sms: '+1-XXX-XXX-XXXX', // Critical only
  pagerduty: 'https://events.pagerduty.com/v2/enqueue', // Enterprise
}
```

---

### 9. BACKUP & DISASTER RECOVERY

#### Automated Backups:

**Database Backups:**
```bash
# If using database, set up daily backups
# Example with PostgreSQL
0 2 * * * pg_dump -U postgres indonesianimporter > backup_$(date +\%Y\%m\%d).sql
```

**Static Content Backup:**
```bash
# Backup uploaded files/images
0 3 * * * aws s3 sync /var/www/uploads s3://backups/uploads/$(date +\%Y\%m\%d)
```

**Git Repository:**
- All code is version-controlled in GitHub
- Protected main branch with required reviews
- Automated backups via GitHub

#### Recovery Procedures:

**Deployment Rollback:**
```bash
# Vercel allows instant rollbacks
vercel rollback <deployment-url>
```

**Database Restore:**
```bash
# Restore from backup
psql -U postgres indonesianimporter < backup_20251123.sql
```

---

### 10. SYNTHETIC MONITORING

#### Create Health Check Endpoint:
```typescript
// app/api/health/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const checks = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
    checks: {
      database: await checkDatabase(),
      cache: await checkCache(),
      api: await checkAPI(),
    }
  }
  
  const allHealthy = Object.values(checks.checks).every(c => c === 'healthy')
  
  return NextResponse.json(
    checks,
    { status: allHealthy ? 200 : 503 }
  )
}

async function checkDatabase() {
  try {
    // Ping database
    return 'healthy'
  } catch {
    return 'unhealthy'
  }
}

async function checkCache() {
  // Check cache availability
  return 'healthy'
}

async function checkAPI() {
  // Check external APIs
  return 'healthy'
}
```

#### Monitor with Cron Job:
```bash
# Check health every 5 minutes
*/5 * * * * curl https://yourdomain.com/api/health || echo "Health check failed"
```

---

## 📅 MAINTENANCE SCHEDULE

### Daily Tasks:
- [ ] Review error logs in Sentry
- [ ] Check uptime status (should be 100%)
- [ ] Monitor traffic patterns in Vercel Analytics
- [ ] Review security alerts
- [ ] Check form submission success rate

### Weekly Tasks:
- [ ] Run Lighthouse audit on main pages
- [ ] Review performance metrics trends
- [ ] Check dependency security alerts
- [ ] Verify backup completion
- [ ] Review user feedback/support tickets
- [ ] Update content if needed
- [ ] Test critical user flows

### Monthly Tasks:
- [ ] Update dependencies (`npm update`)
- [ ] Run full security audit
- [ ] Review and optimize slow pages
- [ ] Analyze Core Web Vitals trends
- [ ] Update documentation
- [ ] Review and update SEO strategy
- [ ] Backup review and restore test
- [ ] Accessibility audit
- [ ] Mobile usability check
- [ ] Cross-browser compatibility test

### Quarterly Tasks:
- [ ] Major dependency updates
- [ ] Comprehensive security review
- [ ] Performance optimization sprint
- [ ] UX/UI improvements based on analytics
- [ ] A/B testing implementation
- [ ] SEO strategy revision
- [ ] Disaster recovery drill
- [ ] Team training on new features

### Annual Tasks:
- [ ] Full application audit
- [ ] Infrastructure review
- [ ] Technology stack evaluation
- [ ] Roadmap planning for next year
- [ ] Compliance review (GDPR, WCAG, etc.)
- [ ] Vendor/service contract renewals
- [ ] Penetration testing (if applicable)

---

## 🔧 MAINTENANCE CHECKLIST TEMPLATE

### Pre-Deployment Checklist:
- [ ] All tests passing (unit + E2E)
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Build succeeds locally
- [ ] Environment variables configured
- [ ] Database migrations completed
- [ ] Third-party integrations tested
- [ ] Security headers verified
- [ ] Performance budget met
- [ ] Accessibility audit passed

### Post-Deployment Checklist:
- [ ] Deployment successful
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Forms submit successfully
- [ ] No console errors
- [ ] SSL certificate valid
- [ ] Analytics tracking active
- [ ] Error tracking configured
- [ ] Backups scheduled
- [ ] Monitoring alerts active

### Monthly Maintenance Checklist:
- [ ] Review dependencies for updates
- [ ] Check for security vulnerabilities
- [ ] Analyze performance metrics
- [ ] Review error logs
- [ ] Test backup restoration
- [ ] Update documentation
- [ ] Review user feedback
- [ ] Optimize slow queries/pages
- [ ] Update content as needed
- [ ] Run accessibility scan

---

## 📊 KEY PERFORMANCE INDICATORS (KPIs)

### Technical KPIs:
- **Uptime:** Target 99.9%
- **Response Time:** < 2 seconds (95th percentile)
- **Error Rate:** < 0.1%
- **Build Success Rate:** > 99%
- **Test Pass Rate:** 100%
- **Code Coverage:** > 80%

### User Experience KPIs:
- **Page Load Time:** < 3 seconds
- **Time to Interactive:** < 3.5 seconds
- **Lighthouse Score:** > 90 (all categories)
- **Bounce Rate:** < 40%
- **Mobile Usability:** 100%
- **Accessibility Score:** 100 (WAVE tool)

### Business KPIs:
- **Monthly Active Users:** Track growth
- **Form Conversion Rate:** Target > 5%
- **Search Success Rate:** > 90%
- **Average Session Duration:** Track trends
- **Pages per Session:** Track engagement
- **Return Visitor Rate:** Track loyalty

---

## 🚨 INCIDENT RESPONSE PLAN

### Severity Levels:

**SEV 1 - Critical:**
- Site completely down
- Data breach
- Payment system failure
- Action: Immediate response (< 15 minutes)

**SEV 2 - High:**
- Major feature broken
- Performance degradation (> 5s load time)
- Elevated error rate (> 5%)
- Action: Response within 1 hour

**SEV 3 - Medium:**
- Minor feature broken
- Non-critical page errors
- Moderate performance issues
- Action: Response within 4 hours

**SEV 4 - Low:**
- UI glitches
- Non-critical bugs
- Enhancement requests
- Action: Response within 1 business day

### Incident Response Steps:

1. **Detection:**
   - Automated alert received
   - User report
   - Proactive monitoring

2. **Triage:**
   - Assess severity
   - Identify affected users
   - Determine impact

3. **Communication:**
   - Notify stakeholders
   - Update status page
   - Post incident report

4. **Resolution:**
   - Implement fix
   - Deploy hotfix
   - Verify solution

5. **Post-Mortem:**
   - Document incident
   - Identify root cause
   - Implement preventive measures
   - Update runbooks

---

## 📚 TROUBLESHOOTING GUIDE

### Common Issues:

#### Issue: Build Failures
**Symptoms:** Vercel deployment fails  
**Diagnosis:** Check build logs for errors  
**Solutions:**
- Verify all dependencies installed
- Check for TypeScript errors
- Ensure environment variables set
- Review next.config.js for issues

#### Issue: High Error Rate
**Symptoms:** Sentry showing increased errors  
**Diagnosis:** Review error messages and stack traces  
**Solutions:**
- Check for recent deployments
- Review error patterns
- Implement error boundaries
- Add better error handling

#### Issue: Slow Performance
**Symptoms:** Lighthouse scores dropping  
**Diagnosis:** Run performance profiler  
**Solutions:**
- Optimize images
- Reduce JavaScript bundle size
- Implement code splitting
- Add caching strategies

#### Issue: Form Submissions Failing
**Symptoms:** Users report form errors  
**Diagnosis:** Check form validation and API logs  
**Solutions:**
- Verify API endpoint availability
- Check validation rules
- Review CORS configuration
- Test with different browsers

---

## 🎯 CONTINUOUS IMPROVEMENT

### Optimization Opportunities:

1. **Performance:**
   - Implement incremental static regeneration (ISR)
   - Add more aggressive caching
   - Optimize critical rendering path
   - Reduce time to first byte (TTFB)

2. **User Experience:**
   - Add skeleton loaders
   - Implement optimistic UI updates
   - Enhance error messages
   - Add onboarding tutorials

3. **SEO:**
   - Generate dynamic sitemaps
   - Add structured data (JSON-LD)
   - Optimize meta descriptions
   - Improve internal linking

4. **Security:**
   - Implement rate limiting
   - Add CAPTCHA to forms
   - Enable two-factor authentication
   - Regular security audits

5. **Analytics:**
   - Track more user events
   - Implement funnel analysis
   - Add cohort analysis
   - Create custom dashboards

---

**End of Monitoring Setup & Maintenance Guide**

*For questions or support, contact the development team or refer to the main PHASE6_VALIDATION_REPORT.md*
