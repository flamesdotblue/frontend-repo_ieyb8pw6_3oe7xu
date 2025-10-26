import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-xs text-gray-500 mb-3">Made in Namma Kalaburagi</p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
              Minimal streetwear for bold souls
            </h1>
            <p className="text-gray-600 mb-8">
              UrbanAura blends neutral palettes with edgy silhouettes. Crafted sustainably in Kalaburagi, built for everyday comfort and Gen‑Z energy.
            </p>
            <div className="flex items-center gap-3">
              <a href="#shop" className="px-5 py-3 rounded-full bg-black text-white hover:bg-gray-900 transition">Shop now</a>
              <a href="#about" className="px-5 py-3 rounded-full border border-gray-300 hover:border-black transition">Our story</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-gray-100 via-emerald-50 to-stone-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop"
                alt="UrbanAura T-shirt mockup"
                className="w-full h-full object-cover mix-blend-multiply"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
