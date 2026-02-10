import { ArrowUpRight } from "lucide-react";
import featureBot1 from "@/assets/Feature_Bot1.png";
import featureBot2 from "@/assets/Feature_Bot2.png";
import featureBot3 from "@/assets/Feature_Bot3.png";
import featureBot4 from "@/assets/Feature_Bot4.png";
import featureBot5 from "@/assets/Feature_Bot5.png";
import featureBot6 from "@/assets/Feature_Bot6.png";
import ninjaBot from "@/assets/Features-Section_Bot.png";

const features = [
  {
    id: 1,
    title: "Patient Reminders & Follow-ups",
    subtitle: "Patients never miss follow-ups again",
    description: "Automated reminders, reports, and recalls via WhatsApp, Call & SMS.",
    bot: featureBot1
  },
  {
    id: 2,
    title: "Doctor Dashboard & Coordination",
    subtitle: "Know patients before they walk in",
    description: "Past history, medications, labs, visit notes, and today's reason—on one screen.",
    bot: featureBot2
  },
  {
    id: 3,
    title: "Live OPD Appointment List (Doctor View)",
    subtitle: "Know exactly who's next—always",
    description: "Real-time appointment list that updates continuously through the day.",
    bot: featureBot3
  },
  {
    id: 4,
    title: "AI Receptionist & Smart Intake",
    subtitle: "Your AI receptionist, always early",
    description: "Answers patient queries, captures details, and preps intake—so your team starts informed.",
    bot: featureBot4
  },
  {
    id: 5,
    title: "Smart Appointment Booking",
    subtitle: "Appointments, automated end-to-end",
    description: "No double bookings. No conflicts. Just care—handled everything end-to-end.",
    bot: featureBot5
  },
  {
    id: 6,
    title: "All Prescriptions. One Secure Record.",
    subtitle: "Prescribe your way—paper or digital",
    description: "E-prescriptions or handwritten ones. Everything together. Future visits.",
    bot: featureBot6
  }
];

const FeaturesSection = () => {
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
        .floating-ninja {
          animation: float 4s ease-in-out infinite;
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
            {/* Mobile & Tablet: Horizontal Scrollable */}
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide xl:hidden">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={scrollToBookDemo}
                  className="feature-card flex-none w-[80vw] md:w-[45vw] snap-center"
                >
                  {/* Arrow Icon */}
                  <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 transition-colors" style={{ color: '#1A9E88' }} />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#C2E2CB' }}>
                      {feature.title}
                    </h3>
                    <p className="text-base font-semibold mb-2" style={{ color: '#C2E2CB' }}>
                      {feature.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#C2E2CB', opacity: 0.8 }}>
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
