import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Daily Admin Operations & Revenue",
    description: "Other apps helps patients find clinics.",
    highlight: "Chikitra helps clinics run better once patients arrive.",
  },
  {
    title: "Clinic Digitization",
    description: "Other apps digitizes records.",
    highlight: "Chikitra digitizes the workflow.",
  },
  {
    title: "Automated Workflow",
    description: "Traditional tools manage schedules and billing.",
    highlight: "Chikitra manages outcomes.",
  },
];

const WhyChikitraSection = () => {
  return (
    <section id="why-chikitra" className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#052826' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left - Bot Image - Center on tablet */}
          <div className="aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] max-h-[500px] md:max-h-[550px] lg:max-h-[600px] rounded-2xl bg-chikitra-dark-card border border-chikitra-dark-card overflow-hidden flex items-center justify-center p-8 md:mx-auto lg:mx-0 md:max-w-md lg:max-w-none">
            <div className="text-chikitra-mint/20 text-sm text-center">
              Image Placeholder
            </div>
          </div>

          {/* Right - Content - Center on tablet */}
          <div className="md:text-center lg:text-left md:mx-auto lg:mx-0 md:max-w-2xl lg:max-w-none">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8" style={{ color: '#C2E2CB' }}>
              Why Chikitra?
            </h2>

            <p className="text-sm md:text-base mb-1" style={{ color: '#859F8B' }}>
              Most clinic tools solve one piece of the problem.
            </p>
            <p className="font-semibold text-sm md:text-base mb-8 md:mb-10 lg:mb-12" style={{ color: '#859F8B' }}>
              Chikitra runs the entire clinic - end to end.
            </p>

            {/* Features List */}
            <div className="space-y-6 md:space-y-8 lg:space-y-10 mb-10 md:mb-12 lg:mb-16">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3 md:gap-4 md:justify-center lg:justify-start md:max-w-xl md:mx-auto lg:mx-0">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" style={{ color: '#C2E2CB' }} />
                  <div className="md:text-center lg:text-left">
                    <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3" style={{ color: '#C2E2CB' }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base mb-1" style={{ color: '#9FBCA5' }}>
                      {feature.description}
                    </p>
                    <p className="font-semibold text-sm md:text-base" style={{ color: '#9FBCA5' }}>
                      {feature.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Line */}
            <div>
              <p className="text-sm md:text-base mb-2 md:mb-3" style={{ color: '#C2E2CB' }}>The bottom line?</p>
              <p className="text-sm md:text-base mb-3 md:mb-4" style={{ color: '#C2E2CB' }}>
                Others tools in the marks finds patients. They store data.
              </p>
              <p className="font-bold text-2xl md:text-3xl lg:text-4xl" style={{ color: '#E6F3E6' }}>
                Chikitra runs the clinic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChikitraSection;
