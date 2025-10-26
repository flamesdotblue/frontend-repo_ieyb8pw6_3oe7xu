import React from 'react';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-black mb-2"><span className="text-black">Urban</span><span className="text-gray-500">Aura</span></h3>
          <p className="text-gray-600 max-w-md">
            Streetwear essentials designed and made in Kalaburagi. Neutral tones. Bold energy. Sustainable choices.
          </p>
          <p className="mt-4 text-sm text-gray-500">© {new Date().getFullYear()} UrbanAura • All rights reserved</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><Phone size={16}/> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail size={16}/> hello@urbanaura.in</li>
          </ul>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 px-4 py-2 rounded-full border border-gray-300 hover:border-black text-sm"
          >
            WhatsApp chat
          </a>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow us</h4>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-gray-300 hover:border-black">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-gray-300 hover:border-black">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
