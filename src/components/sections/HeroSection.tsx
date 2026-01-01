import clinic from "@/assets/clinic.png";
import ai from "@/assets/AI.png";
import support from "@/assets/support.png";


const HeroSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="section-light min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chikitra-dark leading-tight mb-6">
            Never lose patients to
            <br />
            bad coordination <span className="uppercase">AGAIN.</span>
          </h1>

          <p className="text-lg md:text-xl text-chikitra-dark/80 max-w-3xl mx-auto mb-10">
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
        {/* Mobile: Horizontal scrollable */}
        <div className="mt-8 md:mt-12 lg:mt-0">
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:hidden">
            {/* Image 1 - Clinic */}
            <div className="flex-none w-[70vw] aspect-[3/4] rounded-2xl overflow-hidden image-pop snap-center">
              <img src={clinic} alt="Clinic" className="w-full h-full object-cover" />
            </div>

            {/* Image 2 - AI */}
            <div className="flex-none w-[70vw] aspect-[3/4] rounded-2xl overflow-hidden image-pop snap-center">
              <img src={ai} alt="AI Technology" className="w-full h-full object-cover" />
            </div>

            {/* Image 3 - Placeholder */}
            <div className="flex-none w-[70vw] aspect-[3/4] rounded-2xl bg-chikitra-mint-card overflow-hidden image-pop snap-center">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-chikitra-dark/20 text-xs text-center">
                  Image Placeholder
                </div>
              </div>
            </div>

            {/* Image 4 - Placeholder */}
            <div className="flex-none w-[70vw] aspect-[3/4] rounded-2xl bg-chikitra-mint-card overflow-hidden image-pop snap-center">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-chikitra-dark/20 text-xs text-center">
                  Image Placeholder
                </div>
              </div>
            </div>

            {/* Image 5 - Support */}
            <div className="flex-none w-[70vw] aspect-[3/4] rounded-2xl overflow-hidden image-pop snap-center">
              <img src={support} alt="Global Support" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Tablet & Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 max-w-7xl mx-auto items-end">
            {/* Image 1 - Clinic (Tall) */}
            <div className="aspect-[3/4] rounded-2xl overflow-hidden image-pop">
              <img src={clinic} alt="Clinic" className="w-full h-full object-cover" />
            </div>

            {/* Image 2 - AI (Square) */}
            <div className="aspect-square rounded-2xl overflow-hidden image-pop">
              <img src={ai} alt="AI Technology" className="w-full h-full object-cover" />
            </div>

            {/* Image 3 - Placeholder (Horizontal) */}
            <div className="aspect-[4/3] rounded-2xl bg-chikitra-mint-card overflow-hidden image-pop">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-chikitra-dark/20 text-xs text-center">
                  Image Placeholder
                </div>
              </div>
            </div>

            {/* Image 4 - Placeholder (Square) - Hidden on tablet, visible on desktop */}
            <div className="aspect-square rounded-2xl bg-chikitra-mint-card overflow-hidden image-pop hidden lg:block">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-chikitra-dark/20 text-xs text-center">
                  Image Placeholder
                </div>
              </div>
            </div>

            {/* Image 5 - Support (Tall) - Hidden on tablet, visible on desktop */}
            <div className="aspect-[3/4] rounded-2xl overflow-hidden image-pop hidden lg:block">
              <img src={support} alt="Global Support" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
