import botImage from "@/assets/Hero-Section_Bot.png";
import patientDetailsImage from "@/assets/Hero-Section_Image1.png";
import appointmentsImage from "@/assets/Hero-Section_Image2.png";
import chikitraLogo from "@/assets/Long_logo_original_final.png";
import sidebarLogo from "@/assets/chikitra-logo.avif";

interface HeroSectionProps {
  hideSidebar?: boolean;
}

const HeroSection = ({ hideSidebar = false }: HeroSectionProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Levitating Animation Styles */}
      <style>{`
        @keyframes levitate {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .levitating-bot {
          animation: levitate 4s ease-in-out infinite;
        }
        @media (min-width: 1024px) and (max-width: 1439px) {
          .hero-heading {
            font-size: 1.85rem !important;
            line-height: 1.2 !important;
          }
        }
      `}</style>

    <section id="hero" className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0A4944' }}>
      {/* Left Navigation Sidebar - Desktop only, slides out when scrolled past hero */}
      <div
        className={`hidden lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-48 lg:flex lg:flex-col lg:py-8 lg:pr-4 lg:z-50 transition-transform duration-300 ${hideSidebar ? '-translate-x-full' : 'translate-x-0'}`}
        style={{ backgroundColor: '#0D4740' }}
      >
        {/* Logo */}
        <div className="mb-12 px-4">
          <img
            src={sidebarLogo}
            alt="Chikitra Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Navigation Buttons */}
        <nav className="flex-1 space-y-6">
          <button
            onClick={() => scrollToSection('hero')}
            className="w-full py-4 px-6 rounded-r-full text-left font-medium transition-all duration-300 hover:pr-8 hover:scale-105"
            style={{
              backgroundColor: 'rgba(1, 99, 97, 0.9)',
              border: '1px solid #5BB29D',
              color: '#DBEFE9',
              boxShadow: '0 0 20px rgba(91, 178, 157, 0.5), inset 0 0 20px rgba(91, 178, 157, 0.1)'
            }}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="w-full py-4 px-6 rounded-r-full text-left font-medium transition-all duration-300 hover:pr-8 hover:scale-105 hover:shadow-[0_0_25px_rgba(91,178,157,0.6)]"
            style={{
              backgroundColor: 'rgba(1, 99, 97, 0.9)',
              border: '1px solid #5BB29D',
              color: '#DBEFE9'
            }}
          >
            About us
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="w-full py-4 px-6 rounded-r-full text-left font-medium transition-all duration-300 hover:pr-8 hover:scale-105 hover:shadow-[0_0_25px_rgba(91,178,157,0.6)]"
            style={{
              backgroundColor: 'rgba(1, 99, 97, 0.9)',
              border: '1px solid #5BB29D',
              color: '#DBEFE9'
            }}
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('book-demo')}
            className="w-full py-4 px-6 rounded-r-full text-left font-medium transition-all duration-300 hover:pr-8 hover:scale-105 hover:shadow-[0_0_25px_rgba(91,178,157,0.6)]"
            style={{
              backgroundColor: 'rgba(1, 99, 97, 0.9)',
              border: '1px solid #5BB29D',
              color: '#DBEFE9'
            }}
          >
            Contact
          </button>
        </nav>

        {/* Sign In Button */}
        <button
          onClick={() => window.location.href = '/signin'}
          className="w-full py-4 px-6 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(91,178,157,0.7)]"
          style={{
            backgroundColor: 'rgba(1, 99, 97, 0.9)',
            border: '2px solid #5BB29D',
            color: '#DBEFE9',
            boxShadow: '0 0 15px rgba(91, 178, 157, 0.4)'
          }}
        >
          Sign in
        </button>
      </div>

      {/* Main Content */}
      <div className={`pt-16 lg:pt-0 min-h-screen relative flex flex-col transition-all duration-300 ${hideSidebar ? 'lg:ml-0' : 'lg:ml-48'}`}>
        <div className="container mx-auto px-4 lg:px-6 py-4 relative z-10 flex-1 flex flex-col">
          {/* Chikitra Logo - Top Right - Desktop only */}
          <div className="hidden lg:flex justify-end mb-4 pr-8">
            <img
              src={chikitraLogo}
              alt="Chikitra"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Main Content Area - Vertical on mobile, Grid on desktop */}
          <div className="flex-1 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-2 lg:items-end lg:-mt-4">
            {/* LEFT COLUMN - Bot with Patient Details overlapping at bottom */}
            <div className="relative flex flex-col items-center pb-4 order-2 lg:order-1">
              {/* Bot Image Container */}
              <div className="relative levitating-bot mb-[-100px] lg:mb-[-160px] max-w-sm lg:max-w-none">
                <img
                  src={botImage}
                  alt="Chikitra Bot"
                  className="w-full h-auto object-contain"
                  style={{
                    //filter: 'drop-shadow(0 20px 50px rgba(0, 0, 0, 0.5))',
                    maxWidth: '800px',
                    margin: '0 auto'
                  }}
                />
              </div>

              {/* Patient Details Card */}
              <div
                className="w-72 lg:w-80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_rgba(67,119,105,0.9)] relative z-20"
                style={{
                  opacity: 0.9,
                  border: '2px solid #437769',
                  boxShadow: '0 0 25px rgba(67, 119, 105, 0.6)',
                  minHeight: '380px'
                }}
              >
                <img src={patientDetailsImage} alt="Patient Details" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* RIGHT COLUMN - Headline at top, Appointments overlapping bot */}
            <div className="relative flex flex-col h-full pb-4 order-1 lg:order-2">
              {/* Headline */}
              <h1
                className="hero-heading font-bold leading-tight pt-4 lg:pt-28 px-4 lg:pr-8 text-center lg:text-right text-3xl lg:text-[2.625rem]"
                style={{ color: '#D6EADB', lineHeight: '1.2' }}
              >
                See more patients every day.
                <br />
                No extra STAFF. Zero CHAOS.
              </h1>

              {/* Sub-headline */}
              <p
                className="text-base lg:text-l leading-relaxed mt-4 px-4 lg:pr-8 text-center lg:text-right"
                style={{ color: '#D6EADB' }}
              >
                Chikitra is your OPD's digital front desk—handles bookings, reminders, intake
                and follow-ups so your team focuses only on patients, not paperwork.
              </p>

              {/* CTA Buttons and Appointments Image */}
              <div className="flex flex-col mt-6 lg:mt-8">
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-3 justify-center lg:justify-end px-4 lg:pr-8">
                  <button
                    onClick={() => scrollToSection('book-demo')}
                    className="w-full sm:w-auto py-3 lg:py-4 px-8 lg:px-10 rounded-full font-medium text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(127,165,135,0.8)]"
                    style={{
                      backgroundColor: 'transparent',
                      border: '2px solid #7FA587',
                      color: '#D6EADB',
                      boxShadow: '0 0 20px rgba(127, 165, 135, 0.5)'
                    }}
                  >
                    Book a demo
                  </button>
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="w-full sm:w-auto py-3 lg:py-4 px-8 lg:px-10 rounded-full font-medium text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(4,127,115,0.9)]"
                    style={{
                      backgroundColor: 'rgba(1, 99, 97, 0.9)',
                      border: '2px solid #047F73',
                      color: '#DBEFE9',
                      boxShadow: '0 0 20px rgba(4, 127, 115, 0.6)'
                    }}
                  >
                    Get Started
                  </button>
                </div>

                {/* Appointments Image */}
                <div className="flex-1 px-4 lg:pr-4 lg:pl-0">
                  <div
                    className="relative lg:absolute w-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_rgba(67,119,105,0.9)]"
                    style={{
                      opacity: 0.9,
                      border: '2px solid #437769',
                      boxShadow: '0 0 25px rgba(67, 119, 105, 0.6)',
                    }}
                  >
                    <style>{`
                      @media (min-width: 1024px) {
                        .appointments-container {
                          
                          left: -118px;
                        }
                      }
                    `}</style>
                    <div className="appointments-container">
                      <img
                        src={appointmentsImage}
                        alt="Appointments Dashboard"
                        className="w-full h-full"
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'top center',
                          //minHeight: '400px'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
