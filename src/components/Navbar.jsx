import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ onCartClick, cartCount }) => {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm md:text-[15px] font-medium">
      <a href="#home" className="text-gray-700 hover:text-black transition">Home</a>
      <a href="#shop" className="text-gray-700 hover:text-black transition">Shop</a>
      <a href="#about" className="text-gray-700 hover:text-black transition">About</a>
      <a href="#contact" className="text-gray-700 hover:text-black transition">Contact</a>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 rounded-md border border-gray-300 text-gray-700"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
          <a href="#home" className="text-2xl font-black tracking-tight">
            <span className="text-black">Urban</span>
            <span className="text-gray-500">Aura</span>
          </a>
        </div>

        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        <button
          onClick={onCartClick}
          className="relative inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 hover:border-black transition"
          aria-label="Open cart"
        >
          <ShoppingCart size={18} />
          <span className="text-sm">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-[11px] leading-none px-2 py-1 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
