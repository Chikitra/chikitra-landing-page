import { ArrowUpRight } from "lucide-react";

const FeaturesSection = () => {
  const scrollToBookDemo = () => {
    document.getElementById("book-demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="features" className="section-light py-24">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chikitra-dark leading-tight mb-6">
            Chikitra replaces clinic chaos
            <br />
            with calm, coordinated care.
          </h2>
          
          <p className="text-lg text-chikitra-dark/70">
            It automates the busywork, connects every touchpoint,
            <br />
            and helps clinics run smoother - without adding staff or complexity.
          </p>
        </div>

        {/* Feature Cards Grid - 6 Empty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto relative">
          {/* Robot mascot decoration - top left of grid */}
          <div className="absolute -left-16 -top-8 w-16 h-16 opacity-40 hidden lg:block">
            <div className="w-full h-full rounded-lg bg-chikitra-dark/10 flex items-center justify-center text-2xl">
              🤖
            </div>
          </div>

          {[1, 2, 3, 4, 5, 6].map((index) => (
            <button
              key={index}
              onClick={scrollToBookDemo}
              className="feature-card-empty group"
            >
              {/* Arrow Icon */}
              <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-chikitra-dark/30 group-hover:text-chikitra-dark/60 transition-colors" />
            </button>
          ))}

          {/* Robot mascot decoration - bottom right of grid */}
          <div className="absolute -right-16 -bottom-8 w-16 h-16 opacity-40 hidden lg:block">
            <div className="w-full h-full rounded-lg bg-chikitra-dark/10 flex items-center justify-center text-2xl transform -scale-x-100">
              🤖
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
