import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const features = [
  {
    icon: "bi-database",
    title: "Access to Meta’s APIs",
    desc: "Leverage direct Meta APIs and get access to the latest WhatsApp Business API features",
  },
  {
    icon: "bi-arrow-up-right",
    title: "Scalable Infrastructure",
    desc: "1000s of brands have partnered with us to scale up their customer support & engagement!",
  },
  {
    icon: "bi-files",
    title: "Seamless Integrations",
    desc: "OOTB integrations with your favorite CRMs, payment gateways, e-stores & marketing automation platforms",
  },
  {
    icon: "bi-diagram-3",
    title: "Smooth onboarding & easy setup",
    desc: "Minimize operational disruption, and deploy a powerful WhatsApp solution for your business in a few simple steps!",
  },
  {
    icon: "bi-graph-up",
    title: "Highly competitive pricing",
    desc: "No hidden costs — transparent pricing structure with no lock-ins. We show you campaign costs upfront so that there are no surprises later.",
  },
  {
    icon: "bi-headset",
    title: "Industry Leading Support",
    desc: "Access our premium customer support and get a resolution within minutes!",
  },
];

const Bottom = () => {
  return (
    <div
  className="container-fluid py-5"
  style={{ backgroundColor: "#fdf9f2"}}>
    <div className="container text-center py-5"   style={{ backgroundColor: "#fdf9f2" }}>
      <h2 className="fw-bold">More reasons to choose Interakt</h2>
      <p className="mb-5">
        Get a Green Tick verified WhatsApp Business API account along with:
      </p>

      <div className="row">
        {features.map((feature, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="border rounded-4 p-4 h-100"
              style={{ backgroundColor: "#fdf9f2" }}
            >
              <i
                className={`bi ${feature.icon}`}
                style={{ fontSize: "2rem", color: "#b5883f" }}
              ></i>
              <h5 className="fw-bold mt-3">{feature.title}</h5>
              <p className="text-muted small">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-success px-4 mt-3">Start Free Trial</button>
    </div>
    </div>
  );
};

export default Bottom;