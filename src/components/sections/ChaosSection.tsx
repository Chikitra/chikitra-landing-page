import bgImage from "@/assets/Old-Ways-Section_Bg_image.png";
import infographicImage from "@/assets/Old_way_section_image.png";
import stressBotMobile from "@/assets/Stress_bot_mobile.png";


const IMAGE_WIDTH_MOBILE = "400px";
const IMAGE_WIDTH_TABLET = "520px";

const ChaosSection = () => {
  return (
    <section
      id="chaos"
      className="relative min-h-screen overflow-hidden z-[60]"
      style={{ background: 'linear-gradient(180deg, #002D28 0%, #002D28 5vh, #102B27 25vh, #2A1D1E 50vh, #371617 80vh, #371617 100%)' }}
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

        {/* MOBILE & TABLET VIEW (< lg) */}
        <div className="flex flex-col items-center lg:hidden w-full pt-4 pb-8">
          {/* "THE PROBLEM" Pill */}
          <div className="mb-10">
            <span
              className="px-5 py-1.5 text-xs sm:text-sm tracking-widest font-semibold uppercase"
              style={{ border: '1.5px solid #01665E', borderRadius: '999px', color: '#01665E', letterSpacing: '0.18em' }}
            >
              The Problem
            </span>
          </div>

          <h2
            className="font-medium text-4xl md:text-5xl leading-tight mb-8 text-center tracking-normal"
            style={{ color: '#F7BFC7' }}
          >
            <span className="block pb-1 md:pb-2">Most clinics still run</span>
            <span className="block pb-1 md:pb-2">on paper, memory</span>
            <span className="block">and <span className="font-bold">CHAOS.</span></span>
          </h2>

          {/* Sub-headline */}
          <div className="mb-12">
            <p
              className="text-xl md:text-2xl font-normal mb-1 md:mb-2 text-center tracking-wide"
              style={{ color: '#F7BFC7' }}
            >
              Your clinic is <span className="font-bold">BUSY.</span>
            </p>
            <p
              className="text-xl md:text-2xl font-normal text-center tracking-wide"
              style={{ color: '#F7BFC7' }}
            >
              But it might be <span className="font-bold">BREAKING.</span>
            </p>
          </div>

          {/* Image */}
          <div
            className="w-full mb-12 max-w-[var(--img-w-mobile)] md:max-w-[var(--img-w-tablet)]"
            style={{
              '--img-w-mobile': IMAGE_WIDTH_MOBILE,
              '--img-w-tablet': IMAGE_WIDTH_TABLET,
            } as React.CSSProperties}
          >
            <img
              src={stressBotMobile}
              alt="Stress Bot"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Bottom text */}
          <div className="text-center">
            <p
              className="text-xl md:text-2xl font-normal mb-1 md:mb-2 tracking-wide"
              style={{ color: '#F7BFC7' }}
            >
              You know the problem.
            </p>
            <p
              className="text-xl md:text-2xl font-normal tracking-wide"
              style={{ color: '#F7BFC7' }}
            >
              Meet the solution — <span className="font-black uppercase tracking-wide">CHIKITRA.</span>
            </p>
          </div>
        </div>

        {/* DESKTOP VIEW (>= lg) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN - Text Content */}
          <div className="max-w-[460px] xl:max-w-[480px] flex flex-col justify-center origin-left scale-[1.07]">
            {/* "The Problem..." */}
            <p
              className="text-2xl font-medium mb-3 text-left"
              style={{ color: '#F9C1C8', opacity: 0.75 }}
            >
              The Problem…
            </p>

            <h2
              className="font-medium text-5xl leading-tight mb-10 text-left tracking-tight"
              style={{ color: '#F9C1C8' }}
            >
              <span className="block pb-3">Most clinics still run</span>
              <span className="block pb-3">on paper, memory</span>
              <span className="block pt-2">and CHAOS.</span>
            </h2>

            {/* Sub-headline */}
            <div className="mb-8">
              <p
                className="text-2xl font-normal mb-2 text-left"
                style={{ color: '#F9C1C8' }}
              >
                Your clinic is <span className="font-medium">BUSY.</span>
              </p>
              <p
                className="text-2xl font-normal text-left"
                style={{ color: '#F9C1C8' }}
              >
                But it might be <span className="font-medium">BREAKING.</span>
              </p>
            </div>

            {/* Description Text */}
            <div className="mb-10">
              <p
                className="text-lg leading-relaxed text-left"
                style={{ color: '#F9C1C8' }}
              >
                Unclear waits, scattered records, overwhelmed staff, and silent revenue leaks hurt patients and profits alike.
              </p>
              <p
                className="text-lg leading-relaxed text-left"
                style={{ color: '#F9C1C8' }}
              >
                ...and you're not <span className="font-bold">ALONE.</span>
              </p>
              <p
                className="text-lg leading-relaxed text-left"
                style={{ color: '#F9C1C8' }}
              >
                This is the reality for a majority of clinics trying to manage OPDs with outdated systems and manual processes.
              </p>
            </div>

            {/* Final Statement */}
            <p
              className="text-xl font-medium uppercase tracking-wide text-left mt-3 whitespace-nowrap"
              style={{ color: '#F9C1C8' }}
            >
              THIS IS NOT HOW A MODERN CLINIC SHOULD RUN.
            </p>
          </div>

          {/* RIGHT COLUMN - Infographic */}
          <div className="w-full flex justify-end">
            <div
              className="relative w-full max-w-xl xl:max-w-2xl 2xl:max-w-3xl overflow-hidden shadow-2xl"
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
