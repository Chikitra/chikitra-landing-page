import { CheckCircle2 } from "lucide-react";
import botHeart from "@/assets/bot-heart.png";

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
    <section id="why-chikitra" className="section-dark py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Bot Image */}
          <div className="aspect-[4/5] max-h-[600px] rounded-2xl bg-chikitra-dark-card border border-chikitra-dark-card overflow-hidden flex items-center justify-center p-8">
            <img src={botHeart} alt="Chikitra Bot with Heart" className="max-h-full object-contain" />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chikitra-teal mb-6">
              Why Chikitra?
            </h2>
            
            <p className="text-chikitra-mint/70 text-lg mb-2">
              Most clinic tools solve one piece of the problem.
            </p>
            <p className="text-chikitra-teal font-semibold text-lg mb-10">
              Chikitra runs the entire clinic - end to end.
            </p>

            {/* Features List */}
            <div className="space-y-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-chikitra-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-chikitra-mint font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-chikitra-mint/60 text-sm">
                      {feature.description}
                    </p>
                    <p className="text-chikitra-teal font-medium text-sm">
                      {feature.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Line */}
            <div className="border-t border-chikitra-mint/20 pt-8">
              <p className="text-chikitra-teal font-medium mb-2">The bottom line?</p>
              <p className="text-chikitra-mint/70 mb-2">
                Others tools in the marks finds patients. They store data.
              </p>
              <p className="text-chikitra-mint font-bold text-2xl">
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
