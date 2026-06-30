const fs = require('fs');

const currentProducts = JSON.parse(fs.readFileSync('products.json', 'utf8'));
console.log(`Current catalog: ${currentProducts.length} products`);

const nextId = Math.max(...currentProducts.map(p => p.id)) + 1;

const newProducts = [
  // Apparel additions (5)
  {
    "id": nextId,
    "name": "Shadow Cloak Poncho",
    "price": 65,
    "type": "Apparel",
    "printfulId": "poncho",
    "mockup": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop&sat=-45",
    "description": "Wool-blend poncho with hidden sigil lining and dramatic hood.",
    "design": "Veiled Path"
  },
  {
    "id": nextId + 1,
    "name": "Inkstained Button-Down Shirt",
    "price": 48,
    "type": "Apparel",
    "printfulId": "button-up",
    "mockup": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=600&fit=crop&sat=-30",
    "description": "Premium oxford with subtle repeating quill and ink pattern.",
    "design": "Scholar's Mark"
  },
  {
    "id": nextId + 2,
    "name": "Thorned Leather Jacket",
    "price": 125,
    "type": "Apparel",
    "printfulId": "leather-jacket",
    "mockup": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop&sat=-50",
    "description": "Vintage leather with embossed thorn and rose detailing.",
    "design": "Crown of Thorns"
  },
  {
    "id": nextId + 3,
    "name": "Midnight Lace Blouse",
    "price": 42,
    "type": "Apparel",
    "printfulId": "blouse",
    "mockup": "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=600&fit=crop&sat=-25",
    "description": "Delicate lace blouse with tonal black-on-black embroidery.",
    "design": "Lace Requiem"
  },
  {
    "id": nextId + 4,
    "name": "Devotion Ribbed Turtleneck",
    "price": 39,
    "type": "Apparel",
    "printfulId": "turtleneck",
    "mockup": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop&sat=-35",
    "description": "Fine knit turtleneck with chest sigil accent.",
    "design": "Silent Oath"
  },

  // Jewelry (new category, 4)
  {
    "id": nextId + 5,
    "name": "Crescent Sigil Necklace",
    "price": 28,
    "type": "Jewelry",
    "printfulId": "necklace",
    "mockup": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=600&h=600&fit=crop&sat=-20",
    "description": "Sterling silver crescent with engraved arcane symbol.",
    "design": "Lunar Pact"
  },
  {
    "id": nextId + 6,
    "name": "Raven Skull Pendant",
    "price": 34,
    "type": "Jewelry",
    "printfulId": "pendant",
    "mockup": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=600&h=600&fit=crop&sat=-30",
    "description": "Oxidized brass raven skull on black cord.",
    "design": "Omen Keeper"
  },
  {
    "id": nextId + 7,
    "name": "Bloodstone Signet Ring",
    "price": 45,
    "type": "Jewelry",
    "printfulId": "ring",
    "mockup": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=600&h=600&fit=crop&sat=-15",
    "description": "Antique-style signet with genuine bloodstone and crest engraving.",
    "design": "Bloodline Seal"
  },
  {
    "id": nextId + 8,
    "name": "Thorned Cuff Bracelet",
    "price": 32,
    "type": "Jewelry",
    "printfulId": "bracelet",
    "mockup": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=600&h=600&fit=crop&sat=-25",
    "description": "Twisted sterling cuff with delicate thorn motif.",
    "design": "Eternal Bind"
  },

  // Home & Decor (4)
  {
    "id": nextId + 9,
    "name": "Obsidian Bookends",
    "price": 48,
    "type": "Home",
    "printfulId": "bookends",
    "mockup": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop&sat=-40",
    "description": "Pair of polished obsidian bookends with subtle rune etchings.",
    "design": "Foundation Stones"
  },
  {
    "id": nextId + 10,
    "name": "Wilted Rose Velvet Pillow",
    "price": 36,
    "type": "Home",
    "printfulId": "pillow",
    "mockup": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&sat=-30",
    "description": "Luxury velvet pillow with embroidered wilted rose and text.",
    "design": "Mourning Bloom"
  },
  {
    "id": nextId + 11,
    "name": "Ritual Black Candle Set",
    "price": 29,
    "type": "Home",
    "printfulId": "candles",
    "mockup": "https://images.unsplash.com/photo-1602874801006-e1c2a3e4e8e5?w=600&h=600&fit=crop&sat=-35",
    "description": "Set of 3 hand-poured black beeswax candles with gold foil labels.",
    "design": "Vigil Flames"
  },
  {
    "id": nextId + 12,
    "name": "Gothic Lantern Lamp",
    "price": 55,
    "type": "Home",
    "printfulId": "lantern",
    "mockup": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop&sat=-40",
    "description": "Cast iron lantern-style lamp with stained glass panels.",
    "design": "Eternal Light"
  },

  // Stationery additions (3)
  {
    "id": nextId + 13,
    "name": "Leather Grimoire Journal",
    "price": 42,
    "type": "Stationery",
    "printfulId": "grimoire",
    "mockup": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop&sat=-20",
    "description": "Hand-bound full-grain leather grimoire with 300 pages and lock clasp.",
    "design": "Arcane Codex"
  },
  {
    "id": nextId + 14,
    "name": "Fountain Pen & Ink Set",
    "price": 38,
    "type": "Stationery",
    "printfulId": "pen-set",
    "mockup": "https://images.unsplash.com/photo-1583485088034-5f4f3f4f3e3e?w=600&h=600&fit=crop&sat=-15",
    "description": "Vintage-style fountain pen with custom ink in obsidian black.",
    "design": "Sacred Script"
  },
  {
    "id": nextId + 15,
    "name": "Embossed Wax Seal Kit",
    "price": 24,
    "type": "Stationery",
    "printfulId": "wax-seal",
    "mockup": "https://images.unsplash.com/photo-1515377905703-c4788e7e6b2a?w=600&h=600&fit=crop&sat=-25",
    "description": "Brass seal stamp with custom sigil and sealing wax sticks.",
    "design": "Pact Sealer"
  },

  // Accessories additions (3)
  {
    "id": nextId + 16,
    "name": "Waxed Canvas Duffle Bag",
    "price": 78,
    "type": "Accessories",
    "printfulId": "duffle",
    "mockup": "https://images.unsplash.com/photo-1553062407-42d2429f32f4?w=600&h=600&fit=crop&sat=-35",
    "description": "Rugged waxed canvas duffle with leather handles and sigil patch.",
    "design": "Pilgrim's Burden"
  },
  {
    "id": nextId + 17,
    "name": "Velvet Evening Clutch",
    "price": 29,
    "type": "Accessories",
    "printfulId": "clutch",
    "mockup": "https://images.unsplash.com/photo-1553062407-42d2429f32f4?w=600&h=600&fit=crop&sat=-20",
    "description": "Black velvet clutch with antique brass frame and chain.",
    "design": "Midnight Affair"
  },
  {
    "id": nextId + 18,
    "name": "Occult Leather Wallet",
    "price": 35,
    "type": "Accessories",
    "printfulId": "wallet",
    "mockup": "https://images.unsplash.com/photo-1553062407-42d2429f32f4?w=600&h=600&fit=crop&sat=-40",
    "description": "Full-grain bifold wallet with hidden pocket and embossed runes.",
    "design": "Hidden Truths"
  },

  // Drinkware additions (2)
  {
    "id": nextId + 19,
    "name": "Blood Oath Chalice",
    "price": 32,
    "type": "Drinkware",
    "printfulId": "chalice",
    "mockup": "https://images.unsplash.com/photo-1514228742587-7102e5e5c2a7?w=600&h=600&fit=crop&sat=-30",
    "description": "Pewter chalice with engraved blood oath inscription.",
    "design": "Sacred Vessel"
  },
  {
    "id": nextId + 20,
    "name": "Absinthe Ritual Glass Set",
    "price": 27,
    "type": "Drinkware",
    "printfulId": "absinthe-glass",
    "mockup": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=600&fit=crop&sat=-25",
    "description": "Set of 2 hand-blown absinthe glasses with spoon rests.",
    "design": "Green Fairy"
  },

  // Wall Art additions (2)
  {
    "id": nextId + 21,
    "name": "Gothic Spire Etching",
    "price": 31,
    "type": "Wall Art",
    "printfulId": "etching",
    "mockup": "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=600&fit=crop&sat=-35",
    "description": "Limited edition fine art etching of moonlit cathedral spires.",
    "design": "Night Cathedral"
  },
  {
    "id": nextId + 22,
    "name": "Devotional Icon Triptych",
    "price": 49,
    "type": "Wall Art",
    "printfulId": "triptych",
    "mockup": "https://images.unsplash.com/photo-1497032628192-86f99a2a4153?w=600&h=600&fit=crop&sat=-20",
    "description": "Three-panel canvas print of stylized devotional icons.",
    "design": "Saints & Sinners"
  }
];

const expanded = [...currentProducts, ...newProducts];
fs.writeFileSync('products.json', JSON.stringify(expanded, null, 2));

console.log(`Expanded catalog to ${expanded.length} products.`);
console.log('New types added:', [...new Set(newProducts.map(p => p.type))]);
console.log('Total by type:', Object.fromEntries(Object.entries(
  expanded.reduce((acc, p) => { acc[p.type] = (acc[p.type]||0)+1; return acc; }, {})
).sort((a,b)=>b[1]-a[1])));