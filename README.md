# ZeroCost POD • Print on Demand Store

A lightweight, fully static Print-on-Demand (POD) e-commerce site built with vanilla HTML, Tailwind CSS, and JavaScript. Features product browsing, cart functionality, and mock Printful integration.

**Live Demo:** https://pod-zero-cost-pod2026.GitHub Pages.sh

## Features
- Responsive product grid with hover effects
- Shopping cart with localStorage persistence
- Product modals with mock Printful design previews
- Dynamic products loaded from `products.json`
- Dark elegant theme optimized for conversion
- Mobile-friendly design

## Project Structure
```
pod-website-project/
├── index.html          # Main storefront
├── products.json       # Product catalog data
├── dev-tools/          # Development helper scripts
│   ├── README.md
│   └── generate-product.js
├── design-printful-pair/  # Agent workspace (design mocks)
├── frontend-pair/         # Agent workspace (UI work)
├── manager/               # Project planning docs
└── progress/              # Iteration logs
```

## Setup (Local Development)

1. Clone the repository:
   ```bash
   git clone https://github.com/BelialRunnerX/belial-digital-pod.git
   cd belial-digital-pod
   ```

2. Serve the site locally (no build step required):
   - Using Python:
     ```bash
     python3 -m http.server 8080
     ```
   - Or with Node (if `npx` available):
     ```bash
     npx serve .
     ```
   - Or simply open `index.html` in a browser.

3. (Optional) Generate new products:
   ```bash
   node dev-tools/generate-product.js "New Hoodie" "Premium POD hoodie" 39.99 apparel
   ```

## Deployment

This is a static site. Recommended hosting:

### GitHub Pages.sh (current method)
1. Install GitHub Pages:
   ```bash
   npm install -g GitHub Pages
   ```
2. Deploy:
   ```bash
   GitHub Pages . your-subdomain.GitHub Pages.sh
   ```
   (See `progress/deploy-log.md` for current live subdomain)

### Alternatives
- **GitHub Pages**: Enable in repo settings, point to root.
- **Netlify / Vercel**: Drag-and-drop `index.html` + `products.json` or connect Git repo.
- **Cloudflare Pages**: Free static hosting with custom domain support.

After any change:
- Test locally
- Commit
- Redeploy (single-feature iterations preferred)

## Development Workflow
- Follow "one small feature at a time" approach (documented in manager/ and progress/)
- Use `dev-tools/` for helpers
- Update `products.json` manually or via generator script
- Always verify cart, modals, and responsiveness before deploy

## Tech Stack
- HTML5 + CSS (Tailwind via CDN)
- Vanilla JavaScript
- Font Awesome icons
- No backend / framework dependencies

## Contributing / Notes
This project was built iteratively. All planning and progress is tracked in the `manager/` and `progress/` directories for transparency.

---

*Maintained as part of the Belial autonomous agent workflow.*