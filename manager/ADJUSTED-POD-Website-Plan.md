# POD Website Project - ADJUSTED PLAN (Deploy-First Iterative Strategy)

**Date:** 2026-06-28
**Adjustment Reason:** Shift from large phased development to "deploy current working version first, then one feature/function at a time with immediate deployment after each change." This ensures live site is always up-to-date, enables rapid feedback, and follows continuous deployment best practices while maintaining zero-cost static hosting.

**Current Working Version State:** Fully functional static POD site (index.html) with:
- Hero, navigation, 6 products grid
- LocalStorage cart with add/remove/quantity
- Printful mock connect + checkout simulation (multi-step modal)
- Responsive Tailwind UI, modals, product detail views
- Zero real backend; all client-side JS + mock data

**New Core Principles:**
- **Deploy First:** Get v1 live immediately on surge.sh / GitHub Pages / Netlify.
- **One Change at a Time:** Each update = exactly ONE discrete function or feature (e.g., "add search filter" or "expand to 7 products").
- **Deploy After Every Change:** After implementing + testing the single change, immediately deploy to live site.
- **Atomic + Verifiable:** Each step <30min, includes manual verification (open live URL, test the feature).
- Maintain zero-cost, static-only.
- Track every deploy in progress/ and a new deploy-log.md

**Updated Execution Flow:**
1. **Step 0 (Immediate):** Deploy CURRENT working version to live site (pod-zero-cost-pod2026.surge.sh or equivalent). Verify live.
2. **Iterative Loop (Repeat):**
   - Select ONE next feature/function from backlog (prioritized list below, starting with highest impact).
   - Implement the single change (edit only relevant files, keep changes minimal).
   - Test locally (browser, no console errors, functional check).
   - Deploy updated version to live site.
   - Log the deploy + verification in progress/deploy-log.md
   - Update this plan with "Deployed: [feature]" note.
3. **Backlog (Prioritized for one-at-a-time):**
   - Deploy current (DONE after Step 0)
   - Add dynamic product loading from products.json (expand catalog gradually, 1-2 products per update)
   - Add search + category filters
   - Enhance cart (persistent + totals + animations)
   - Upgrade checkout to multi-step with validation
   - Add testimonials / trust badges (one section per update)
   - Add product detail modal with tabs
   - Implement Printful connect simulation persistence
   - Expand catalog to 10, then 15, then 20+ products (batched 2-3 at a time)
   - Add FAQ, urgency indicators, email capture (one each)
   - Accessibility / mobile polish items
   - Deploy prep docs (README-deploy.md) as a dedicated update
   - Any CRO or analytics features as single additions

**Deployment Commands (Zero-Cost):**
- Use existing surge: `/root/deploy-surge.exp` (targets pod-zero-cost-pod2026.surge.sh)
- Alternative: `surge /root/pod-website-project pod-zero-cost-pod2026.surge.sh`
- Or GitHub Pages after `git init && push`
- Always verify: `curl -I https://pod-zero-cost-pod2026.surge.sh` or open in browser.

**Files to Maintain:**
- This ADJUSTED-POD-Website-Plan.md (master reference)
- progress/deploy-log.md (every deploy entry)
- Existing pair progress files updated after each change
- index.html + supporting JSON/JS in design-printful-pair/

**Status After Adjustment:** Plan updated. Execution begins with immediate deployment of current working version.

**Next Action (Execution Start):** Run deploy for current version, confirm live site works, then proceed to first incremental update.