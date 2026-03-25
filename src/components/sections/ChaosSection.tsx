import bgImage from "@/assets/Old-Ways-Section_Bg_image.png";
import infographicImage from "@/assets/Old_way_section_image.png";

const ChaosSection = () => {
  return (
    <section
      id="chaos"
      className="relative min-h-screen overflow-hidden z-[60]"
      style={{ background: 'linear-gradient(180deg, #002D29 0%, #102B27 12%, #2A1D1E 24%, #371618 40%, #371618 100%)' }}
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
          <div className="order-2 lg:order-1 max-w-md lg:max-w-[460px] xl:max-w-[480px] mx-auto lg:mx-0 flex flex-col justify-center origin-left scale-[1.07]">
            {/* "The Problem..." */}
            <p
              className="text-xl md:text-2xl font-medium mb-2 md:mb-3 text-center lg:text-left"
              style={{ color: '#F9C1C8', opacity: 0.75 }}
            >
              The Problem…
            </p>

            <h2
              className="font-medium text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 md:mb-10 text-center lg:text-left tracking-tight"
              style={{ color: '#F9C1C8' }}
            >
              <span className="block pb-2 lg:pb-3">Most clinics still run</span>
              <span className="block pb-2 lg:pb-3">on paper, memory</span>
              <span className="block pt-1 lg:pt-2">and CHAOS.</span>
            </h2>

            {/* Sub-headline */}
            <div className="mb-6 md:mb-8">
              <p
                className="text-lg md:text-xl lg:text-2xl font-normal mb-1 md:mb-2 text-center lg:text-left"
                style={{ color: '#F9C1C8' }}
              >
                Your clinic is <span className="font-medium">BUSY.</span>
              </p>
              <p
                className="text-lg md:text-xl lg:text-2xl font-normal text-center lg:text-left"
                style={{ color: '#F9C1C8' }}
              >
                But it might be <span className="font-medium">BREAKING.</span>
              </p>
            </div>

            {/* Description Text */}
            <div className="mb-8 md:mb-10">
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
              className="text-base md:text-lg lg:text-xl font-medium uppercase tracking-wide text-center lg:text-left mt-2 md:mt-3 whitespace-nowrap"
              style={{ color: '#F9C1C8' }}
            >
              THIS IS NOT HOW A MODERN CLINIC SHOULD RUN.
            </p>
          </div>

          {/* RIGHT COLUMN - Infographic */}
          <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl overflow-hidden shadow-2xl"
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
