import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { X } from 'lucide-react';

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const subtotal = useMemo(() => cart.reduce((sum, i) => sum + i.price * i.qty, 0), [cart]);

  const handleCheckout = () => {
    alert('Checkout is a demo in this sandbox. Payment, orders, and invoices can be connected later.');
  };

  return (
    <div className="font-inter text-gray-900 bg-white">
      <Navbar onCartClick={() => setCartOpen(true)} cartCount={cart.reduce((n, i) => n + i.qty, 0)} />
      <Hero />
      <ProductGrid onAddToCart={(item) => { addToCart(item); setCartOpen(true); }} />

      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-stone-100 via-emerald-50 to-gray-100">
            <img
              src="https://images.unsplash.com/photo-1520975940468-6c1c0a02b2d2?q=80&w=1400&auto=format&fit=crop"
              alt="Crafted locally in Kalaburagi"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="uppercase tracking-widest text-xs text-gray-500 mb-3">UrbanAura • Kalaburagi</p>
            <h3 className="text-3xl font-black mb-4">Built local. Worn global.</h3>
            <p className="text-gray-600 mb-4">
              We are a homegrown label from Namma Kalaburagi. Our tees celebrate minimal aesthetics with oversized comfort, crafted using responsible fabrics and ethical processes.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Neutral palettes: black, white, beige, sage, olive, grey</li>
              <li>• Small-batch production to reduce waste</li>
              <li>• Designed for daily wear and street-ready layering</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />

      {/* Cart Drawer */}
      <div
        className={`fixed inset-0 z-50 ${cartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!cartOpen}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${cartOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setCartOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform ${
            cartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-label="Shopping cart"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
            <h4 className="font-bold text-lg">Your Cart</h4>
            <button
              onClick={() => setCartOpen(false)}
              className="p-2 rounded-md border border-gray-300 hover:border-black"
              aria-label="Close cart"
            >
              <X size={18} />
            </button>
          </div>
          <div className="h-[calc(100%-160px)] overflow-y-auto p-5">
            {cart.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex gap-4 border border-gray-200 rounded-xl p-3">
                    <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-md" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h5 className="font-semibold leading-tight">{item.name}</h5>
                          <p className="text-sm text-gray-500">₹{item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-gray-500 hover:text-black"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-gray-300">
                        <button className="px-3 py-1" onClick={() => updateQty(item.id, -1)}>-</button>
                        <span className="px-2 text-sm">{item.qty}</span>
                        <button className="px-3 py-1" onClick={() => updateQty(item.id, 1)}>+</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-5 bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold">₹{subtotal}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={cart.length === 0}
              className="w-full px-5 py-3 rounded-full bg-black text-white disabled:bg-gray-400"
            >
              Checkout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default App;
