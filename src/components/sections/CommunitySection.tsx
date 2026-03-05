import { useState, useRef } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import videoFrame from "@/assets/video-frame.png";
import testimonialVideo1 from "@/assets/WhatsApp Video 2026-02-10 at 21.50.03.mp4";
import thinkingIcon from "@/assets/thinking-icon.png";
import promotionIcon from "@/assets/promotion-icon.png";
import founderAnkeeta from "@/assets/founder-ankeeta.png";
import founderTahreem from "@/assets/founder-tahreem.png";

const testimonials = [
  {
    quote: '"can\'t wait to try the demo"',
    name: "Dr. Random Random",
    degree: "MBBS, MS",
    clinic: "Random Hospital/Clinic",
    video: testimonialVideo1,
  },
  {
    quote: '"Chikitra is doing a great job..."',
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

const CommunitySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      {/* Community / Testimonials Section */}
      <section
        id="community"
        className="py-12 md:py-16 lg:py-20 relative overflow-hidden"
        style={{ backgroundColor: '#C2E2CB' }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-2 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left lg:pl-16">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl mb-1"
                style={{ color: '#043A38' }}
              >
                <span className="font-normal">From the</span>
              </h2>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6"
                style={{ color: '#043A38' }}
              >
                community.
              </h2>
              <p
                className="text-sm md:text-base lg:text-lg mb-3 md:mb-4"
                style={{ color: '#043A38' }}
              >
                What doctors & clinics are saying...
              </p>
              <p className="text-xs md:text-sm italic" style={{ color: '#043A38' }}>Some text</p>
              <p className="text-xs md:text-sm italic" style={{ color: '#043A38' }}>Some text</p>
              <p className="text-xs md:text-sm italic" style={{ color: '#043A38' }}>Some text</p>
            </div>

            {/* Right Column - Video Carousel */}
            <div className="flex flex-col items-center">
              {/* Quote */}
              <p
                className="text-base md:text-lg italic mb-4 md:mb-6 font-medium text-center"
                style={{ color: '#231F20' }}
              >
                {currentTestimonial.quote}
              </p>

              {/* Video Player with Navigation Arrows */}
              <div className="relative flex items-center justify-center w-full mb-4 md:mb-6">
                {/* Left Arrow */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 md:left-4 z-10 p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: '#0A8B80' }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#C2E2CB' }} />
                </button>

                {/* Video Frame with Video Inside */}
                <div className="relative w-64 h-56 md:w-80 md:h-72 lg:w-96 lg:h-80">
                  {currentTestimonial.video ? (
                    <>
                      {/* Video Frame at bottom */}
                      <img
                        src={videoFrame}
                        alt="Video frame"
                        className="w-full h-full object-contain absolute inset-0"
                      />
                      {/* Video on top, positioned in screen area */}
                      <video
                        ref={videoRef}
                        src={currentTestimonial.video}
                        className="absolute object-cover  z-10"
                        style={{
                          top: '10%',
                          left: '9%',
                          width: '82%',
                          height: '79%',
                          borderRadius: '114px',
                          padding: '1rem'
                        }}
                        onEnded={() => setIsPlaying(false)}
                      />
                      {/* Play/Pause Button Overlay */}
                      <button
                        onClick={togglePlayPause}
                        className="absolute inset-0 flex items-center justify-center hover:bg-opacity-30 transition-all z-20"
                        style={{ backgroundColor: isPlaying ? 'transparent' : 'transparent' }}
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {!isPlaying && (
                          <Play className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-lg" fill="white" />
                        )}
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Video Frame */}
                      <img
                        src={videoFrame}
                        alt="Video frame"
                        className="w-full h-full object-contain"
                      />
                      {/* Play/Pause Button Overlay for placeholder */}
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="absolute inset-0 flex items-center justify-center z-20"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isPlaying ? (
                          <Pause className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-lg" fill="white" />
                        ) : (
                          <Play className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-lg" fill="white" />
                        )}
                      </button>
                    </>
                  )}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 md:right-4 z-10 p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: '#0A8B80' }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#C2E2CB' }} />
                </button>
              </div>

              {/* Doctor Info */}
              <div className="text-center mb-4">
                <p className="font-semibold text-sm md:text-base" style={{ color: '#231F20' }}>
                  {currentTestimonial.name} ({currentTestimonial.degree})
                </p>
                <p className="text-sm" style={{ color: '#231F20' }}>
                  {currentTestimonial.clinic}
                </p>
              </div>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsPlaying(false);
                    }}
                    className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: index === currentIndex ? '#0A8B80' : '#7FA587',
                      opacity: index === currentIndex ? 1 : 0.5
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
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
