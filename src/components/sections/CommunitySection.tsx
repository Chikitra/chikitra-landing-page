import { useState } from "react";
import { Play, Pause } from "lucide-react";
import videoFrame from "@/assets/video-frame.png";
import thinkingIcon from "@/assets/thinking-icon.png";
import promotionIcon from "@/assets/promotion-icon.png";
import founderAnkeeta from "@/assets/founder-ankeeta.png";
import founderTahreem from "@/assets/founder-tahreem.png";

const testimonials = [
  {
    quote: '"Chikitra is doing a great job..."',
    name: "Dr. Random Random",
    degree: "MBBS, MS",
    clinic: "Random Hospital/Clinic",
  },
  {
    quote: '"can\'t wait to try the demo"',
    name: "Dr. Random Random",
    degree: "MBBS, MS",
    clinic: "Random Hospital/Clinic",
  },
  {
    quote: '"Chikitra solves the big problem"',
    name: "Dr. Random Random",
    degree: "MBBS, MS",
    clinic: "Random Hospital/Clinic",
  },
];

const VideoCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col items-center text-center">
      {/* Quote */}
      <p 
        className="text-base italic mb-4 font-medium"
        style={{ color: '#231F20' }}
      >
        {testimonial.quote}
      </p>
      
      {/* Video Frame */}
      <div className="relative w-32 h-28 mb-4">
        <img 
          src={videoFrame} 
          alt="Video frame" 
          className="w-full h-full object-contain"
        />
        {/* Play/Pause Button Overlay */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute inset-0 flex items-center justify-center"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 text-white drop-shadow-lg" fill="white" />
          ) : (
            <Play className="w-8 h-8 text-white drop-shadow-lg" fill="white" />
          )}
        </button>
      </div>
      
      {/* Doctor Info */}
      <p className="font-semibold text-sm" style={{ color: '#231F20' }}>
        {testimonial.name}
      </p>
      <p className="text-sm" style={{ color: '#231F20' }}>
        {testimonial.degree}
      </p>
      <p className="text-sm" style={{ color: '#231F20' }}>
        {testimonial.clinic}
      </p>
    </div>
  );
};

const CommunitySection = () => {
  return (
    <>
      {/* Community / Testimonials Section */}
      <section 
        id="community" 
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: '#C2E2CB' }}
      >
        {/* Background Illustrations at 2% opacity */}
        <img 
          src={thinkingIcon} 
          alt="" 
          className="absolute left-8 bottom-8 w-48 h-48 pointer-events-none select-none"
          style={{ opacity: 0.02 }}
        />
        <img 
          src={promotionIcon} 
          alt="" 
          className="absolute right-12 top-12 w-40 h-40 pointer-events-none select-none"
          style={{ opacity: 0.02 }}
        />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column - Headline */}
            <div className="lg:col-span-3">
              <h2 
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: '#043A38' }}
              >
                From the
              </h2>
              <h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: '#043A38' }}
              >
                community.
              </h2>
              <p 
                className="text-base mb-4"
                style={{ color: '#043A38' }}
              >
                What doctors & clinics are saying...
              </p>
              <p className="text-sm italic" style={{ color: '#043A38' }}>Some text</p>
              <p className="text-sm italic" style={{ color: '#043A38' }}>Some text</p>
              <p className="text-sm italic" style={{ color: '#043A38' }}>Some text</p>
            </div>

            {/* Right Column - Video Testimonials */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <VideoCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section 
        id="about" 
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: '#C4D6C8' }}
      >
        {/* Background Illustrations at 2% opacity */}
        <img 
          src={thinkingIcon} 
          alt="" 
          className="absolute left-4 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none select-none"
          style={{ opacity: 0.02 }}
        />
        <img 
          src={promotionIcon} 
          alt="" 
          className="absolute right-8 top-20 w-48 h-48 pointer-events-none select-none rotate-12"
          style={{ opacity: 0.02 }}
        />

        <div className="container mx-auto px-6">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl mb-2" style={{ color: '#052826' }}>
              <span style={{ color: '#008080' }}>C</span>
              <span style={{ color: '#3ABDAA' }}>hikitra</span>
              <span style={{ color: '#052826' }}> - India's first AI-powered clinic management tool</span>
            </p>
            <p className="text-lg md:text-xl" style={{ color: '#052826' }}>
              built to transform <span className="font-semibold">your</span> clinic into a <span className="font-bold">smarter one</span>
            </p>
          </div>

          {/* Built by Doctors */}
          <p 
            className="text-xl md:text-2xl italic text-center mb-16"
            style={{ color: '#0D514C' }}
          >
            Built by '<span className="font-semibold not-italic">Doctors</span>', for '<span className="font-semibold not-italic">Doctors</span>'
          </p>

          {/* Founders */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
            {/* Founder 1 - Dr. Ankeeta Roy */}
            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 z-10">
              <div className="text-center lg:text-right order-2 lg:order-1">
                <p className="font-bold text-base" style={{ color: '#231F20' }}>
                  Dr. Ankeeta Roy, <span className="font-normal italic">a.k.a 'The Big Brain'</span>
                </p>
                <p className="text-sm" style={{ color: '#231F20' }}>MBBS</p>
                <p className="font-semibold text-sm" style={{ color: '#231F20' }}>Founder & CEO</p>
              </div>
              <img 
                src={founderAnkeeta} 
                alt="Dr. Ankeeta Roy - Founder & CEO" 
                className="w-48 md:w-64 lg:w-72 h-auto object-contain order-1 lg:order-2"
                style={{ opacity: 0.89 }}
              />
            </div>

            {/* Founder 2 - Dr. Tahreem Afroz */}
            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:-ml-16 z-20">
              <img 
                src={founderTahreem} 
                alt="Dr. Tahreem Afroz - Co-founder & CMO" 
                className="w-48 md:w-56 lg:w-64 h-auto object-contain"
                style={{ opacity: 0.89 }}
              />
              <div className="text-center lg:text-left">
                <p className="font-bold text-base" style={{ color: '#231F20' }}>
                  Dr. Tahreem Afroz, <span className="font-normal italic">a.k.a 'Marketing Mojo'</span>
                </p>
                <p className="text-sm" style={{ color: '#231F20' }}>MBBS</p>
                <p className="font-semibold text-sm" style={{ color: '#231F20' }}>Co-founder & CMO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunitySection;
