import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PricingPlans = () => {
  const plans = [
    {
      title: "Free Forever",
      subtitle: "Get Started with WhatsApp Ads & WhatsApp API",
      price: "₹0",
      period: "Forever",
      buttonText: "Start for FREE",
      buttonVariant: "outline-dark",
      features: [
        "Free WhatsApp Business API",
        "Free WhatsApp Blue Tick Application",
        "₹50 Free Conversation Credits",
        "Unlimited Free Service Conversations",
        "Click to WhatsApp Ads Manager",
        "Upload & Manage Contacts",
        "Create tags & attributes",
        "Upto 10 Tags",
        "Upto 5 Custom Attributes",
        "Create template messages",
        "Live Chat Dashboard",
      ],
    },
    {
      title: "Basic",
      subtitle: "Everything you need to get started with your business.",
      price: "₹999",
      period: "/ month",
      buttonText: "Get Started",
      buttonVariant: "outline-dark",
      features: [
        "All Features of Free Forever",
        "Unlimited Agent Logins",
        "Smart Audience Segregation",
        "Broadcasting & Retargeting",
        "Template Message APIs",
        "Multi-Agent Live Chat",
        "Agent Transfer & Manager Monitoring",
        "AiSensy Marketplace",
      ],
    },
    {
      title: "Pro",
      subtitle: "Highly recommended plan to make the best Campaigns",
      price: "₹2399",
      period: "/ month",
      buttonText: "Get Started",
      buttonVariant: "success",
      features: [
        "All features in Basic Plan",
        "Upto 100 Tags",
        "Upto 20 Custom Attributes",
        "Campaign Scheduler",
        "Campaign Click Tracking",
        "Smart Agent Routing",
        "Campaign Budget Analytics",
        "Project APIs",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "Recommended for 5 Lac+ Messages per month",
      price: "Custom",
      period: "",
      buttonText: "Get Connected",
      buttonVariant: "outline-dark",
      features: [
        "All features in Pro Plan",
        "Recommended for Brands with 5 Lac+",
        "Unlimited Tags",
        "Unlimited Attributes",
        "Downloadable Reports",
        "Dedicated Account Manager",
        "Priority Customer Support",
        "Webhooks",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4">
        {plans.map((plan, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card h-100 p-3">
              <h5 className="card-title">{plan.title}</h5>
              <p className="text-muted">{plan.subtitle}</p>
              <h2>
                {plan.price}{" "}
                <small className="text-muted" style={{ fontSize: "0.9rem" }}>
                  {plan.period}
                </small>
              </h2>
              <button className={`btn btn-${plan.buttonVariant} w-100 my-3`}>
                {plan.buttonText}
              </button>
              <ul className="list-unstyled small">
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
