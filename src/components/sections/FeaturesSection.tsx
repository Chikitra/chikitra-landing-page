import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import featureBot1 from "@/assets/Feature_Bot1.png";
import featureBot2 from "@/assets/Feature_Bot2.png";
import featureBot3 from "@/assets/Feature_Bot3.png";
import featureBot4 from "@/assets/Feature_Bot4.png";
import featureBot5 from "@/assets/Feature_Bot5.png";
import featureBot6 from "@/assets/Feature_Bot6.png";
import featureArrow from "@/assets/feature_card_arrow.png";
import ninjaBot from "@/assets/Features-Section_Bot.png";
import ninjaBotOnly from "@/assets/Features-Section_Bot_only.png";
import iconNotification from "@/assets/Notification.png";
import iconDashboard from "@/assets/dashboard.png";
import iconLiveSync from "@/assets/live_sync.png";
import iconIntake from "@/assets/Intake.png";
import iconCalendar from "@/assets/calendar.png";
import iconPrescription from "@/assets/prescription.png";

const features = [
  {
    id: 1,
    title: "Patient Reminders &\nFollow-ups",
    subtitle: "Patients never miss follow-ups again",
    description: "Automated reminders, reports, and recalls via WhatsApp, Call & SMS.",
    bot: featureBot1,
    icon: iconNotification,
    botStyle: { width: '110px', bottom: '-60px', right: '-10px', transform: 'scaleX(-1)' }
  },
  {
    id: 2,
    title: "Doctor Dashboard &\nCoordination",
    subtitle: "Know patients before they walk in",
    description: "Past history, medications, labs, visit notes, and today's reason—on one screen.",
    bot: featureBot2,
    icon: iconDashboard,
    botStyle: { width: '125px', bottom: '-60px', right: '-25px' }
  },
  {
    id: 3,
    title: "Live OPD Appointment\nList (Doctor View)",
    subtitle: "Know exactly who's next—always",
    description: "Real-time appointment list that updates continuously through the day.",
    bot: featureBot3,
    icon: iconLiveSync,
    botStyle: { width: '100px', bottom: '-10px', right: '-10px' }
  },
  {
    id: 4,
    title: "AI Receptionist &\nSmart Intake",
    subtitle: "Your AI receptionist, always early",
    description: "Answers patient queries, captures details, and preps intake—so your team starts informed.",
    bot: featureBot4,
    icon: iconIntake,
    botStyle: { width: '90px', bottom: '-50px', right: '-15px' }
  },
  {
    id: 5,
    title: "Smart Appointment\nBooking",
    subtitle: "Appointments, automated end-to-end",
    description: "No double bookings. No conflicts. Just care—handled everything end-to-end.",
    bot: featureBot5,
    icon: iconCalendar,
    botStyle: { width: '90px', bottom: '-15px', right: '-15px' }
  },
  {
    id: 6,
    title: "All Prescriptions.\nOne Secure Record.",
    subtitle: "Prescribe your way—paper or digital",
    description: "E-prescriptions or handwritten ones. Everything together. Future visits.",
    bot: featureBot6,
    icon: iconPrescription,
    botStyle: { width: '90px', bottom: '-40px', right: '-15px', transform: 'scaleX(-1)' }
  }
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const scrollToBookDemo = () => {
    document.getElementById("book-demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes floatSmall {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .floating-ninja {
          animation: float 4s ease-in-out infinite;
        }
        .floating-ninja-mobile {
          animation: floatSmall 4s ease-in-out infinite;
        }
        .feature-card {
          background-color: #0E564F;
          border-radius: 1rem;
          padding: 1.25rem;
          min-height: 180px;
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
          overflow: hidden;
          border: 1px solid rgba(26, 158, 136, 0.6);
          box-shadow: 0 0 15px rgba(26, 158, 136, 0.2);
        }
        .feature-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(26, 158, 136, 0.6);
        }
        .feature-card-bot {
          position: absolute;
          opacity: 0.25;
          z-index: 0;
          pointer-events: none;
        }
        .feature-icon-btn {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .feature-icon-btn img {
          filter: drop-shadow(0 0 8px rgba(26, 158, 136, 0.5)) drop-shadow(0 0 16px rgba(26, 158, 136, 0.3));
          animation: iconGlow 2.5s ease-in-out infinite;
        }
        .feature-icon-btn:hover img {
          filter: drop-shadow(0 0 14px rgba(26, 158, 136, 0.7)) drop-shadow(0 0 28px rgba(26, 158, 136, 0.4));
          transform: scale(1.1);
        }
        @keyframes iconGlow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(26, 158, 136, 0.5)) drop-shadow(0 0 16px rgba(26, 158, 136, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 14px rgba(26, 158, 136, 0.7)) drop-shadow(0 0 28px rgba(26, 158, 136, 0.4));
          }
        }
        .feature-popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.2s ease;
        }
        .feature-popup-card {
          background-color: #0E564F;
          border-radius: 1rem;
          padding: 1.5rem;
          position: relative;
          max-width: 360px;
          width: 100%;
          animation: popIn 0.25s ease;
          overflow: hidden;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <section id="features" className="py-24 relative" style={{ background: "linear-gradient(180deg, #2F1012 0%, #241416 28%, #143733 68%, #0C3A35 100%)" }}>
        <div className="container mx-auto px-6">
          {/* Title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6" style={{ color: '#C2E2CB' }}>
              Chikitra replaces clinic chaos
              <br />
              with calm, coordinated care.
            </h2>

            <p className="text-lg" style={{ color: '#C2E2CB' }}>
              Smartly automates the busywork, connects every touchpoint,
              <br />
              and helps clinics run smoother - without adding staff or complexity.
            </p>
          </div>

          {/* Feature Cards Layout */}
          <div className="max-w-7xl mx-auto">
            {/* Mobile & Tablet: 3 Icons Left | Ninja Bot Center | 3 Icons Right */}
            <div className="flex items-center justify-center gap-2 md:gap-4 xl:hidden">
              {/* LEFT COLUMN - Icons 1, 2, 3 */}
              <div className="flex flex-col gap-5 md:gap-7">
                {features.slice(0, 3).map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className="feature-icon-btn"
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain"
                    />
                  </button>
                ))}
              </div>

              {/* CENTER - Ninja Bot */}
              <div
                className="floating-ninja-mobile flex-shrink-0"
                style={{ width: '240px', height: '240px' }}
              >
                <img
                  src={ninjaBotOnly}
                  alt="Ninja Bot"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* RIGHT COLUMN - Icons 4, 5, 6 */}
              <div className="flex flex-col gap-5 md:gap-7">
                {features.slice(3, 6).map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className="feature-icon-btn"
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Popup */}
            {activeFeature && (
              <div
                className="feature-popup-overlay xl:hidden"
                onClick={() => setActiveFeature(null)}
              >
                <div
                  className="feature-popup-card"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setActiveFeature(null)}
                    className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                    style={{ color: '#1A9E88' }}
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Card Content */}
                  <div className="relative z-10 text-left">
                    <h3 className="text-xl font-bold mb-3 pr-8 whitespace-pre-line" style={{ color: '#C2E2CB' }}>
                      {features.find(f => f.id === activeFeature)?.title}
                    </h3>
                    <p className="text-base font-normal mb-2" style={{ color: '#C2E2CB' }}>
                      {features.find(f => f.id === activeFeature)?.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#C2E2CB', opacity: 0.8 }}>
                      {features.find(f => f.id === activeFeature)?.description}
                    </p>
                  </div>

                  {/* Bot Image - Bottom Right */}
                  <img
                    src={features.find(f => f.id === activeFeature)?.bot}
                    alt="Feature Bot"
                    className="feature-card-bot"
                    style={features.find(f => f.id === activeFeature)?.botStyle}
                  />
                </div>
              </div>
            )}

            {/* Desktop: 3 Cards Left | Ninja Bot Center | 3 Cards Right */}
            <div className="hidden xl:flex xl:items-center xl:justify-center  relative">
              {/* LEFT COLUMN - Cards 1, 2, 3 */}
              <div className="flex flex-col gap-5 w-[300px]">
                {features.slice(0, 3).map((feature) => (
                  <div
                    key={feature.id}
                    onClick={scrollToBookDemo}
                    className="feature-card text-left"
                    role="button"
                    tabIndex={0}
                  >
                    {/* Arrow Icon */}
                    {/* <img src={featureArrow} alt="Arrow" className="absolute top-4 right-4 w-5 h-5 transition-transform hover:scale-110 object-contain" /> */}

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col text-left pr-10">
                      <h3 className="text-base font-bold mb-1.5 whitespace-pre-line leading-tight" style={{ color: '#C2E2CB' }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm font-normal mb-1.5 pr-2" style={{ color: '#C2E2CB' }}>
                        {feature.subtitle}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: '#C2E2CB', opacity: 0.8 }}>
                        {feature.description}
                      </p>
                    </div>

                    {/* Bot Image - Bottom Right */}
                    <img
                      src={feature.bot}
                      alt={`Feature ${feature.id} Bot`}
                      className="feature-card-bot"
                      style={feature.botStyle}
                    />
                  </div>
                ))}
              </div>

              {/* CENTER - Ninja Bot */}
              <div
                className="floating-ninja flex-shrink-0"
                style={{
                  width: '480px',
                  height: '480px',
                }}
              >
                <img
                  src={ninjaBot}
                  alt="Ninja Bot"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* RIGHT COLUMN - Cards 4, 5, 6 */}
              <div className="flex flex-col gap-5 w-[300px]">
                {features.slice(3, 6).map((feature) => (
                  <div
                    key={feature.id}
                    onClick={scrollToBookDemo}
                    className="feature-card text-left"
                    role="button"
                    tabIndex={0}
                  >
                    {/* Arrow Icon */}
                    {/* <img src={featureArrow} alt="Arrow" className="absolute top-4 right-4 w-5 h-5 transition-transform hover:scale-110 object-contain" /> */}

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col text-left pr-10">
                      <h3 className="text-base font-bold mb-1.5 whitespace-pre-line leading-tight" style={{ color: '#C2E2CB' }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm font-normal mb-1.5 pr-2" style={{ color: '#C2E2CB' }}>
                        {feature.subtitle}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: '#C2E2CB', opacity: 0.8 }}>
                        {feature.description}
                      </p>
                    </div>

                    {/* Bot Image - Bottom Right */}
                    <img
                      src={feature.bot}
                      alt={`Feature ${feature.id} Bot`}
                      className="feature-card-bot"
                      style={feature.botStyle}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
