// Printful Integration Mock (Right Brain) - Phase 1 Expanded
// Zero-cost simulation of Printful API for static deployment
// In production: replace with real fetch('https://api.printful.com/...') + auth header

async function getProducts() {
  const res = await fetch('./products.json');
  const data = await res.json();
  return data.products;
}

async function getProduct(id) {
  const prods = await getProducts();
  return prods.find(p => p.id == id);
}

function syncCatalog() {
  const ts = new Date().toISOString();
  localStorage.setItem('lastSync', ts);
  return { timestamp: ts, count: 20, status: 'success' };
}

async function createOrder(cartItems) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const order = {
    order_id: "PF-" + Date.now(),
    status: "processing",
    printful_response: { mock: true, fulfillment_center: "US-WEST" },
    items: cartItems,
    total: total,
    created_at: new Date().toISOString()
  };
  console.log('%c[Printful] Order created (simulated):', 'color:#22c55e', order);
  return order;
}

// Expose on window for console testing and index.html integration
window.PrintfulMock = { getProducts, getProduct, syncCatalog, createOrder };

// Also keep export for module usage if needed
export const PrintfulMock = { getProducts, getProduct, syncCatalog, createOrder };

// Usage in index.html: window.PrintfulMock.getProducts().then(...) etc.