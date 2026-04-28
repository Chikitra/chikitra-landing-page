import botImage from "@/assets/Hero-Section_Bot.png";
import patientDetailsImage from "@/assets/Hero-Section_Image1.png";
import appointmentsImage from "@/assets/Hero-Section_Image2.png";
import whatsappImage from "@/assets/Hero-Section_Image3.jpeg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @keyframes levitate {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes levitate-desktop {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-15px); }
        }
        .levitating-bot {
          animation: levitate 4s ease-in-out infinite;
        }
        .levitating-bot-desktop {
          animation: levitate-desktop 4s ease-in-out infinite;
        }
      `}</style>

      <section id="hero" className="relative overflow-hidden" style={{ backgroundColor: '#0A4944', height: '100vh' }}>
        {/* LAYER 1: Bot with radial circles - large background element */}
        <div
          className="absolute levitating-bot-desktop hidden lg:block pointer-events-none top-[40%] xl:top-[42%] 2xl:top-[43%] w-[45vw] xl:w-[50vw] 2xl:w-[58vw] max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1000px] min-w-[350px] xl:min-w-[400px]"
          style={{
            left: '34%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        >
          <img
            src={botImage}
            alt="Chikitra Bot"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* LAYER 2: Desktop cards row - pinned to bottom, BELOW bot body */}
        <div
          className="hidden lg:flex items-end justify-between absolute bottom-0 left-0 right-[3%]"
          style={{ height: '55%', zIndex: 3 }}
        >
          {/* WhatsApp Chat Image */}
          <div
            className="rounded-t-[2rem] overflow-hidden flex-shrink-0 transition-all duration-300 hover:shadow-[0_0_30px_rgba(91,178,157,0.8)] h-[90%] xl:h-[100%] 2xl:h-[110%]"
            style={{
              width: '20%',
              border: '2px solid #5BB29D',
              borderBottom: 'none',
              boxShadow: '0 0 16px rgba(91, 178, 157, 0.5)',
            }}
          >
            <img src={whatsappImage} alt="WhatsApp Chat" className="w-full h-full object-cover object-top" />
          </div>

          {/* Patient Details Card */}
          <div
            className="rounded-t-[2rem] overflow-hidden flex-shrink-0 transition-all duration-300 hover:shadow-[0_0_30px_rgba(67,119,105,0.8)] h-[58%] xl:h-[60%] 2xl:h-[64%]"
            style={{
              width: '25%',
              border: '2px solid #437769',
              borderBottom: 'none',
              boxShadow: '0 0 20px rgba(67, 119, 105, 0.6)',
              backgroundColor: 'black'
            }}
          >
            <img src={patientDetailsImage} alt="Patient Details" className="w-full h-full object-cover object-top" />
          </div>

          {/* Appointments Dashboard */}
          <div
            className="rounded-t-[2rem] overflow-hidden flex-shrink-0 transition-all duration-300 hover:shadow-[0_0_30px_rgba(67,119,105,0.8)] h-[75%] xl:h-[82%] 2xl:h-[89%]"
            style={{
              width: '53%',
              border: '2px solid #437769',
              borderBottom: 'none',
              boxShadow: '0 0 20px rgba(67, 119, 105, 0.6)',
              backgroundColor: 'black'
            }}
          >
            <img
              src={appointmentsImage}
              alt="Appointments Dashboard"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* LAYER 3: Text content - on top of everything */}
        <div className="h-full hidden flex-col absolute top-[5%] right-[3%] z-10 pointer-events-none lg:flex items-end text-right w-[75%] max-w-[1000px]">
          <div className="pt-4 lg:pt-6">
            <h1
              className="font-bold text-3xl lg:text-[2.4rem] xl:text-[3.0rem] 2xl:text-[3.6rem]"
              style={{ color: '#D6EADB', lineHeight: '1.15' }}
            >
              See more patients every day.
              <br />
              No extra STAFF. Zero CHAOS.
            </h1>

            <p
              className="text-sm lg:text-[1.05rem] xl:text-[1.15rem] 2xl:text-[1.3rem] mt-2 lg:mt-3 2xl:mt-4 ml-auto"
              style={{ color: '#D6EADB', lineHeight: '1.55', maxWidth: '750px' }}
            >
              Chikitra is your OPD's digital front desk—handles bookings, reminders, intake
              <br className="hidden lg:inline" />
              {' '}and follow-ups so your team focuses only on patients, not paperwork.
            </p>
          </div>

          {/* Get Started button - right aligned */}
          <div className="mt-4 lg:mt-5 2xl:mt-8" style={{ pointerEvents: 'auto' }}>
            <button
              onClick={() => scrollToSection('book-demo')}
              className="py-2.5 px-6 xl:py-3 xl:px-8 rounded-full font-medium text-sm xl:text-base transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(1, 99, 97, 0.9)',
                border: '2px solid #5BB29D',
                color: '#DBEFE9',
                boxShadow: '0 0 18px rgba(91, 178, 157, 0.5), 0 0 36px rgba(91, 178, 157, 0.2)',
              }}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* =========================================
            MOBILE/TABLET LAYOUT (Below lg)
           ========================================= */}
        <div className="lg:hidden h-full flex flex-col pt-20 relative z-10 w-full">
          {/* Mobile Text content */}
          <div className="text-center px-4">
            <h1
              className="font-bold text-3xl"
              style={{ color: '#D6EADB', lineHeight: '1.2' }}
            >
              See more patients every day.
              <br />
              No extra STAFF. Zero CHAOS.
            </h1>

            <p
              className="text-base mt-3 mx-auto max-w-[640px]"
              style={{ color: '#D6EADB', lineHeight: '1.7' }}
            >
              Chikitra is your OPD's digital front desk—handles bookings, reminders, intake and follow-ups so your team focuses only on patients, not paperwork.
            </p>
          </div>

          {/* Mobile Get Started */}
          <div className="flex justify-center mt-4" style={{ pointerEvents: 'auto' }}>
            <button
              onClick={() => scrollToSection('book-demo')}
              className="py-2.5 px-8 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(1, 99, 97, 0.9)',
                border: '2px solid #5BB29D',
                color: '#DBEFE9',
                boxShadow: '0 0 18px rgba(91, 178, 157, 0.5)',
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile bot */}
          <div className="flex justify-center levitating-bot mt-4">
            <img
              src={botImage}
              alt="Chikitra Bot"
              className="object-contain"
              style={{ width: '260px' }}
            />
          </div>

          {/* Mobile cards */}
          <div className="flex flex-col gap-3 px-4 mt-4 flex-1 overflow-hidden" style={{ pointerEvents: 'auto' }}>
            <div
              className="rounded-[1.5rem] overflow-hidden flex-shrink-0"
              style={{ border: '2px solid #5BB29D', boxShadow: '0 0 16px rgba(91, 178, 157, 0.5)', height: '200px' }}
            >
              <img src={whatsappImage} alt="WhatsApp Chat" className="w-full h-full object-cover object-top" />
            </div>
            <div
              className="rounded-[1.5rem] overflow-hidden flex-shrink-0"
              style={{ border: '2px solid #437769', boxShadow: '0 0 20px rgba(67, 119, 105, 0.6)', height: '300px' }}
            >
              <img src={patientDetailsImage} alt="Patient Details" className="w-full h-full object-cover object-top" />
            </div>
            <div
              className="rounded-[1.5rem] overflow-hidden flex-shrink-0"
              style={{ border: '2px solid #437769', boxShadow: '0 0 20px rgba(67, 119, 105, 0.6)', height: '300px' }}
            >
              <img src={appointmentsImage} alt="Appointments Dashboard" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
