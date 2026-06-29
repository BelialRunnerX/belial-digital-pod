#!/usr/bin/env node
/**
 * Quick product generator for the POD site.
 * Usage: node dev-tools/generate-product.js "Product Name" "Description" price type
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length < 4) {
  console.log('Usage: node generate-product.js "Name" "Description" price type');
  process.exit(1);
}

const [name, description, price, type] = args;
const id = Date.now();

const newProduct = {
  id,
  name,
  description,
  price: parseFloat(price),
  type,
  inStock: true,
  mockupUrl: `https://picsum.photos/id/${(id % 100) + 10}/300/300`,
  variants: [
    { id: id + 1, name: "Default", price: parseFloat(price) }
  ],
  printfulVariantId: id + 100
};

const productsPath = path.join(__dirname, '../products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
products.push(newProduct);

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log(`Added product: ${name} (ID: ${id})`);