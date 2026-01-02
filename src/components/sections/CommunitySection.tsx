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
        className="text-base md:text-lg italic mb-3 font-medium"
        style={{ color: '#231F20' }}
      >
        {testimonial.quote}
      </p>
      
      {/* Video Frame - Larger size */}
      <div className="relative w-48 h-44 md:w-56 md:h-52 lg:w-64 lg:h-60 mb-3">
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
            <Pause className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg" fill="white" />
          ) : (
            <Play className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg" fill="white" />
          )}
        </button>
      </div>
      
      {/* Doctor Info */}
      <p className="font-semibold text-sm md:text-base" style={{ color: '#231F20' }}>
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
        className="py-12 md:py-16 relative overflow-hidden"
        style={{ backgroundColor: '#C2E2CB' }}
      >
        {/* Background Illustrations at 2% opacity */}
        <img 
          src={thinkingIcon} 
          alt="" 
          className="absolute left-4 bottom-4 w-40 h-40 md:w-56 md:h-56 pointer-events-none select-none"
          style={{ opacity: 0.02 }}
        />
        <img 
          src={promotionIcon} 
          alt="" 
          className="absolute right-8 top-8 w-36 h-36 md:w-48 md:h-48 pointer-events-none select-none"
          style={{ opacity: 0.02 }}
        />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column - Headline */}
            <div className="lg:col-span-3">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl mb-1"
                style={{ color: '#043A38' }}
              >
                <span className="font-normal">From the</span>
              </h2>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
                style={{ color: '#043A38' }}
              >
                community.
              </h2>
              <p 
                className="text-sm md:text-base mb-3"
                style={{ color: '#043A38' }}
              >
                What doctors & clinics are saying...
              </p>
              <p className="text-xs md:text-sm italic" style={{ color: '#043A38' }}>Some text</p>
              <p className="text-xs md:text-sm italic" style={{ color: '#043A38' }}>Some text</p>
              <p className="text-xs md:text-sm italic" style={{ color: '#043A38' }}>Some text</p>
            </div>

            {/* Right Column - Video Testimonials */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
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
        className="pt-12 md:pt-16 pb-0 relative overflow-hidden"
        style={{ backgroundColor: '#C4D6C8' }}
      >
        {/* Background Illustrations - Very large, almost filling section */}
        <img 
          src={thinkingIcon} 
          alt="" 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[40vw] md:w-[35vw] lg:w-[30vw] max-w-[500px] h-auto pointer-events-none select-none"
          style={{ opacity: 0.02 }}
        />
        <img 
          src={promotionIcon} 
          alt="" 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[40vw] md:w-[35vw] lg:w-[30vw] max-w-[500px] h-auto pointer-events-none select-none"
          style={{ opacity: 0.02 }}
        />

        <div className="container mx-auto px-6">
          {/* Main Heading */}
          <div className="text-center mb-8 md:mb-10">
            <p className="text-base md:text-lg lg:text-xl mb-2" style={{ color: '#052826' }}>
              <span className="font-extrabold" style={{ color: '#008080' }}>C</span>
              <span className="font-extrabold" style={{ color: '#3ABDAA' }}>hikitra</span>
              <span style={{ color: '#052826' }}> - India's first AI-powered clinic management tool</span>
            </p>
            <p className="text-base md:text-lg lg:text-xl" style={{ color: '#052826' }}>
              built to transform <span className="font-semibold">your</span> clinic into a <span className="font-bold">smarter one</span>
            </p>
          </div>

          {/* Built by Doctors */}
          <p 
            className="text-lg md:text-xl lg:text-2xl italic text-center mb-10 md:mb-12"
            style={{ color: '#0D514C' }}
          >
            Built by '<span className="font-semibold not-italic">Doctors</span>', for '<span className="font-semibold not-italic">Doctors</span>'
          </p>

          {/* Founders - Images with text beside them */}
          <div className="relative flex flex-col lg:flex-row items-end justify-center gap-8 lg:gap-12">
            {/* Founder 1 - Dr. Ankeeta Roy with text beside head area */}
            <div className="relative flex items-start z-10">
              {/* Text positioned beside head/face area */}
              <div className="text-right pr-4 pt-4 md:pt-6 lg:pt-8">
                <p className="font-bold text-base md:text-lg lg:text-xl" style={{ color: '#231F20' }}>
                  Dr. Ankeeta Roy, <span className="font-normal italic">a.k.a 'The Big Brain'</span>
                </p>
                <p className="text-sm md:text-base" style={{ color: '#231F20' }}>MBBS</p>
                <p className="font-semibold text-sm md:text-base lg:text-lg" style={{ color: '#231F20' }}>Founder & CEO</p>
              </div>
              <img 
                src={founderAnkeeta} 
                alt="Dr. Ankeeta Roy - Founder & CEO" 
                className="w-48 md:w-56 lg:w-72 h-72 md:h-80 lg:h-96 object-cover object-top"
                style={{ opacity: 0.89 }}
              />
            </div>

            {/* Founder 2 - Dr. Tahreem Afroz with text beside torso area */}
            <div className="relative flex items-start z-20">
              <img 
                src={founderTahreem} 
                alt="Dr. Tahreem Afroz - Co-founder & CMO" 
                className="w-48 md:w-56 lg:w-72 h-72 md:h-80 lg:h-96 object-cover object-top"
                style={{ opacity: 0.89 }}
              />
              {/* Text positioned beside torso/chest area */}
              <div className="text-left pl-4 pt-32 md:pt-40 lg:pt-48">
                <p className="font-bold text-base md:text-lg lg:text-xl" style={{ color: '#231F20' }}>
                  Dr. Tahreem Afroz, <span className="font-normal italic">a.k.a 'Marketing Mojo'</span>
                </p>
                <p className="text-sm md:text-base" style={{ color: '#231F20' }}>MBBS</p>
                <p className="font-semibold text-sm md:text-base lg:text-lg" style={{ color: '#231F20' }}>Co-founder & CMO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunitySection;
