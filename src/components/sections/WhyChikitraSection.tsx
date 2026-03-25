import workflowIcon from "@/assets/workflow (1).png";
import medicalRecordIcon from "@/assets/medical-record (1).png";
import notifyIcon from "@/assets/notify.png";
import productivityIcon from "@/assets/productivity.png";
import coinsIcon from "@/assets/coins.png";
import panelIcon from "@/assets/panel.png";
import spidermanBot from "@/assets/Spiderman_bot.png";

const comparisonData = [
  {
    category: "Patient Flow",
    icon: workflowIcon,
    typical: "Stops at appointment booking.",
    chikitra: "Manages the entire journey — entry to exit."
  },
  {
    category: "Patient Records",
    icon: medicalRecordIcon,
    typical: "Time wasted typing or digging through files.",
    chikitra: "Patient history ready before they sit down."
  },
  {
    category: "Follow-ups",
    icon: notifyIcon,
    typical: "Depends on staff memory or manual messages.",
    chikitra: "Automatic, timely follow-ups that bring patients back."
  },
  {
    category: "Staff Productivity",
    icon: productivityIcon,
    typical: "Staff stuck with calls, registers, and paperwork.",
    chikitra: "Staff free to focus on patients, not admin."
  },
  {
    category: "Revenue Leakage",
    icon: coinsIcon,
    typical: "No-shows and drop-offs go unnoticed.",
    chikitra: "Data-driven decisions increase revenue and reduce costs."
  },
  {
    category: "Data Control",
    icon: panelIcon,
    typical: "Data scattered across books, phones, and apps.",
    chikitra: "100% private, secure, and always accessible to you."
  }
];

const WhyChikitraSection = () => {
  return (
    <>
      <style>{`
        .comparison-grid {
          grid-template-columns: minmax(120px, 140px) 1fr 1fr;
        }
        @media (min-width: 768px) {
          .comparison-grid {
            grid-template-columns: minmax(160px, 200px) 1fr 1fr;
          }
        }
        @media (min-width: 1280px) {
          .comparison-grid {
            grid-template-columns: minmax(200px, 260px) 1fr 1fr;
          }
        }
        @media (min-width: 1536px) {
          .comparison-grid {
            grid-template-columns: minmax(240px, 300px) 1fr 1fr;
          }
        }
      `}</style>

      <section id="why-chikitra" className="py-16 md:py-20 lg:py-24 relative" style={{ backgroundColor: '#052826' }}>
        <div className="container mx-auto px-4 md:px-6">
          {/* Main Content */}
          <div className="max-w-6xl mx-auto relative">
            {/* Spider-man Bot - Overlapping table */}
            <div className="hidden xl:block absolute z-30" style={{ left: '-90px', top: '-256px', width: '480px', height: '480px' }}>
              <img
                src={spidermanBot}
                alt="Spiderman Bot"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Comparison Table */}
            <div className="rounded-xl md:rounded-2xl xl:rounded-[2.5rem] overflow-hidden relative z-10 flex flex-col" style={{ backgroundColor: '#10443D' }}>
              {/* Header Row */}
              <div className="grid comparison-grid" style={{ backgroundColor: '#10443D' }}>
                {/* Left Column Header - Empty */}
                <div style={{ backgroundColor: '#10443D' }} className="p-3 md:p-4 xl:p-6">
                </div>

                {/* Typical Way Header */}
                <div style={{ backgroundColor: '#0A3531' }} className="p-3 md:p-4 xl:p-6">
                  <h3 className="text-sm md:text-lg xl:text-xl 2xl:text-2xl font-bold text-left" style={{ color: '#D1D3D4' }}>
                    Typical Way
                  </h3>
                </div>

                {/* Chikitra Way Header */}
                <div style={{ backgroundColor: '#10443D' }} className="p-3 md:p-4 xl:p-6">
                  <h3 className="text-sm md:text-lg xl:text-xl 2xl:text-2xl font-bold text-left" style={{ color: '#C2E2CB' }}>
                    The "<span style={{ fontStyle: 'italic' }}>Chikitra</span>" Way
                  </h3>
                </div>
              </div>

              {/* Data Rows */}
              {comparisonData.map((item, index) => (
                <div
                  key={index}
                  className="grid comparison-grid"
                  style={{ backgroundColor: '#10443D' }}
                >
                  {/* Category with Icon */}
                  <div
                    style={{ backgroundColor: '#10443D' }}
                    className="p-3 md:p-4 xl:p-6 md:flex md:items-center xl:justify-end gap-2 md:gap-3 xl:gap-4"
                  >
                    <span className="font-semibold text-xs md:text-sm xl:text-base block md:inline" style={{ color: '#ADC9B4' }}>
                      {item.category}
                    </span>
                    <img
                      src={item.icon}
                      alt={item.category}
                      className="hidden md:inline-block w-6 md:h-6 xl:w-7 xl:h-7 object-contain flex-shrink-0"
                      style={{ opacity: 0.5 }}
                    />
                  </div>

                  {/* Typical Way Description */}
                  <div
                    style={{
                      backgroundColor: '#0A3531',
                    }}
                    className="p-3 md:p-4 xl:p-6 flex items-center relative"
                  >
                    <p className="text-xs md:text-sm xl:text-base font-light" style={{ color: '#D1D3D4' }}>
                      {item.typical}
                    </p>
                    {index < comparisonData.length - 1 && (
                      <div style={{ position: 'absolute', bottom: 0, left: '16px', right: '16px', height: '2px', backgroundColor: '#0F3F37' }} />
                    )}
                  </div>

                  {/* Chikitra Way Description */}
                  <div
                    style={{
                      backgroundColor: '#10443D',
                    }}
                    className="p-3 md:p-4 xl:p-6 flex items-center relative"
                  >
                    <p className="text-xs md:text-sm xl:text-base font-light" style={{ color: '#C2E2CB' }}>
                      {item.chikitra}
                    </p>
                    {index < comparisonData.length - 1 && (
                      <div style={{ position: 'absolute', bottom: 0, left: '16px', right: '16px', height: '2px', backgroundColor: '#0F3F37' }} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChikitraSection;
