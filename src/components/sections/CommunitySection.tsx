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
      {/* =============================================
          MOBILE / TABLET VERSION (hidden on lg+)
         ============================================= */}
      <section
        id="community"
        className="lg:hidden py-12 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #042825 0%, #5B736A 55%, #C0E1CA 100%)',
        }}
      >
        <div className="container mx-auto px-6">
          {/* TESTIMONIALS pill */}
          <div className="flex justify-center mb-10">
            <span
              className="px-5 py-1.5 text-xs tracking-widest font-semibold uppercase"
              style={{
                border: '1.5px solid #01665E',
                borderRadius: '999px',
                color: '#C0E1CA',
                letterSpacing: '0.18em',
              }}
            >
              Testimonials
            </span>
          </div>

          {/* Heading — left-aligned */}
          <div className="mb-8">
            <h2
              className="text-4xl sm:text-5xl font-normal leading-tight"
              style={{ color: '#B6DCBE' }}
            >
              From the
            </h2>
            <h2
              className="text-5xl sm:text-6xl font-extrabold leading-none mb-5"
              style={{ color: '#B6DCBE' }}
            >
              community.
            </h2>
            <p
              className="text-sm"
              style={{ color: '#B6DCBE', opacity: 0.85 }}
            >
              What doctors &amp; clinics are saying…
            </p>
          </div>

          {/* Quote card — glass chip, more breathing room above, tight below to attach to video */}
          <div
            className="mt-10 mb-3 mx-auto text-center"
            style={{
              background: 'rgba(255,255,255,0.10)',
              backdropFilter: 'blur(8px)',
              borderRadius: '14px',
              padding: '14px 18px',
              borderLeft: '3px solid #0A8B80',
              maxWidth: '92%',
            }}
          >
            {/* Decorative open-quote */}
            <span
              className="block leading-none mb-1"
              style={{ fontSize: '2rem', color: '#0A8B80', fontFamily: 'Georgia, serif', lineHeight: 1 }}
            >
              &ldquo;
            </span>
            <p
              className="text-sm sm:text-base font-bold text-center leading-snug"
              style={{ color: '#0D0D0D' }}
            >
              It&rsquo;s organizing chaos without hiring more people
            </p>
          </div>

          {/* Video Player */}
          <div className="relative flex items-center justify-center w-full mb-5">
            {testimonials.length > 1 && (
              <button
                onClick={prevTestimonial}
                className="absolute left-0 z-10 p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#0A8B80' }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" style={{ color: '#C0E1CA' }} />
              </button>
            )}

            {/* Video Frame */}
            <div className="relative w-48 h-44 sm:w-56 sm:h-52">
              {currentTestimonial.video ? (
                <>
                  <img
                    src={videoFrame}
                    alt="Video frame"
                    className="w-full h-full object-contain absolute inset-0"
                  />
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
                  <button
                    onClick={togglePlayPause}
                    className="absolute inset-0 flex items-center justify-center transition-all z-20"
                    style={{ backgroundColor: 'transparent' }}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {!isPlaying && (
                      <Play className="w-12 h-12 text-white drop-shadow-lg" fill="white" />
                    )}
                  </button>
                </>
              ) : (
                <>
                  <img
                    src={videoFrame}
                    alt="Video frame"
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute inset-0 flex items-center justify-center z-20"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? (
                      <Pause className="w-12 h-12 text-white drop-shadow-lg" fill="white" />
                    ) : (
                      <Play className="w-12 h-12 text-white drop-shadow-lg" fill="white" />
                    )}
                  </button>
                </>
              )}
            </div>

            {testimonials.length > 1 && (
              <button
                onClick={nextTestimonial}
                className="absolute right-0 z-10 p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#0A8B80' }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" style={{ color: '#C0E1CA' }} />
              </button>
            )}
          </div>

          {/* Doctor Info */}
          <div className="text-center mb-4">
            <p className="font-normal text-sm sm:text-base" style={{ color: '#231F20' }}>
              {currentTestimonial.name}{currentTestimonial.degree ? ` (${currentTestimonial.degree})` : ''}
            </p>
            <p className="text-sm" style={{ color: '#231F20' }}>
              {currentTestimonial.clinic}
            </p>
          </div>

          {/* Pagination Dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 pb-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setCurrentIndex(index); setIsPlaying(false); }}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: index === currentIndex ? '#0A8B80' : '#7FA587',
                    opacity: index === currentIndex ? 1 : 0.5,
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =============================================
          DESKTOP / LAPTOP VERSION (hidden below lg)
         ============================================= */}
      <section
        id="community-desktop"
        className="hidden lg:block py-20 relative overflow-hidden"
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
                What doctors &amp; clinics are saying...
              </p>
              <div className="space-y-1">
                <p className="text-xs md:text-sm italic" style={{ color: '#043A38' }}>
                  "The perfect solution for OPD clinics and busy practices…"
                </p>
                <p className="text-xs md:text-sm italic" style={{ color: '#043A38' }}>
                  "…Nothing like this existed for clinics before Chikitra."
                </p>
                <p className="text-xs md:text-sm italic" style={{ color: '#043A38' }}>
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

                <div className="relative w-52 h-48 md:w-64 md:h-56 lg:w-80 lg:h-72">
                  {currentTestimonial.video ? (
                    <>
                      <img
                        src={videoFrame}
                        alt="Video frame"
                        className="w-full h-full object-contain absolute inset-0"
                      />
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
                      <button
                        onClick={togglePlayPause}
                        className="absolute inset-0 flex items-center justify-center hover:bg-opacity-30 transition-all z-20"
                        style={{ backgroundColor: isPlaying ? 'transparent' : 'transparent' }}
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      >
                        {!isPlaying && (
                          <Play className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-lg" fill="white" />
                        )}
                      </button>
                    </>
                  ) : (
                    <>
                      <img
                        src={videoFrame}
                        alt="Video frame"
                        className="w-full h-full object-contain"
                      />
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="absolute inset-0 flex items-center justify-center z-20"
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
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

              {testimonials.length > 1 && (
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => { setCurrentIndex(index); setIsPlaying(false); }}
                      className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: index === currentIndex ? '#0A8B80' : '#7FA587',
                        opacity: index === currentIndex ? 1 : 0.5,
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

      {/* About Us Section — MOBILE/TABLET (hidden on lg+) */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          🎛  MOBILE ABOUT-US PARAMS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {(() => {
        const t = {
          /* ── SECTION SPACING ── */
          sectionPaddingX: '24px',      // left/right padding of the whole section content
          sectionMaxWidth: '480px',     // max-width cap for wide tablets

          /* ── TAGLINE (Chikitra - …smarter one) ── */
          taglineSize: '1.2rem',        // font-size of the tagline paragraph
          taglineFontWeight: '400',     // weight of the non-bold parts ('400' = normal)
          taglineLineHeight: '1.55',    // line-height for comfortable reading
          taglineMarginBottom: '40px',  // spacing below the tagline

          /* ── "Built by 'Doctors', for 'Doctors'" ── */
          builtBySize: '1.25rem',       // base font-size of the italic line
          builtByBoldSize: '1.5rem',    // font-size of the bold 'Doctors' words
          builtByPaddingY: '20px',      // vertical breathing room above/below this line

          /* ── FOUNDER 1 (Dr. Ankeeta — text LEFT, image RIGHT) ── */
          ankeeta: {
            widthPct: '52%',            // image column width (text column fills the rest)
            heightClamp: 'clamp(230px, 58vw, 330px)', // image height: min / fluid / max
            objectPosition: 'top',      // crop anchor: 'top' | 'center' | 'bottom'
            textPaddingTop: '28px',     // nudge text block down to align with face area
            textTranslateX: '50px',      // nudge text block horizontally (positive = push right towards image)
            textAlign: 'right',         // align text lines ('left', 'right', 'center')
            imageTranslateX: '12px',    // nudge image horizontally (positive = push right towards edge)
            nameSize: '1.15rem',        // "Dr. Ankeeta Roy," font-size
            akaSize: '1.0rem',          // italic a.k.a line font-size
            detailSize: '1.15rem',      // MBBS / Founder & CEO font-size
          },

          /* ── FOUNDER 2 (Dr. Tahreem — image LEFT, text RIGHT) ── */
          tahreem: {
            widthPct: '52%',            // image column width (text column fills the rest)
            heightClamp: 'clamp(230px, 58vw, 330px)', // image height: min / fluid / max
            objectPosition: 'top',      // crop anchor: 'top' | 'center' | 'bottom'
            textPaddingTop: '10px',     // nudge text block down to align with torso area
            textTranslateX: '-10px',      // nudge text block horizontally (negative = push left towards image)
            textAlign: 'left',          // align text lines ('left', 'right', 'center')
            imageTranslateX: '-12px',   // nudge image horizontally (negative = push left towards edge)
            nameSize: '1.15rem',        // "Dr. Tahreem Afroz," font-size
            akaSize: '1.0rem',          // italic a.k.a line font-size
            detailSize: '1.15rem',      // MBBS / Co-founder & CMO font-size
          },

          /* ── BG ICON 1 (thinkingIcon — upper area) ── */
          bgIcon1: {
            opacity: 0.07,              // how faint the icon is
            top: '25.78%',                 // vertical position from section top
            left: '30%',               // horizontal position from left edge
            width: '65%',              // icon size as % of section width
          },

          /* ── BG ICON 2 (promotionIcon — lower area) ── */
          bgIcon2: {
            opacity: 0.07,              // how faint the icon is
            top: '65%',                 // vertical position from section top
            right: '10%',              // horizontal position from right edge
            width: '65%',              // icon size as % of section width
          },
        };
        return (
          <section
            id="about"
            className="lg:hidden pt-10 pb-0 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #C0E1CA 0%, #C3D5C7 100%)' }}
          >
            {/* BG ICON 1 — thinkingIcon (upper) */}
            <img
              src={thinkingIcon}
              alt=""
              className="absolute pointer-events-none select-none"
              style={{ opacity: t.bgIcon1.opacity, top: t.bgIcon1.top, left: t.bgIcon1.left, width: t.bgIcon1.width, height: 'auto' }}
            />
            {/* BG ICON 2 — promotionIcon (lower) */}
            <img
              src={promotionIcon}
              alt=""
              className="absolute pointer-events-none select-none"
              style={{ opacity: t.bgIcon2.opacity, top: t.bgIcon2.top, right: t.bgIcon2.right, width: t.bgIcon2.width, height: 'auto' }}
            />

            <div
              className="relative z-10 mx-auto"
              style={{ paddingLeft: t.sectionPaddingX, paddingRight: t.sectionPaddingX, maxWidth: t.sectionMaxWidth }}
            >
              {/* ABOUT US pill — size kept as-is intentionally */}
              <div className="flex justify-center mb-7">
                <span
                  className="px-5 py-1.5 text-xs tracking-widest font-semibold uppercase"
                  style={{ border: '1.5px solid #4A7A6A', borderRadius: '999px', color: '#231F20', letterSpacing: '0.18em' }}
                >
                  About Us
                </span>
              </div>

              {/* Tagline — only "smarter one" is bold, rest is normal weight */}
              <div className="text-center" style={{ marginBottom: t.taglineMarginBottom }}>
                <p style={{ color: '#052826', fontSize: t.taglineSize, fontWeight: t.taglineFontWeight, lineHeight: t.taglineLineHeight }}>
                  <span style={{ fontWeight: 800, color: '#025F5C' }}>C</span>
                  <span style={{ fontWeight: 800, color: '#2C9382' }}>hikitra</span>
                  <span> - Your Clinic's All-in-One Automated Management Software built to transform your clinic into a </span>
                  <span style={{ fontWeight: 700 }}>smarter one</span>
                </p>
              </div>

              {/* Founder 1 — Dr. Ankeeta Roy: text LEFT, image RIGHT */}
              <div className="relative flex items-start justify-between mt-6">
                {/* Text block — left */}
                <div
                  className="flex flex-col justify-start flex-shrink-0"
                  style={{ maxWidth: `calc(100% - ${t.ankeeta.widthPct})`, paddingTop: t.ankeeta.textPaddingTop, transform: `translateX(${t.ankeeta.textTranslateX})`, textAlign: t.ankeeta.textAlign as any }}
                >
                  <p style={{ fontWeight: 700, fontSize: t.ankeeta.nameSize, lineHeight: 1.3, color: '#231F20' }}>Dr. Ankeeta Roy,</p>
                  <p style={{ fontWeight: 400, fontStyle: 'italic', fontSize: t.ankeeta.akaSize, lineHeight: 1.3, marginBottom: '4px', color: '#231F20' }}>a.k.a 'The Big Brain'</p>
                  <p style={{ fontWeight: 600, fontSize: t.ankeeta.detailSize, color: '#231F20' }}>MBBS</p>
                  <p style={{ fontWeight: 700, fontSize: t.ankeeta.detailSize, color: '#231F20' }}>Founder &amp; CEO</p>
                </div>
                {/* Image — right */}
                <div className="flex-shrink-0" style={{ width: t.ankeeta.widthPct, transform: `translateX(${t.ankeeta.imageTranslateX})` }}>
                  <img
                    src={founderAnkeeta}
                    alt="Dr. Ankeeta Roy - Founder & CEO"
                    className="w-full object-cover"
                    style={{ height: t.ankeeta.heightClamp, objectPosition: t.ankeeta.objectPosition, display: 'block' }}
                  />
                </div>
              </div>

              {/* "Built by Doctors" divider */}
              <p
                className="italic text-center"
                style={{ color: '#0D514C', fontSize: t.builtBySize, paddingTop: t.builtByPaddingY, paddingBottom: t.builtByPaddingY }}
              >
                Built by &apos;<span style={{ fontWeight: 700, fontStyle: 'normal', fontSize: t.builtByBoldSize }}>Doctors</span>&apos;, for &apos;<span style={{ fontWeight: 700, fontStyle: 'normal', fontSize: t.builtByBoldSize }}>Doctors</span>&apos;
              </p>

              {/* Founder 2 — Dr. Tahreem Afroz: image LEFT, text RIGHT */}
              <div className="relative flex items-start justify-between">
                {/* Image — left */}
                <div className="flex-shrink-0" style={{ width: t.tahreem.widthPct, transform: `translateX(${t.tahreem.imageTranslateX})` }}>
                  <img
                    src={founderTahreem}
                    alt="Dr. Tahreem Afroz - Co-founder & CMO"
                    className="w-full object-cover"
                    style={{ height: t.tahreem.heightClamp, objectPosition: t.tahreem.objectPosition, display: 'block' }}
                  />
                </div>
                {/* Text block — right */}
                <div
                  className="flex flex-col justify-start flex-shrink-0"
                  style={{ maxWidth: `calc(100% - ${t.tahreem.widthPct})`, paddingTop: t.tahreem.textPaddingTop, transform: `translateX(${t.tahreem.textTranslateX})`, textAlign: t.tahreem.textAlign as any }}
                >
                  <p style={{ fontWeight: 700, fontSize: t.tahreem.nameSize, lineHeight: 1.3, color: '#231F20' }}>Dr. Tahreem Afroz,</p>
                  <p style={{ fontWeight: 400, fontStyle: 'italic', fontSize: t.tahreem.akaSize, lineHeight: 1.3, marginBottom: '4px', color: '#231F20' }}>a.k.a 'Marketing Mojo'</p>
                  <p style={{ fontWeight: 600, fontSize: t.tahreem.detailSize, color: '#231F20' }}>MBBS</p>
                  <p style={{ fontWeight: 700, fontSize: t.tahreem.detailSize, color: '#231F20' }}>Co-founder &amp; CMO</p>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* About Us Section — DESKTOP/LAPTOP (hidden below lg) */}
      <section
        id="about-desktop"
        className="hidden lg:block pt-12 md:pt-16 pb-0 relative overflow-hidden"
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
