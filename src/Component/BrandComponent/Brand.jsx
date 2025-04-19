import React from 'react';
import './Brand.css';

const brands = [
  { name: 'Sweet Shop', src: './public/assets/Infosys.png' },
  { name: 'Blue Dart', src: './public/assets/upstox.png' },
  { name: 'Zoop', src: './public/assets/tcs.jpg' },
  { name: 'Sweet Shop', src: './public/assets/Infosys.png' },
  { name: 'Blue Dart', src: './public/assets/upstox.png' },
  { name: 'Zoop', src: './public/assets/tcs.jpg' },
  { name: 'Sweet Shop', src: './public/assets/Infosys.png' },
  { name: 'Blue Dart', src: './public/assets/upstox.png' },
  { name: 'Zoop', src: './public/assets/tcs.jpg' },
];

const Brand = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">
          25,000+ Businesses Across the Globe Trust Interakt
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex justify-center">
          <div className="marquee flex items-center gap-12">
            {brands.map((brand, index) => (
              <img
                key={index}
                src={brand.src}
                alt={brand.name}
                className="h-8 sm:h-10 md:h-12 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
