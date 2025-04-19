// src/IntegrationSection.js
import React from 'react';

const logos = [
  {
    name: 'Facebook Ads',
    img: 'https://cdn-icons-png.flaticon.com/512/145/145802.png',
  },
  {
    name: 'Google Sheets',
    img: 'https://cdn-icons-png.flaticon.com/512/2965/2965278.png',
  },
  {
    name: 'WooCommerce',
    img: 'https://cdn.iconscout.com/icon/free/png-256/free-woocommerce-3521367-2944771.png',
  },
  {
    name: 'Shopify',
    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968770.png',
  },

];

const IntegrationSection = () => {
  return (
    <div className="text-center py-5 bg-white">
      <h2 className="fw-bold">
        Integrates easily with <span style={{ color: '#00b386' }}>60+ platforms</span>
      </h2>

      {/* Platform Logos */}
      <div className="container mt-4">
        <div className="row justify-content-center align-items-center gy-4">
          {logos.map((logo, index) => (
            <div className="col-auto" key={index}>
              <img
                src={logo.img}
                alt={logo.name}
                height="40"
                style={{ maxWidth: '100px', objectFit: 'contain' }}
              />
              <div className="small text-muted mt-1">{logo.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-5">
        <button className="btn btn-success btn-lg px-4 py-2">
          Get Started With Free Trial
        </button>
      </div>
    </div>
  );
};

export default IntegrationSection;
