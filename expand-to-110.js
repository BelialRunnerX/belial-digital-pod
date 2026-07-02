const fs = require('fs');

const currentProducts = JSON.parse(fs.readFileSync('products.json', 'utf8'));
console.log(`Current catalog: ${currentProducts.length} products`);

let nextId = Math.max(...currentProducts.map(p => p.id)) + 1;

const newProducts = [
  // Apparel additions (6) - variety
  {
    "id": nextId++,
    "name": "Obsidian Pleated Skirt",
    "price": 45,
    "type": "Apparel",
    "printfulId": "pleated-skirt",
    "mockup": "https://images.unsplash.com/photo-1583496661160-fb40334dc7e5?w=600&h=600&fit=crop&sat=-40",
    "description": "High-waisted pleated skirt with hidden sigil print lining.",
    "design": "Veiled Pleats"
  },
  {
    "id": nextId++,
    "name": "Crimson Velvet Blazer",
    "price": 95,
    "type": "Apparel",
    "printfulId": "blazer",
    "mockup": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop&sat=-35",
    "description": "Luxurious velvet blazer with embroidered crest.",
    "design": "Bloodline Crest"
  },
  {
    "id": nextId++,
    "name": "Midnight Cargo Pants",
    "price": 58,
    "type": "Apparel",
    "printfulId": "cargo-pants",
    "mockup": "https://images.unsplash.com/photo-1556821840-3a63f956f4c8?w=600&h=600&fit=crop&sat=-45",
    "description": "Relaxed cargo with subtle rune-stitched pockets.",
    "design": "Arcane Utility"
  },
  {
    "id": nextId++,
    "name": "Lace-Trimmed Corset Top",
    "price": 52,
    "type": "Apparel",
    "printfulId": "corset",
    "mockup": "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=600&fit=crop&sat=-30",
    "description": "Structured corset with delicate lace and sigil accents.",
    "design": "Eternal Corset"
  },
  {
    "id": nextId++,
    "name": "Shadow Wool Overcoat",
    "price": 135,
    "type": "Apparel",
    "printfulId": "overcoat",
    "mockup": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop&sat=-50",
    "description": "Heavy wool overcoat with dramatic collar and inner lining print.",
    "design": "Wanderer's Mantle"
  },
  {
    "id": nextId++,
    "name": "Thorn Embroidered Shorts",
    "price": 38,
    "type": "Apparel",
    "printfulId": "shorts",
    "mockup": "https://images.unsplash.com/photo-1591195853828-11db59ace42a?w=600&h=600&fit=crop&sat=-25",
    "description": "Relaxed shorts with intricate thorn embroidery.",
    "design": "Crown of Thorns"
  },

  // Footwear (4) - new variety
  {
    "id": nextId++,
    "name": "Raven Leather Chelsea Boots",
    "price": 125,
    "type": "Footwear",
    "printfulId": "chelsea-boots",
    "mockup": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=600&fit=crop&sat=-40",
    "description": "Premium leather Chelsea boots with subtle sole engraving.",
    "design": "Night Stalker"
  },
  {
    "id": nextId++,
    "name": "Obsidian Canvas Sneakers",
    "price": 68,
    "type": "Footwear",
    "printfulId": "sneakers",
    "mockup": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop&sat=-45",
    "description": "Low-top canvas sneakers with all-over sigil print.",
    "design": "Void Walker"
  },
  {
    "id": nextId++,
    "name": "Crimson Satin Slippers",
    "price": 42,
    "type": "Footwear",
    "printfulId": "slippers",
    "mockup": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&h=600&fit=crop&sat=-30",
    "description": "Luxury satin house slippers with embroidered rose.",
    "design": "Velvet Oath"
  },
  {
    "id": nextId++,
    "name": "Waxed Canvas Combat Boots",
    "price": 98,
    "type": "Footwear",
    "printfulId": "combat-boots",
    "mockup": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=600&fit=crop&sat=-35",
    "description": "Heavy-duty combat boots with distressed finish.",
    "design": "Iron Pact"
  },

  // Home & Living additions (5)
  {
    "id": nextId++,
    "name": "Celestial Throw Pillow Set",
    "price": 48,
    "type": "Home",
    "printfulId": "pillow-set",
    "mockup": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop&sat=-40",
    "description": "Set of 2 velvet pillows with astral map embroidery.",
    "design": "Stellar Lament"
  },
  {
    "id": nextId++,
    "name": "Obsidian Ceramic Coaster Set",
    "price": 22,
    "type": "Home",
    "printfulId": "coasters",
    "mockup": "https://images.unsplash.com/photo-1514228742587-7102e5e5c2a7?w=600&h=600&fit=crop&sat=-25",
    "description": "Set of 4 matte black coasters with gold sigil inlay.",
    "design": "Ritual Marks"
  },
  {
    "id": nextId++,
    "name": "Midnight Velvet Curtains",
    "price": 78,
    "type": "Home",
    "printfulId": "curtains",
    "mockup": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=600&fit=crop&sat=-50",
    "description": "Pair of heavy velvet curtains with subtle repeating pattern.",
    "design": "Veil of Night"
  },
  {
    "id": nextId++,
    "name": "Raven Wing Wall Clock",
    "price": 35,
    "type": "Home",
    "printfulId": "wall-clock",
    "mockup": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600&h=600&fit=crop&sat=-30",
    "description": "Minimalist clock with raven silhouette hands.",
    "design": "Timeless Omen"
  },
  {
    "id": nextId++,
    "name": "Sable Scented Candle Set",
    "price": 32,
    "type": "Home",
    "printfulId": "candle-set",
    "mockup": "https://images.unsplash.com/photo-1602874801006-e8f4f8d2e8f5?w=600&h=600&fit=crop&sat=-20",
    "description": "Set of 3 hand-poured soy candles in matte black vessels.",
    "design": "Sacred Flame"
  },

  // Tech Accessories (4)
  {
    "id": nextId++,
    "name": "Laptop Sleeve - Arcane Codex",
    "price": 29,
    "type": "Tech",
    "printfulId": "laptop-sleeve",
    "mockup": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=600&fit=crop&sat=-40",
    "description": "Neoprene sleeve with ancient manuscript print.",
    "design": "Forbidden Tome"
  },
  {
    "id": nextId++,
    "name": "Obsidian Mousepad",
    "price": 18,
    "type": "Tech",
    "printfulId": "mousepad",
    "mockup": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&sat=-35",
    "description": "Large stitched-edge mousepad with full sigil pattern.",
    "design": "Void Desk"
  },
  {
    "id": nextId++,
    "name": "Crimson USB Drive Set",
    "price": 24,
    "type": "Tech",
    "printfulId": "usb-set",
    "mockup": "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=600&h=600&fit=crop&sat=-25",
    "description": "Set of 3 USB drives with engraved caps.",
    "design": "Data Pact"
  },
  {
    "id": nextId++,
    "name": "Shadow Phone Wallet",
    "price": 19,
    "type": "Phone Accessories",
    "printfulId": "phone-wallet",
    "mockup": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=600&fit=crop&sat=-45",
    "description": "Magnetic wallet attachment with card slots and sigil.",
    "design": "Night Ledger"
  },

  // More Accessories & Jewelry (6)
  {
    "id": nextId++,
    "name": "Wax Seal Signet Stamp",
    "price": 27,
    "type": "Accessories",
    "printfulId": "wax-seal",
    "mockup": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=600&h=600&fit=crop&sat=-20",
    "description": "Brass stamp with custom family crest design.",
    "design": "Blood Seal"
  },
  {
    "id": nextId++,
    "name": "Onyx Signet Ring Duo",
    "price": 52,
    "type": "Jewelry",
    "printfulId": "ring-set",
    "mockup": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=600&h=600&fit=crop&sat=-15",
    "description": "Pair of onyx signet rings with contrasting engravings.",
    "design": "Twin Oaths"
  },
  {
    "id": nextId++,
    "name": "Lament Chain Choker",
    "price": 31,
    "type": "Jewelry",
    "printfulId": "choker",
    "mockup": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=600&h=600&fit=crop&sat=-30",
    "description": "Delicate chain choker with dangling obsidian tear.",
    "design": "Sorrow's Kiss"
  },
  {
    "id": nextId++,
    "name": "Raven Feather Earrings",
    "price": 23,
    "type": "Jewelry",
    "printfulId": "earrings",
    "mockup": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=600&h=600&fit=crop&sat=-25",
    "description": "Sterling silver earrings with carved raven feather detail.",
    "design": "Messenger's Mark"
  },
  {
    "id": nextId++,
    "name": "Embroidered Patch Set - Occult Icons",
    "price": 16,
    "type": "Accessories",
    "printfulId": "patch-set",
    "mockup": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=600&h=600&fit=crop&sat=-35",
    "description": "Iron-on patch set of 6 occult symbols.",
    "design": "Arcane Patches"
  },
  {
    "id": nextId++,
    "name": "Velvet Choker with Cross",
    "price": 18,
    "type": "Jewelry",
    "printfulId": "velvet-choker",
    "mockup": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=600&h=600&fit=crop&sat=-20",
    "description": "Black velvet ribbon choker with antique cross pendant.",
    "design": "Faith's Shadow"
  },

  // Stationery & Art expansions (3)
  {
    "id": nextId++,
    "name": "Leather Grimoire Journal",
    "price": 34,
    "type": "Stationery",
    "printfulId": "grimoire",
    "mockup": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop&sat=-30",
    "description": "Hand-bound leather journal with lock and key, 300 pages.",
    "design": "Secret Keep"
  },
  {
    "id": nextId++,
    "name": "Gothic Cathedral Print Set",
    "price": 29,
    "type": "Wall Art",
    "printfulId": "cathedral-set",
    "mockup": "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=600&fit=crop&sat=-40",
    "description": "Triptych fine art prints of abandoned cathedrals.",
    "design": "Sacred Ruins"
  },
  {
    "id": nextId++,
    "name": "Ink Blot Tarot Card Deck",
    "price": 28,
    "type": "Stationery",
    "printfulId": "tarot-deck",
    "mockup": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop&sat=-25",
    "description": "22-card major arcana deck with original ink illustrations.",
    "design": "Ink Divination"
  }
];

const updatedProducts = [...currentProducts, ...newProducts];
fs.writeFileSync('products.json', JSON.stringify(updatedProducts, null, 2));
console.log(`Expanded catalog to ${updatedProducts.length} products.`);
console.log('New types added:', [...new Set(newProducts.map(p => p.type))].sort());