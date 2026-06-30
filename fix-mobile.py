import re

with open('/root/pod-website-project/index.html', 'r') as f:
    content = f.read()

# Improve pod-grid mobile and add touch CSS
old_grid = '''        @media (max-width: 640px) {
            .pod-grid {
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                gap: 1.25rem;
            }
        }'''
new_grid = '''        @media (max-width: 640px) {
            .pod-grid {
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                gap: 1rem;
            }
        }

        /* Improved mobile touch targets across site (product grid, cart, checkout, modals) */
        @media (max-width: 640px) {
            button, [onclick], .btn-elegant, .step-pill {
                min-height: 44px !important;
            }
            .product-card button {
                padding-top: 0.75rem !important;
                padding-bottom: 0.75rem !important;
            }
        }'''
if old_grid in content:
    content = content.replace(old_grid, new_grid)
    print('Grid and CSS updated')

# Fix qty buttons in cart JS (use regex for robustness)
old_qty_pattern = r'(<button onclick=\\"changeCartQty\(\$\{index\}, -1\)" class=\\")[^"]+("> - </button>)'
# Simple string replace for the known snippet
old_qty = '''                                <button onclick="changeCartQty(${index}, -1)" class="w-6 h-6 border border-zinc-700 flex items-center justify-center rounded-full active:bg-zinc-800">-</button>
                                <span class="font-mono tabular-nums">${item.qty || 1}</span>
                                <button onclick="changeCartQty(${index}, 1)" class="w-6 h-6 border border-zinc-700 flex items-center justify-center rounded-full active:bg-zinc-800">+</button>'''
new_qty = '''                                <button onclick="changeCartQty(${index}, -1)" class="w-9 h-9 min-w-[44px] min-h-[44px] border border-zinc-700 flex items-center justify-center rounded-full active:bg-zinc-800 text-lg font-light">-</button>
                                <span class="font-mono tabular-nums px-2">${item.qty || 1}</span>
                                <button onclick="changeCartQty(${index}, 1)" class="w-9 h-9 min-w-[44px] min-h-[44px] border border-zinc-700 flex items-center justify-center rounded-full active:bg-zinc-800 text-lg font-light">+</button>'''
if old_qty in content:
    content = content.replace(old_qty, new_qty)
    print('Cart qty buttons updated')
else:
    print('Qty buttons not matched exactly, trying alternative...')
    # fallback broader
    content = re.sub(r'w-6 h-6 border border-zinc-700 flex items-center justify-center rounded-full active:bg-zinc-800', 'w-9 h-9 min-w-[44px] min-h-[44px] border border-zinc-700 flex items-center justify-center rounded-full active:bg-zinc-800 text-lg font-light', content)

# Improve info button
old_info = '''                            <button onclick="showProductModal(${product.id}); event.stopImmediatePropagation()" 
                                    class="px-4 border border-zinc-700 hover:bg-zinc-800 rounded-3xl transition-colors">
                                <i class="fa-solid fa-info text-xs"></i>
                            </button>'''
new_info = '''                            <button onclick="showProductModal(${product.id}); event.stopImmediatePropagation()" 
                                    class="px-4 py-3 min-w-[44px] min-h-[44px] border border-zinc-700 hover:bg-zinc-800 rounded-3xl transition-colors flex items-center justify-center">
                                <i class="fa-solid fa-info text-sm"></i>
                            </button>'''
if old_info in content:
    content = content.replace(old_info, new_info)
    print('Info button updated')

# Improve remove button touch target
content = content.replace('class="text-red-400 text-xs mt-1 hover:underline"', 'class="text-red-400 text-sm mt-1 hover:underline px-2 py-1 min-h-[44px] flex items-center"')

# Also improve other small buttons like close icons by adding min size via CSS already done

with open('/root/pod-website-project/index.html', 'w') as f:
    f.write(content)
print('All mobile responsiveness and touch target improvements applied successfully')