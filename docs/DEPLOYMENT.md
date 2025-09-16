# TOFI Deployment Guide

## Current State

The TOFI Swiss Flower Marketplace is currently set up as a monorepo with Next.js frontend. This is Phase 1 of the complete marketplace implementation.

## What's Working ✅

- **Next.js Application**: Modern React app with TypeScript
- **Swiss Localization**: German (de-CH) content and formatting
- **Accessibility**: WCAG 2.2 AA compliant design
- **Privacy Compliance**: nFADP/GDPR aligned privacy policy
- **Product Catalog**: Basic flower product display
- **Responsive Design**: Mobile-first, Swiss-inspired design
- **Build System**: TypeScript compilation and Next.js optimization

## Development Deployment

### Prerequisites
- Node.js 18+
- pnpm 8+

### Setup
```bash
# Install dependencies
pnpm install

# Start development server
cd apps/web
pnpm dev
```

The application will be available at `http://localhost:3000`

## Production Deployment Options

### Option 1: Vercel (Recommended for MVP)

1. Connect repository to Vercel
2. Set build command: `cd apps/web && pnpm build`
3. Set output directory: `apps/web/.next`
4. Configure environment variables as needed

### Option 2: Static Export (GitHub Pages Compatible)

Add to `apps/web/next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

Build and deploy:
```bash
cd apps/web
pnpm build
# Deploy contents of `out/` directory
```

### Option 3: Self-hosted (Future Production)

For the full marketplace with backend services:

1. **Container Setup**:
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY . .
   RUN pnpm install --frozen-lockfile
   RUN pnpm build
   EXPOSE 3000
   CMD ["pnpm", "start"]
   ```

2. **Infrastructure Requirements**:
   - PostgreSQL database with PostGIS
   - Redis for sessions/caching
   - Object storage for images
   - Load balancer with SSL termination

## Domain Configuration

### DNS Setup for tofi.ch
```
A     @        <server-ip>
CNAME www      tofi.ch
```

### SSL Certificate
- Use Let's Encrypt for free SSL
- Configure auto-renewal

## Environment Variables

Create `.env.local` in `apps/web/`:

```bash
# Base configuration
NEXT_PUBLIC_SITE_URL=https://tofi.ch
NEXT_PUBLIC_ENVIRONMENT=production

# Future integrations (when implemented)
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
TWINT_MERCHANT_ID=...
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
```

## Performance Optimization

### Current Optimizations ✅
- Next.js automatic code splitting
- Image optimization (when images added)
- CSS custom properties for theming
- Minimal JavaScript footprint

### Future Optimizations 📋
- CDN for static assets
- Database query optimization
- Redis caching for product data
- Compression and minification

## Monitoring

### Essential Metrics
- Page load times (target: <2s)
- Core Web Vitals
- Error rates
- Conversion funnel

### Recommended Tools
- Google Analytics 4
- New Relic or DataDog for APM
- Sentry for error tracking
- Uptime monitoring

## Security Checklist

### Current Security Features ✅
- Content Security Policy (CSP)
- HTTPS enforcement
- Security headers
- Privacy-compliant design

### Production Security Requirements 📋
- Rate limiting
- Input validation
- SQL injection protection
- XSS protection
- CSRF tokens
- Secure session management

## Backup & Recovery

### Data Backup Strategy
- Daily database backups
- Weekly full system backups
- Point-in-time recovery capability
- Off-site backup storage

### Disaster Recovery
- Multi-region deployment
- Database replication
- Automated failover
- Recovery time objective: 1 hour

## Swiss Compliance

### Data Protection (nFADP/GDPR)
- ✅ Privacy policy in place
- ✅ Data processing transparency
- 📋 Cookie consent management
- 📋 Data subject access rights portal
- 📋 Data retention policies

### Financial Regulations
- 📋 MWST (VAT) calculation (8.1%)
- 📋 Invoice generation
- 📋 Payment processing compliance
- 📋 Financial record keeping

## Support & Maintenance

### Regular Tasks
- Security updates (weekly)
- Dependency updates (monthly)
- Performance audits (monthly)
- Content updates (as needed)

### Emergency Contacts
- Technical support: dev@tofi.ch
- Data protection: datenschutz@tofi.ch
- Business continuity: business@tofi.ch

## Next Phase: Backend Services

When ready to implement the full marketplace:

1. **Microservices Architecture**
   - Authentication service
   - Catalog service
   - Order management service
   - Payment processing service
   - Delivery orchestration service

2. **Infrastructure Scaling**
   - Kubernetes deployment
   - Database clustering
   - Message queues (Kafka/RabbitMQ)
   - API gateway

3. **Integration Points**
   - Stripe for payments
   - TWINT for Swiss payments
   - Uber Direct for delivery
   - Swiss Post APIs
   - Email/SMS providers

---

Last updated: September 2024
Contact: dev@tofi.ch