import { Check } from "lucide-react";
import botDancing from "@/assets/bot-dancing.png";
import botDancingBack from "@/assets/bot-dancing-back.png";

const plans = [
  {
    name: "Basic",
    price: "₹69",
    period: "/ day",
    services: [
      "Service we provide 1",
      "Service we provide 2",
      "Service we provide 3",
      "Service we provide 4",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "₹169",
    period: "/ day",
    services: [
      "Service we provide 1",
      "Service we provide 2",
      "Service we provide 3",
      "Service we provide 4",
    ],
    featured: false,
  },
];

const PricingSection = () => {
  const scrollToBookDemo = () => {
    document.getElementById("book-demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-dark py-24 relative overflow-hidden">
      {/* Decorative bots */}
      <div className="absolute left-0 top-1/4 opacity-20 pointer-events-none w-32 md:w-48 -translate-x-1/4">
        <img src={botDancingBack} alt="" className="w-full" />
      </div>
      <div className="absolute right-0 bottom-1/4 opacity-20 pointer-events-none w-32 md:w-48 translate-x-1/4">
        <img src={botDancing} alt="" className="w-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-chikitra-teal mb-3">
            One platform
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-chikitra-mint mb-4">
            Plans that fit your clinic
          </h3>
          <p className="text-chikitra-mint/70">
            Upgrade your clinic today — <span className="font-semibold text-chikitra-mint">costs less than your morning coffee</span>.
          </p>
        </div>

        {/* Pricing Cards - Basic & Enterprise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={plan.featured ? "pricing-card-featured" : "pricing-card"}
            >
              <h4 className="text-xl font-bold text-chikitra-mint mb-2">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-chikitra-teal">{plan.price}</span>
                <span className="text-chikitra-mint/60">{plan.period}</span>
              </div>
              
              <button
                onClick={scrollToBookDemo}
                className="w-full btn-pill border-2 border-chikitra-mint/30 text-chikitra-mint hover:bg-chikitra-mint hover:text-chikitra-dark mb-8 py-3"
              >
                Get Started
              </button>

              {/* Divider with Services */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-chikitra-mint/20" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-chikitra-dark-card px-3 text-chikitra-mint/50 text-sm">Services</span>
                </div>
              </div>

              <ul className="space-y-3">
                {plan.services.map((service, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-chikitra-teal flex-shrink-0" />
                    <span className="text-chikitra-mint/80 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Professional Card - Full Width */}
        <div className="max-w-3xl mx-auto">
          <div className="pricing-card text-center py-10">
            <h4 className="text-2xl font-bold text-chikitra-mint mb-4">Professional</h4>
            <p className="text-chikitra-mint/70 mb-2">
              Want it tailored to your clinic size?
            </p>
            <p className="text-chikitra-mint/70 mb-8">
              We offer flexible plans that scale with you.
            </p>
            
            <button
              onClick={scrollToBookDemo}
              className="btn-pill-light px-10 py-3 text-base"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
