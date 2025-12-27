import { useState } from "react";
import { Play, Pause } from "lucide-react";

const testimonials = [
  {
    quote: '"Chikitra is doing a great job..."',
    name: "Dr. Random Random",
    credentials: "MBBS, MS",
    clinic: "Random Hospital/Clinic",
  },
  {
    quote: '"can\'t wait to try the demo"',
    name: "Dr. Random Random",
    credentials: "MBBS, MS",
    clinic: "Random Hospital/Clinic",
  },
  {
    quote: '"Chikitra solves the big problem"',
    name: "Dr. Random Random",
    credentials: "MBBS, MS",
    clinic: "Random Hospital/Clinic",
  },
];

const VideoCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Quote */}
      <p className="text-chikitra-dark/80 italic text-center mb-4 text-sm md:text-base">
        {testimonial.quote}
      </p>
      
      {/* Video Card */}
      <div className="testimonial-video-card w-full aspect-square max-w-[200px] mb-4">
        <div className="w-full h-full bg-chikitra-dark-card flex items-center justify-center relative">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full border-2 border-chikitra-mint/50 flex items-center justify-center hover:border-chikitra-mint transition-colors group"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-chikitra-mint/70 group-hover:text-chikitra-mint" />
            ) : (
              <Play className="w-6 h-6 text-chikitra-mint/70 group-hover:text-chikitra-mint ml-1" />
            )}
          </button>
        </div>
      </div>
      
      {/* Doctor Info */}
      <div className="text-center">
        <p className="font-semibold text-chikitra-dark text-sm">{testimonial.name}</p>
        <p className="text-chikitra-dark/60 text-xs">{testimonial.credentials}</p>
        <p className="text-chikitra-dark/60 text-xs">{testimonial.clinic}</p>
      </div>
    </div>
  );
};

const CommunitySection = () => {
  return (
    <section id="community" className="section-light py-24 relative overflow-hidden">
      {/* Subtle background watermark */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute left-10 top-20 text-[200px]">🤖</div>
        <div className="absolute right-10 bottom-20 text-[200px] transform -scale-x-100">🤖</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section - Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-24">
          {/* Left Text */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-chikitra-dark mb-2">
              From the
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-chikitra-teal mb-6">
              community.
            </h2>
            <p className="text-chikitra-dark/70 mb-4">
              What doctors & clinics are saying...
            </p>
            <div className="space-y-1">
              <p className="text-chikitra-teal italic text-sm">Some text</p>
              <p className="text-chikitra-teal italic text-sm">Some text</p>
              <p className="text-chikitra-teal italic text-sm">Some text</p>
            </div>
          </div>

          {/* Video Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <VideoCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>

        {/* About Section - Founders */}
        <div id="about" className="text-center mb-16">
          <p className="text-lg mb-2">
            <span className="text-chikitra-teal font-semibold underline">Chikitra</span>
            {" "}- India's first AI-powered clinic management tool
          </p>
          <p className="text-lg text-chikitra-dark/80 mb-6">
            built to transform <span className="font-semibold">your</span> clinic into a <span className="font-semibold">smarter one</span>
          </p>
          <p className="text-2xl italic text-chikitra-dark">
            Built by '<span className="text-chikitra-teal font-semibold">Doctors</span>', for '<span className="text-chikitra-teal font-semibold">Doctors</span>'
          </p>
        </div>

        {/* Founders */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Founder 1 */}
          <div className="flex items-end gap-4">
            <div className="text-right">
              <p className="font-bold text-chikitra-dark">Dr. Ankeeta Roy,</p>
              <p className="italic text-chikitra-dark/70 text-sm">a.k.a 'The Big Brain'</p>
              <p className="text-chikitra-dark/80">MBBS</p>
              <p className="font-semibold text-chikitra-dark">Founder & CEO</p>
            </div>
            <div className="w-40 h-56 rounded-b-full bg-chikitra-mint-card overflow-hidden image-pop">
              <div className="w-full h-full flex items-center justify-center text-chikitra-dark/20 text-xs">
                Photo
              </div>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="flex items-end gap-4">
            <div className="w-40 h-56 rounded-b-full bg-chikitra-mint-card overflow-hidden image-pop">
              <div className="w-full h-full flex items-center justify-center text-chikitra-dark/20 text-xs">
                Photo
              </div>
            </div>
            <div className="text-left">
              <p className="font-bold text-chikitra-dark">Dr. Tahreem Afroz,</p>
              <p className="italic text-chikitra-dark/70 text-sm">a.k.a 'Marketing Mojo'</p>
              <p className="text-chikitra-dark/80">MBBS</p>
              <p className="font-semibold text-chikitra-dark">Co-founder & CMO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
