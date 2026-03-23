import bgImage from "@/assets/Old-Ways-Section_Bg_image.png";
import infographicImage from "@/assets/Old_way_section_image.png";

const ChaosSection = () => {
  return (
    <section
      id="chaos"
      className="relative min-h-screen overflow-hidden z-[60]"
      style={{ backgroundColor: '#381416' }}
    >
      {/* Background Image - Woman crying */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'auto 80%',
          backgroundPosition: '200px calc(50% - 40px)',
          opacity: 0.4,
          filter: 'brightness(1.9)'
        }}
      />

      {/* Navigator Bar */}
      

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN - Text Content */}
          <div className="order-2 lg:order-1">
            {/* "The Problem..." */}
            <p
              className="text-lg md:text-xl mb-6 md:mb-8 text-center lg:text-left"
              style={{ color: '#F9C1C8', opacity: 0.5 }}
            >
              The Problem…
            </p>

            <h2
              className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 md:mb-10 text-center lg:text-left"
              style={{ color: '#F9C1C8' }}
            >
              <span className="block pb-2 lg:pb-3">Most clinics still run</span>
              <span className="block pb-2 lg:pb-3">on paper, memory</span>
              <span className="block pt-1 lg:pt-2">and CHAOS.</span>
            </h2>

            {/* Sub-headline */}
            <div className="mb-6 md:mb-8">
              <p
                className="text-xl md:text-2xl font-semibold mb-2 text-center lg:text-left"
                style={{ color: '#F9C1C8' }}
              >
                Your clinic is <span className="font-bold">BUSY.</span>
              </p>
              <p
                className="text-xl md:text-2xl font-semibold text-center lg:text-left"
                style={{ color: '#F9C1C8' }}
              >
                But it might be <span className="font-bold">BREAKING.</span>
              </p>
            </div>

            {/* Description Text */}
            <div className="mb-6 md:mb-8 space-y-6">
              <p
                className="text-base md:text-lg leading-relaxed text-center lg:text-left"
                style={{ color: '#F9C1C8' }}
              >
                Unclear waits, scattered records, overwhelmed staff, and silent revenue leaks hurt patients and profits alike.
              </p>
              <p
                className="text-base md:text-lg leading-relaxed text-center lg:text-left"
                style={{ color: '#F9C1C8' }}
              >
                ...and you're not <span className="font-bold">ALONE.</span>
              </p>
              <p
                className="text-base md:text-lg leading-relaxed text-center lg:text-left"
                style={{ color: '#F9C1C8' }}
              >
                This is the reality for a majority of clinics trying to manage OPDs with outdated systems and manual processes.
              </p>
            </div>

            {/* Final Statement */}
            <p
              className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wide text-center lg:text-left"
              style={{ color: '#F9C1C8' }}
            >
              THIS IS NOT HOW A MODERN CLINIC SHOULD RUN.
            </p>
          </div>

          {/* RIGHT COLUMN - Infographic */}
          <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md lg:max-w-lg rounded-xl overflow-hidden shadow-2xl"
              style={{
                border: '2px solid rgba(249, 193, 200, 0.3)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
              }}
            >
              <img
                src={infographicImage}
                alt="Clinic Management Report"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaosSection;
