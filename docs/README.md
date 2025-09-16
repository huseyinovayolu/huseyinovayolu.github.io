# TOFI - Swiss Flower Marketplace

## Overview

TOFI is a Swiss flower and gift marketplace platform designed for Deutschschweiz, providing premium flower delivery services with same-day delivery capabilities in major Swiss cities.

## Features

### Core Marketplace Features
- ✅ Product catalog (flowers, gifts, plants)
- ✅ Swiss localization (de-CH)
- ✅ Responsive, accessible design (WCAG 2.2 AA compliant)
- ✅ Privacy-compliant design (nFADP/GDPR aligned)
- 🚧 Shopping cart functionality
- 🚧 Checkout with TWINT + card payments
- 🚧 Order management system
- 🚧 Delivery orchestration
- 📋 Merchant portal
- 📋 Admin dashboard

### Technical Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- CSS Custom Properties (design system preserved from original)
- Progressive enhancement approach

**Infrastructure (Planned):**
- Monorepo with Turborepo
- PostgreSQL with PostGIS for geodata
- Redis for caching/sessions
- OpenSearch for product search
- GCP (europe-west6 Zürich) hosting

### Swiss Compliance

**Data Protection:**
- nFADP (Swiss Federal Data Protection Act) compliant
- GDPR aligned for EU customers
- Comprehensive privacy policy
- Cookie consent management
- Data subject access rights (DSAR) portal

**Financial:**
- CHF currency
- Swiss VAT (MWST) handling (8.1% standard rate)
- TWINT payment integration
- Swiss address validation

## Architecture

### Monorepo Structure
```
├── apps/
│   └── web/           # Next.js frontend application
├── packages/
│   ├── ui/           # Shared UI components
│   └── types/        # Shared TypeScript types
├── services/         # Microservices (planned)
│   ├── auth/
│   ├── catalog/
│   ├── orders/
│   └── payments/
├── infra/           # Infrastructure as Code
└── docs/            # Documentation
```

### Design Principles

1. **Accessibility First**: WCAG 2.2 AA compliance, keyboard navigation, screen reader support
2. **Swiss Quality**: Minimalist design inspired by Swiss design principles
3. **Performance**: Sub-250ms API response times, optimized for mobile
4. **Security**: Security-first approach with CSP, HTTPS, data encryption
5. **Privacy**: Data minimization, consent management, transparent processing

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 8+

### Development Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run type checking
pnpm type-check

# Run linting
pnpm lint
```

### Environment Variables

Create `.env.local` in `apps/web/`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add other environment variables as needed
```

## Roadmap

### Phase 1: MVP Foundation ✅
- [x] Basic monorepo setup
- [x] Next.js application with Swiss localization
- [x] Accessible design system
- [x] Product catalog pages
- [x] Privacy compliance pages

### Phase 2: Core E-commerce 🚧
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Checkout flow
- [ ] Payment integration (Stripe + TWINT)
- [ ] Order management

### Phase 3: Delivery & Logistics 📋
- [ ] Postcode validation
- [ ] Delivery slot management
- [ ] Courier integration (Uber Direct)
- [ ] Order tracking
- [ ] Merchant portal

### Phase 4: Advanced Features 📋
- [ ] Search functionality
- [ ] Product recommendations
- [ ] Loyalty program
- [ ] Multi-language support (en fallback)
- [ ] Mobile app (PWA)

## Contributing

1. Follow the existing code style and accessibility patterns
2. Ensure all changes maintain WCAG 2.2 AA compliance
3. Add appropriate TypeScript types
4. Test on multiple devices and browsers
5. Update documentation

## License

Proprietary - All rights reserved to TOFI AG

---

For questions or support, contact: dev@tofi.ch