# POD Website Project - ADJUSTED PLAN (GitHub-First + Iterative)

**Date:** 2026-06-29  
**Current Phase:** GitHub Pages development with faster, larger iterative updates

## Core Principles (Updated)
- **GitHub First:** Complete the initial substantial build on GitHub Pages before switching to Netlify.
- **Bigger Changes:** Move beyond tiny atomic tasks. Make larger, meaningful updates while still deploying regularly.
- **Iterative but Accelerated:** One focused feature/function per update, but with more substantial scope per step.
- **Deploy After Every Change:** Push to GitHub after each meaningful update.
- **Real E-commerce Goal:** Build toward a fully functional site (real payment + POD integration) rather than a demo.
- **Dark Devotion Theme:** All design and product decisions should align with the "Dark Devotion" niche (elegant, melancholic, scholarly, tasteful symbolism).

## Current State
- Repository: https://github.com/BelialRunnerX/belial-digital-pod
- Live on GitHub Pages: https://belialrunnerx.github.io/belial-digital-pod/
- Strong "Dark Devotion" theming applied
- Dynamic products, filtering, search, sorting, cart, checkout summary, loading states, accessibility improvements
- Still using mock Printful integration

## Execution Flow
1. Select next substantial feature/function from backlog
2. Implement (larger scope than before)
3. Test locally
4. Commit + push to GitHub (triggers Pages deploy)
5. Verify live site
6. Log in `progress/deploy-log.md`
7. Update this plan

## Backlog (Prioritized)
- Expand catalog significantly (aim for 25+ legitimately designed products)
- Build real checkout flow with shipping form + validation
- Add order confirmation / thank you experience
- Integrate real Printful API (or strong simulation)
- Add Stripe payment integration (test mode first)
- Product detail pages or enhanced modals
- Testimonials / trust signals (substantial section)
- Email capture + basic marketing features
- Mobile polish + performance optimization
- Admin/order viewing stub (optional)
- Switch to Netlify + connect belialdigital.com (after GitHub build is solid)

## Deployment
- Use `git push origin master` for all updates
- GitHub Pages auto-deploys from `master` branch
- Verify via browser after each push

## Notes
- Self-improvement tools in `dev-tools/` should be used by all agents
- All prompts should reference this plan and the "bigger changes, faster iteration" directive
- Update this document whenever goals or strategy shift

**Last Updated:** 2026-06-29