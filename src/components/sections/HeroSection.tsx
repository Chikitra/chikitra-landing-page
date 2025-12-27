import botWaving from "@/assets/bot-waving.png";
import botTablet from "@/assets/bot-tablet.png";
import botCelebrating from "@/assets/bot-celebrating.png";
import botThumbsup from "@/assets/bot-thumbsup.png";

const HeroSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="section-light min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto pt-12 pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chikitra-dark leading-tight mb-6">
            Never lose patients to
            <br />
            bad coordination <span className="uppercase">AGAIN.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-chikitra-dark/80 max-w-2xl mx-auto mb-10">
            Chikitra is your OPD's digital front desk—handles bookings, reminders, intake,
            and follow-ups so your team focuses only on patients. Not paperwork.
          </p>

          <button 
            onClick={scrollToPricing}
            className="btn-pill-filled text-base px-8 py-3"
          >
            Get Started
          </button>
        </div>

        {/* Hero Images Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {/* Image 1 - Bot Waving */}
          <div className="aspect-[4/5] rounded-2xl bg-chikitra-dark overflow-hidden image-pop">
            <div className="w-full h-full bg-gradient-to-br from-chikitra-dark to-chikitra-dark-card flex items-center justify-center p-4">
              <img src={botWaving} alt="Chikitra Bot Waving" className="max-h-full object-contain" />
            </div>
          </div>
          
          {/* Image 2 - Bot with Tablet */}
          <div className="aspect-[4/5] rounded-2xl bg-chikitra-dark overflow-hidden image-pop">
            <div className="w-full h-full bg-gradient-to-br from-chikitra-dark to-chikitra-dark-card flex items-center justify-center p-4">
              <img src={botTablet} alt="Chikitra Bot with Tablet" className="max-h-full object-contain" />
            </div>
          </div>
          
          {/* Image 3 - Light placeholder */}
          <div className="aspect-[4/5] rounded-2xl bg-chikitra-mint-card overflow-hidden image-pop">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-chikitra-dark/20 text-xs text-center p-4">
                Image Placeholder
              </div>
            </div>
          </div>
          
          {/* Image 4 - Bot Celebrating */}
          <div className="aspect-[4/5] rounded-2xl bg-chikitra-mint-card overflow-hidden image-pop hidden md:block">
            <div className="w-full h-full flex items-center justify-center p-4">
              <img src={botCelebrating} alt="Chikitra Bot Celebrating" className="max-h-full object-contain" />
            </div>
          </div>
          
          {/* Image 5 - Bot Thumbs up */}
          <div className="aspect-[4/5] rounded-2xl bg-chikitra-dark overflow-hidden image-pop hidden md:block">
            <div className="w-full h-full bg-gradient-to-br from-chikitra-dark to-chikitra-dark-card flex items-center justify-center p-4">
              <img src={botThumbsup} alt="Chikitra Bot Thumbs Up" className="max-h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
