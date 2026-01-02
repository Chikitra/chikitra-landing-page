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
    <section id="why-chikitra" className="py-24" style={{ backgroundColor: '#052826' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Bot Image */}
          <div className="aspect-[4/5] max-h-[600px] rounded-2xl bg-chikitra-dark-card border border-chikitra-dark-card overflow-hidden flex items-center justify-center p-8">
            <div className="text-chikitra-mint/20 text-sm text-center">
              Image Placeholder
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8" style={{ color: '#C2E2CB' }}>
              Why Chikitra?
            </h2>

            <p className="text-base mb-1" style={{ color: '#859F8B' }}>
              Most clinic tools solve one piece of the problem.
            </p>
            <p className="font-semibold text-base mb-12" style={{ color: '#859F8B' }}>
              Chikitra runs the entire clinic - end to end.
            </p>

            {/* Features List */}
            <div className="space-y-10 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#C2E2CB' }} />
                  <div>
                    <h3 className="font-semibold text-xl mb-3" style={{ color: '#C2E2CB' }}>
                      {feature.title}
                    </h3>
                    <p className="text-base mb-1" style={{ color: '#9FBCA5' }}>
                      {feature.description}
                    </p>
                    <p className="font-semibold text-base" style={{ color: '#9FBCA5' }}>
                      {feature.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Line */}
            <div>
              <p className="text-base mb-3" style={{ color: '#C2E2CB' }}>The bottom line?</p>
              <p className="text-base mb-4" style={{ color: '#C2E2CB' }}>
                Others tools in the marks finds patients. They store data.
              </p>
              <p className="font-bold text-3xl md:text-4xl" style={{ color: '#E6F3E6' }}>
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
