# POD Website Development Tools

This folder contains helper scripts and tools to accelerate development while maintaining the iterative, one-feature-at-a-time approach.

## Current Tools

### `generate-product.js`
Node.js script to generate a new product object in the correct format for `products.json`.

**Usage:**
```bash
node dev-tools/generate-product.js "Product Name" "Description here" 29.99 apparel
```

## Usage Notes
- Run tools from the project root.
- All tools support fast, focused iterations.
- No external dependencies beyond Node.js for the generator.

Last updated: 2026-06-29