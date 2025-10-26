import React, { useMemo, useState } from 'react';
import { Filter, X } from 'lucide-react';

const sampleProducts = [
  {
    id: 'ua-001',
    name: 'Oversized Classic Tee',
    price: 899,
    category: 'Oversized',
    color: 'Black',
    sizes: ['S', 'M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'ua-002',
    name: 'Minimal Logo Tee',
    price: 799,
    category: 'Minimal',
    color: 'Sage',
    sizes: ['M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'ua-003',
    name: 'Graphic Street Tee',
    price: 999,
    category: 'Graphic',
    color: 'White',
    sizes: ['S', 'M', 'L'],
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'ua-004',
    name: 'Olive Terrain Tee',
    price: 899,
    category: 'Streetwear',
    color: 'Olive',
    sizes: ['M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1520975922219-4d8ec6f1d6e2?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'ua-005',
    name: 'Beige Everyday Tee',
    price: 749,
    category: 'Minimal',
    color: 'Beige',
    sizes: ['S', 'M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1400&auto=format&fit=crop',
  },
];

const FilterBadge = ({ label, onRemove }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs">
    {label}
    <button onClick={onRemove} className="hover:text-black" aria-label={`Remove ${label}`}>
      <X size={14} />
    </button>
  </span>
);

const ProductGrid = ({ onAddToCart }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [size, setSize] = useState('All');
  const [price, setPrice] = useState(2000);
  const [openFilters, setOpenFilters] = useState(false);

  const products = useMemo(() => {
    return sampleProducts
      .filter((p) => (category === 'All' ? true : p.category === category))
      .filter((p) => (size === 'All' ? true : p.sizes.includes(size)))
      .filter((p) => p.price <= price)
      .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
  }, [category, size, price, query]);

  const activeFilters = [
    category !== 'All' && `Category: ${category}`,
    size !== 'All' && `Size: ${size}`,
    price < 2000 && `Below ₹${price}`,
    query && `Search: ${query}`,
  ].filter(Boolean);

  return (
    <section id="shop" className="max-w-6xl mx-auto px-4 py-14">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-black">Shop the drop</h2>
        <button
          onClick={() => setOpenFilters((o) => !o)}
          className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300"
        >
          <Filter size={16} /> Filters
        </button>
      </div>

      <div className="grid md:grid-cols-[260px_1fr] gap-10">
        <aside className={`space-y-6 ${openFilters ? 'block' : 'hidden md:block'}`}>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Search</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find tees..."
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Category</label>
            <div className="flex flex-wrap gap-2">
              {['All', 'Oversized', 'Graphic', 'Minimal', 'Streetwear'].map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-1.5 rounded-full border text-sm ${
                    category === c ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Size</label>
            <div className="flex flex-wrap gap-2">
              {['All', 'S', 'M', 'L', 'XL'].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-3 py-1.5 rounded-full border text-sm ${
                    size === s ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Max price: ₹{price}</label>
            <input
              type="range"
              min={500}
              max={2000}
              step={50}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>
          {activeFilters.length > 0 && (
            <div className="pt-2">
              <p className="text-xs text-gray-500 mb-2">Active filters</p>
              <div className="flex flex-wrap gap-2">
                {activeFilters.map((f) => (
                  <FilterBadge
                    key={f}
                    label={f}
                    onRemove={() => {
                      if (f.startsWith('Category')) setCategory('All');
                      if (f.startsWith('Size')) setSize('All');
                      if (f.startsWith('Below')) setPrice(2000);
                      if (f.startsWith('Search')) setQuery('');
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </aside>

        <div>
          {products.length === 0 ? (
            <p className="text-gray-600">No products match your filters.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <article key={p.id} className="group border border-gray-200 rounded-2xl overflow-hidden bg-white">
                  <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{p.name}</h3>
                      <span className="font-bold">₹{p.price}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">{p.category} • {p.color}</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onAddToCart({ id: p.id, name: p.name, price: p.price, image: p.image, qty: 1 })}
                        className="flex-1 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition text-sm"
                      >
                        Add to Cart
                      </button>
                      <a href="#" className="px-4 py-2 rounded-full border border-gray-300 hover:border-black transition text-sm">Quick view</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
