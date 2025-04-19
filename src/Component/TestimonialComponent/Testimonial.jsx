import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const slides = [
  [
    {
      title: "Travel & Tourism",
      points: [
        "Enable 24/7 customer support and agent availability",
        "Automate FAQs around travel and tourism queries",
        "Share relevant documents, PDFs, brochures on WhatsApp"
      ],
      image: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
      bg: "#D4F6EC"
    },
    {
      title: "Education",
      points: [
        "Send reminders for tests, fee payments, results",
        "Make education more accessible and affordable",
        "Chat-based conversations on WhatsApp"
      ],
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      bg: "#E9EDFF"
    },
    {
      title: "Spa & Salons",
      points: [
        "Send discounts & offers to customers",
        "Stay connected 24/7 with WhatsApp automation",
        "Showcase your services via storefront"
      ],
      image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
      bg: "#FFF4E2"
    }
  ]
];

const Testimonial = () => {
  return (
    <div className="w-100 py-5" style={{ background: "#f8f9fa" }}>
      <h2 className="text-center fw-bold mb-5">Built for any Industry</h2>

      <div id="carouselExample" className="carousel slide px-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="d-flex justify-content-center gap-4 flex-wrap">
                {group.map((item, i) => (
                  <div
                    key={i}
                    className="card p-3 border-0 shadow-sm"
                    style={{
                      backgroundColor: item.bg,
                      borderRadius: "15px",
                      width: "300px",
                      minHeight: "400px",
                      flex: "0 0 auto"
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-img-top mx-auto"
                      style={{ width: "100px", height: "100px", objectFit: "contain" }}
                    />
                    <div className="card-body text-start">
                      <h5 className="card-title fw-bold">{item.title}</h5>
                      <ul className="ps-3">
                        {item.points.map((point, j) => (
                          <li key={j} className="mb-1">{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
