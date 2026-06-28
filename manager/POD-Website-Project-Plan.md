# POD Website Project - Manager Plan (Left/Right Brain Coordination)

**Project Goal:** Build a zero-cost Print-on-Demand (POD) website with site structure/frontend + product design generation + Printful integration. Use parallel workstreams with 2 agent pairs in Left/Right Brain style. Maximize speed, zero-cost (static site, free tiers, local tools).

**Date:** 2026-06-28
**Workspace:** /root/pod-website-project

## Workstream Breakdown (Parallel)

### Pair 1: Site Structure & Frontend (frontend-pair/)
- **Left Brain Agent:** Site architecture, HTML structure, navigation, responsive layout, product catalog skeleton.
- **Right Brain Agent:** Frontend polish - CSS/JS interactions, cart functionality, mobile optimization, accessibility.
- **Shared:** Use vanilla HTML/CSS/JS or minimal static generator for zero-cost (GitHub Pages / Netlify free). Progress in frontend-pair/left-progress.md and right-progress.md.

### Pair 2: Product Design Generation & Printful Integration (design-printful-pair/)
- **Left Brain Agent:** Product design generation (mockups, AI-assisted or free tools), catalog of POD products (t-shirts, mugs, etc.), design upload simulation.
- **Right Brain Agent:** Printful API integration (mock or real free-tier), order flow, webhook simulation, product sync.
- **Shared:** Zero-cost: Use Printful's free developer account/mock API, static JS for cart-to-order. Research via browser if needed. Progress in design-printful-pair/left-progress.md and right-progress.md.

## Coordination Rules (Left/Right Brain Execution)
- Manager creates dirs and progress files.
- Pairs work in parallel, cross-critique via shared notes.
- Use self-improvement-manager for reviews after milestones.
- Use browser-session-manager for any Printful dashboard or research sessions.
- Report consolidated progress every ~30min simulated or after key milestones.
- All zero-cost: No paid APIs, use local files, free hosting plans, image placeholders or FAL if active but prefer free.

## Progress Tracking
- Consolidated reports in /root/pod-website-project/progress/consolidated-*.md
- Individual agent files in pair dirs.
- Final deliverable: Working static POD site in /root/pod-website-project/dist/ or root with index.html, ready for free deploy.

## Next Steps (Immediate)
1. Initialize progress files for all 4 agents + manager.
2. Frontend pair starts with basic index.html structure.
3. Design pair researches Printful free integration + generates initial designs (use tools).
4. Regular sync via this plan updates.

**Self-Improvement Note:** Track any capability gaps (e.g., API keys, hosting) and update autonomy-upgrades.md or new skills.