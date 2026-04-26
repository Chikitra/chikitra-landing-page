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
        /* =========================================
           TWEAKABLE DESKTOP LAYOUT PARAMETERS
           ========================================= */
        :root {
          /* 1. CARDS CONTAINER HEIGHT: Increase to bring all cards further up from the bottom */
          --desktop-cards-height: 55vh; 

          /* 2. BOT VERTICAL POSITION: Decrease this percentage to move the bot higher up */
          --desktop-bot-top: 35%;

          /* 3. BOT MAX SIZE: Increase this to allow the bot to get bigger */
          --desktop-bot-max-height: 100vh;

          /* 4. INDIVIDUAL CARD HEIGHTS (Percentage of the cards container height) */
          /* Change these values directly to adjust how much of each card is visible! */
          --card1-height: 120%; /* Left Card (WhatsApp) */
          --card2-height: 80%; /* Middle Card (Patient Details) */
          --card3-height: 95%; /* Right Card (Appointments) */
        }

        @media (min-width: 1536px) { /* 2xl screens */
          :root {
            /* Adjustments for ultra-wide (2xl) screens */
            --desktop-bot-top: 28%;
            --desktop-bot-max-height: 60vh;
          }
        }

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

      <section id="hero" className="relative overflow-hidden flex flex-col" style={{ backgroundColor: '#0A4944', minHeight: '100vh' }}>
        {/* LAYER 1: Bot with radial circles - large background element */}
        <div
          className="absolute levitating-bot-desktop hidden lg:block pointer-events-none w-[45vw] xl:w-[50vw] 2xl:w-[58vw] max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1000px] min-w-[350px] xl:min-w-[400px]"
          style={{
            left: '34%',
            top: 'var(--desktop-bot-top)',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        >
          <img
            src={botImage}
            alt="Chikitra Bot"
            className="w-full h-auto object-contain"
            style={{ maxHeight: 'var(--desktop-bot-max-height)' }}
          />
        </div>

        {/* =========================================
            DESKTOP LAYOUT (lg and above) - Text & Cards
           ========================================= */}
        <div className="hidden lg:flex flex-col w-full flex-1 pt-[4%] pb-0 relative z-10">

          {/* Text Content - Flex-1 takes available upper space to prevent overlapping cards */}
          <div className="flex-1 w-full px-[3%] flex flex-col items-end justify-center text-right pb-[4vh]">
            <div className="max-w-[1000px]">
              <h1
                className="font-bold text-3xl lg:text-4xl xl:text-[3.2rem] 2xl:text-[3.8rem]"
                style={{ color: '#D6EADB', lineHeight: '1.2' }}
              >
                See more patients every day.
                <br />
                No extra STAFF. Zero CHAOS.
              </h1>

              <p
                className="text-sm lg:text-base xl:text-lg 2xl:text-[1.35rem] mt-3 lg:mt-4 2xl:mt-6 ml-auto"
                style={{ color: '#D6EADB', lineHeight: '1.6', maxWidth: '750px' }}
              >
                Chikitra is your OPD's digital front desk—handles bookings, reminders, intake
                <br className="hidden lg:inline" />
                {' '}and follow-ups so your team focuses only on patients, not paperwork.
              </p>

              <div className="mt-6 lg:mt-8 2xl:mt-12 flex justify-end" style={{ pointerEvents: 'auto' }}>
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
          </div>

          {/* Desktop cards row - flex-shrink-0 to maintain height */}
          <div
            className="w-full pl-0 pr-[3%] flex items-end justify-between flex-shrink-0"
            style={{ height: 'var(--desktop-cards-height)', zIndex: 3 }}
          >
            {/* WhatsApp Chat Image (Card 1) */}
            <div
              className="rounded-t-[2rem] overflow-hidden flex-shrink-0 transition-all duration-300 hover:shadow-[0_0_30px_rgba(91,178,157,0.8)]"
              style={{
                height: 'var(--card1-height)',
                width: '20%',
                border: '2px solid #5BB29D',
                borderBottom: 'none',
                boxShadow: '0 0 16px rgba(91, 178, 157, 0.5)',
              }}
            >
              <img src={whatsappImage} alt="WhatsApp Chat" className="w-full h-full object-cover object-top" />
            </div>

            {/* Patient Details Card (Card 2) */}
            <div
              className="rounded-t-[2rem] overflow-hidden flex-shrink-0 transition-all duration-300 hover:shadow-[0_0_30px_rgba(67,119,105,0.8)]"
              style={{
                height: 'var(--card2-height)',
                width: '25%',
                border: '2px solid #437769',
                borderBottom: 'none',
                boxShadow: '0 0 20px rgba(67, 119, 105, 0.6)',
                backgroundColor: 'black'
              }}
            >
              <img src={patientDetailsImage} alt="Patient Details" className="w-full h-full object-cover object-top" />
            </div>

            {/* Appointments Dashboard (Card 3) */}
            <div
              className="rounded-t-[2rem] overflow-hidden flex-shrink-0 transition-all duration-300 hover:shadow-[0_0_30px_rgba(67,119,105,0.8)]"
              style={{
                height: 'var(--card3-height)',
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
        </div>

        {/* =========================================
            MOBILE/TABLET LAYOUT (Below lg)
           ========================================= */}
        <div className="lg:hidden flex-1 flex flex-col pt-20 pb-8 relative z-10 w-full">
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
