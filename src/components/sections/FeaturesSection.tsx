import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import featureBot1 from "@/assets/Feature_Bot1.png";
import featureBot2 from "@/assets/Feature_Bot2.png";
import featureBot3 from "@/assets/Feature_Bot3.png";
import featureBot4 from "@/assets/Feature_Bot4.png";
import featureBot5 from "@/assets/Feature_Bot5.png";
import featureBot6 from "@/assets/Feature_Bot6.png";
import ninjaBot from "@/assets/Features-Section_Bot.png";
import iconNotification from "@/assets/Notification.png";
import iconDashboard from "@/assets/dashboard.png";
import iconLiveSync from "@/assets/live_sync.png";
import iconIntake from "@/assets/Intake.png";
import iconCalendar from "@/assets/calendar.png";
import iconPrescription from "@/assets/prescription.png";

const features = [
  {
    id: 1,
    title: "Patient Reminders & Follow-ups",
    subtitle: "Patients never miss follow-ups again",
    description: "Automated reminders, reports, and recalls via WhatsApp, Call & SMS.",
    bot: featureBot1,
    icon: iconNotification
  },
  {
    id: 2,
    title: "Doctor Dashboard & Coordination",
    subtitle: "Know patients before they walk in",
    description: "Past history, medications, labs, visit notes, and today's reason—on one screen.",
    bot: featureBot2,
    icon: iconDashboard
  },
  {
    id: 3,
    title: "Live OPD Appointment List (Doctor View)",
    subtitle: "Know exactly who's next—always",
    description: "Real-time appointment list that updates continuously through the day.",
    bot: featureBot3,
    icon: iconLiveSync
  },
  {
    id: 4,
    title: "AI Receptionist & Smart Intake",
    subtitle: "Your AI receptionist, always early",
    description: "Answers patient queries, captures details, and preps intake—so your team starts informed.",
    bot: featureBot4,
    icon: iconIntake
  },
  {
    id: 5,
    title: "Smart Appointment Booking",
    subtitle: "Appointments, automated end-to-end",
    description: "No double bookings. No conflicts. Just care—handled everything end-to-end.",
    bot: featureBot5,
    icon: iconCalendar
  },
  {
    id: 6,
    title: "All Prescriptions. One Secure Record.",
    subtitle: "Prescribe your way—paper or digital",
    description: "E-prescriptions or handwritten ones. Everything together. Future visits.",
    bot: featureBot6,
    icon: iconPrescription
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
        }
        .feature-card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .feature-card-bot {
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
          width: 50px;
          opacity: 0.21;
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

      <section id="features" className="py-24 relative" style={{ backgroundColor: '#0A4944' }}>
        <div className="container mx-auto px-6">
          {/* Title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: '#C2E2CB' }}>
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
            <div className="flex items-center justify-center gap-3 md:gap-5 xl:hidden">
              {/* LEFT COLUMN - Icons 1, 2, 3 */}
              <div className="flex flex-col gap-4">
                {features.slice(0, 3).map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className="feature-icon-btn"
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-8 h-8 object-contain"
                    />
                  </button>
                ))}
              </div>

              {/* CENTER - Ninja Bot */}
              <div
                className="floating-ninja-mobile flex-shrink-0"
                style={{ width: '180px', height: '180px' }}
              >
                <img
                  src={ninjaBot}
                  alt="Ninja Bot"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* RIGHT COLUMN - Icons 4, 5, 6 */}
              <div className="flex flex-col gap-4">
                {features.slice(3, 6).map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className="feature-icon-btn"
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-8 h-8 object-contain"
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
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 pr-8" style={{ color: '#C2E2CB' }}>
                      {features.find(f => f.id === activeFeature)?.title}
                    </h3>
                    <p className="text-base font-semibold mb-2" style={{ color: '#C2E2CB' }}>
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
                  />
                </div>
              </div>
            )}

            {/* Desktop: 3 Cards Left | Ninja Bot Center | 3 Cards Right */}
            <div className="hidden xl:flex xl:items-center xl:justify-center  relative">
              {/* LEFT COLUMN - Cards 1, 2, 3 */}
              <div className="flex flex-col gap-5 w-[300px]">
                {features.slice(0, 3).map((feature) => (
                  <button
                    key={feature.id}
                    onClick={scrollToBookDemo}
                    className="feature-card"
                  >
                    {/* Arrow Icon */}
                    <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 transition-colors" style={{ color: '#1A9E88' }} />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <h3 className="text-base font-bold mb-1.5" style={{ color: '#C2E2CB' }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm font-semibold mb-1.5" style={{ color: '#C2E2CB' }}>
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
                    />
                  </button>
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
                  <button
                    key={feature.id}
                    onClick={scrollToBookDemo}
                    className="feature-card"
                  >
                    {/* Arrow Icon */}
                    <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 transition-colors" style={{ color: '#1A9E88' }} />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <h3 className="text-base font-bold mb-1.5" style={{ color: '#C2E2CB' }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm font-semibold mb-1.5" style={{ color: '#C2E2CB' }}>
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
                    />
                  </button>
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
