import { ArrowUpRight } from "lucide-react";
import peekingBot from "@/assets/peeking-bot.png";
import botDancing from "@/assets/bot-dancing.png";

const FeaturesSection = () => {
  const scrollToBookDemo = () => {
    document.getElementById("book-demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="features" className="py-24" style={{ backgroundColor: '#EBF6F0' }}>
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: '#015958' }}>
            Chikitra replaces clinic chaos
            <br />
            with calm, coordinated care.
          </h2>

          <p className="text-lg" style={{ color: '#015958' }}>
            It automates the busywork, connects every touchpoint,
            <br />
            and helps clinics run smoother - without adding staff or complexity.
          </p>
        </div>

        {/* Feature Cards - Mobile/Tablet: Scrollable, Desktop: Grid */}
        <div className="max-w-5xl mx-auto">
          {/* Mobile & Tablet: Horizontal Scrollable */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:hidden">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <button
                key={index}
                onClick={scrollToBookDemo}
                className="feature-card-empty group relative flex-none w-[80vw] md:w-[45vw] snap-center"
              >
                {/* Arrow Icon */}
                <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 transition-colors" style={{ color: '#231F20' }} />
              </button>
            ))}
          </div>

          {/* Desktop: Grid with Bots */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 relative">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <button
                key={index}
                onClick={scrollToBookDemo}
                className="feature-card-empty group relative"
              >
                {/* Peeking Bot - Top Left Card (Card 1) */}
                {index === 1 && (
                  <div className="absolute w-32 h-32 z-10" style={{ top: '-7rem', left: '-2rem' }}>
                    <img src={peekingBot} alt="Peeking Bot" className="w-full h-full object-contain" />
                  </div>
                )}

                {/* Dancing Bot - Bottom Right Card (Card 6) */}
                {index === 6 && (
                  <div className="absolute w-40 h-40 z-10">
                    <img src={botDancing} alt="Dancing Bot" className="object-contain" style={{ top: '-50%', position: 'relative', right: '-113%', height: '190%', maxWidth: 'none' }} />
                  </div>
                )}

                {/* Arrow Icon */}
                <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 transition-colors" style={{ color: '#231F20' }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
