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
    quote: '"It\'s organizing chaos without hiring more people"',
    name: "Dr. Yashwanth",
    degree: "",
    clinic: "Bangalore, India",
    video: testimonialVideo1,
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
            <div className="text-center lg:text-left lg:pl-16 flex flex-col justify-center">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl mb-1"
                style={{ color: '#043A38' }}
              >
                <span className="font-semibold">From the</span>
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
              <div className="space-y-1">
                <p
                  className="text-xs md:text-sm italic"
                  style={{ color: '#043A38' }}
                >
                  "The perfect solution for OPD clinics and busy practices…"
                </p>
                <p
                  className="text-xs md:text-sm italic"
                  style={{ color: '#043A38' }}
                >
                  "…Nothing like this existed for clinics before Chikitra."
                </p>
                <p
                  className="text-xs md:text-sm italic"
                  style={{ color: '#043A38' }}
                >
                  "I wish I had Chikitra for my clinic all along…"
                </p>
              </div>
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
                {/* Left Arrow - hidden when only 1 testimonial */}
                {testimonials.length > 1 && (
                  <button
                    onClick={prevTestimonial}
                    className="absolute left-0 md:left-4 z-10 p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: '#0A8B80' }}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#C2E2CB' }} />
                  </button>
                )}

                {/* Video Frame with Video Inside */}
                <div className="relative w-52 h-48 md:w-64 md:h-56 lg:w-80 lg:h-72">
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
                        className="absolute object-cover z-10"
                        style={{
                          top: '17%',
                          left: '13%',
                          width: '74%',
                          height: '65%',
                          borderRadius: '80px',
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

                {/* Right Arrow - hidden when only 1 testimonial */}
                {testimonials.length > 1 && (
                  <button
                    onClick={nextTestimonial}
                    className="absolute right-0 md:right-4 z-10 p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: '#0A8B80' }}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#C2E2CB' }} />
                  </button>
                )}
              </div>

              {/* Doctor Info */}
              <div className="text-center mb-4">
                <p className="font-semibold text-sm md:text-base" style={{ color: '#231F20' }}>
                  {currentTestimonial.name}{currentTestimonial.degree ? ` (${currentTestimonial.degree})` : ''}
                </p>
                <p className="text-sm" style={{ color: '#231F20' }}>
                  {currentTestimonial.clinic}
                </p>
              </div>

              {/* Pagination Dots - hidden when only 1 testimonial */}
              {testimonials.length > 1 && (
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
              )}
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
        {/* Background Illustrations - full section height, behind characters */}
        <img
          src={thinkingIcon}
          alt=""
          className="absolute pointer-events-none select-none h-full"
          style={{ opacity: 0.04, top: 0, left: '28%', transform: 'translateX(-50%)', width: 'auto' }}
        />
        <img
          src={promotionIcon}
          alt=""
          className="absolute pointer-events-none select-none h-full"
          style={{ opacity: 0.04, top: 0, right: '25%', transform: 'translateX(50%)', width: 'auto' }}
        />

        <div className="container mx-auto px-6">
          {/* Main Heading */}
          <div className="text-center mb-8 md:mb-10">
            <p className="text-base md:text-lg lg:text-xl font-semibold mb-2" style={{ color: '#052826' }}>
              <span className="font-extrabold" style={{ color: '#025F5C' }}>C</span>
              <span className="font-extrabold" style={{ color: '#2C9382' }}>hikitra</span>
              <span style={{ color: '#052826' }}> - Your Clinic's All-in-One Automated Management Software</span>
            </p>
            <p className="text-base md:text-lg lg:text-xl font-semibold" style={{ color: '#052826' }}>
              built to transform <span className="font-semibold">your</span> clinic into a <span className="font-bold">smarter one</span>
            </p>
          </div>

          {/* Built by Doctors */}
          <p
            className="text-xl md:text-2xl lg:text-3xl italic text-center mb-10 md:mb-12"
            style={{ color: '#0D514C' }}
          >
            Built by '<span className="font-semibold not-italic text-2xl md:text-3xl lg:text-4xl">Doctors</span>', for '<span className="font-semibold not-italic text-2xl md:text-3xl lg:text-4xl">Doctors</span>'
          </p>

          {/* Founders - Images with text beside them */}
          <div className="relative flex flex-col lg:flex-row items-end justify-center gap-0 lg:gap-0">
            {/* Founder 1 - Dr. Ankeeta Roy with text beside head area */}
            <div className="relative flex items-start z-10">
              {/* Text positioned beside head/face area */}
              <div className="text-right pr-0 -mr-12 pt-4 md:pt-6 lg:pt-8">
                <p className="font-bold text-base md:text-lg lg:text-xl whitespace-nowrap" style={{ color: '#231F20' }}>
                  Dr. Ankeeta Roy, <span className="font-normal italic">a.k.a 'The Big Brain'</span>
                </p>
                <p className="text-base md:text-lg font-semibold" style={{ color: '#231F20' }}>MBBS</p>
                <p className="font-bold text-base md:text-lg lg:text-xl" style={{ color: '#231F20' }}>Founder & CEO</p>
              </div>
              <img
                src={founderAnkeeta}
                alt="Dr. Ankeeta Roy - Founder & CEO"
                className="w-52 md:w-60 lg:w-80 h-80 md:h-88 lg:h-[26rem] object-cover object-top"
                style={{ opacity: 0.89 }}
              />
            </div>

            {/* Founder 2 - Dr. Tahreem Afroz with text beside torso area */}
            <div className="relative flex items-start z-20 -ml-4 md:-ml-8 lg:-ml-12">
              <img
                src={founderTahreem}
                alt="Dr. Tahreem Afroz - Co-founder & CMO"
                className="w-52 md:w-60 lg:w-80 h-80 md:h-88 lg:h-[26rem] object-cover object-top"
                style={{ opacity: 0.89 }}
              />
              {/* Text positioned beside torso/chest area */}
              <div className="text-left pl-4 pt-36 md:pt-44 lg:pt-52">
                <p className="font-bold text-base md:text-lg lg:text-xl whitespace-nowrap" style={{ color: '#231F20' }}>
                  Dr. Tahreem Afroz, <span className="font-normal italic">a.k.a 'Marketing Mojo'</span>
                </p>
                <p className="text-base md:text-lg font-semibold" style={{ color: '#231F20' }}>MBBS</p>
                <p className="font-bold text-base md:text-lg lg:text-xl" style={{ color: '#231F20' }}>Co-founder & CMO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunitySection;
