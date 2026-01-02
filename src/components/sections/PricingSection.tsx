import { Check } from "lucide-react";
import botCelebrating from "@/assets/bot-celebrating.png";

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
    <section id="pricing" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#052826' }}>
      {/* Decorative bot - Single huge bot on left celebrating */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none w-64 md:w-96 lg:w-[500px] -translate-x-1/3" style={{ opacity: 0.04 }}>
        <img src={botCelebrating} alt="" className="w-full scale-x-[-1]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#28A899' }}>
            One platform
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#C2E2CB' }}>
            Plans that fit your clinic
          </h3>
          <p style={{ color: '#FFFFFF' }}>
            Upgrade your clinic today — <span className="font-semibold" style={{ color: '#FFFFFF' }}>costs less than your morning coffee</span>.
          </p>
        </div>

        {/* Pricing Cards - Basic & Enterprise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={plan.featured ? "pricing-card-featured" : "pricing-card-top"}
            >
              <h4 className="text-xl font-bold mb-2" style={{ color: '#FFFFFF' }}>{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold" style={{ color: '#FFFFFF' }}>{plan.price}</span>
                <span style={{ color: '#C2E2CB' }}>{plan.period}</span>
              </div>

              <button
                onClick={scrollToBookDemo}
                className="w-full rounded-full py-3 mb-8 font-bold transition-all duration-200 hover:bg-[#C2E2CB] hover:text-[#0E3A33]"
                style={{
                  backgroundColor: 'transparent',
                  color: '#C2E2CB',
                  border: '3px solid #C2E2CB'
                }}
              >
                Get Started
              </button>

              {/* Divider with Services */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" style={{ borderColor: 'rgba(194, 226, 203, 0.2)' }} />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 text-sm" style={{ backgroundColor: '#0C3A33', color: 'rgba(194, 226, 203, 0.6)' }}>Services</span>
                </div>
              </div>

              <ul className="space-y-3">
                {plan.services.map((service, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" style={{ color: '#FFFFFF' }} />
                    <span className="text-sm" style={{ color: '#FFFFFF' }}>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Professional Card - Full Width */}
        <div className="max-w-3xl mx-auto">
          <div className="pricing-card-professional text-center py-10">
            <h4 className="text-2xl font-bold mb-4" style={{ color: '#FFFFFF' }}>Professional</h4>
            <p className="mb-2" style={{ color: '#FFFFFF' }}>
              Want it tailored to your clinic size?
            </p>
            <p className="mb-8" style={{ color: '#FFFFFF' }}>
              We offer flexible plans that scale with you.
            </p>

            <button
              onClick={scrollToBookDemo}
              className="rounded-full px-10 py-3 text-base font-bold transition-all duration-200"
              style={{
                backgroundColor: '#C2E2CB',
                color: '#0E3A33',
                border: 'none'
              }}
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
