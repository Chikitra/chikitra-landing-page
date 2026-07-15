import { useState, useEffect, useRef } from "react";
import botImage from "@/assets/Hero-Section_Bot.png";
import botImageMobile from "@/assets/Hero-Section_Bot_Mobile.png";
import patientDetailsImage from "@/assets/Hero-Section_Image1.png";
import appointmentsImage from "@/assets/Hero-Section_Image2.png";
import whatsappImage from "@/assets/Hero-Section_Image3.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1); // Default to middle slide to match image
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    /**
     * HEIGHT LOCK — fixes the scroll gap bug:
     * Captures window.innerHeight once on mount (URL bar visible = smallest height)
     * and hard-pins the section to that pixel value.
     * This prevents reflow when browser chrome hides/shows.
     */
    if (sectionRef.current && window.innerWidth < 1024) {
      sectionRef.current.style.height = `${window.innerHeight}px`;
    }
  }, []); // Run once on mount — intentionally no dependencies

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // ==========================================
  // MOBILE LAYOUT TWEAKS (Adjust these to find the perfect fit)
  // ==========================================
  const mobileConfig = {
    // 1. Spacing at the very top (between navbar and text)
    //    Using svh (Smallest Viewport Height) — constant unit, doesn't change with browser chrome.
    paddingTop: '8svh',

    // 2. Text sizing
    titleSize: '2rem',

    // 3. Spacing between text and bot
    botMarginTop: '0.5svh',

    // 4. Bot image max height (width is responsive via clamp)
    botMaxHeight: '20svh',

    // 5. Spacing between bot and 'Get Started' button
    buttonMarginTop: '0.5svh',
  };

  /**
   * Carousel slide config — each tailored to the actual image dimensions:
   *
   *   Image1 (Patient Details):    647×808  portrait  → cover + bottom fade
   *   Image2 (Appointments):      1575×790  landscape → contain + dark gradient bg
   *                               The 2:1 ratio always shows the FULL dashboard with
   *                               a small dark letterbox at any screen width.
   *   Image3 (WhatsApp):          1080×2400 very tall → CSS scroll animation
   *                               Instead of cropping, the image auto-scrolls upward
   *                               revealing lower messages, like a live chat preview.
   *
   * scrollAnim: true → the image slides upward via CSS animation to show more content
   */
  const slides = [
    {
      src: patientDetailsImage,
      alt: 'Patient Details',
      label: 'Patient Records',
      border: '#437769',
      shadow: 'rgba(67, 119, 105, 0.6)',
      objectFit: 'cover' as const,
      objectPosition: 'top',
      cardBasis: 'basis-[80%] sm:basis-[72%] md:basis-[65%]',
      background: '#000',
      bottomFade: true,
      scrollAnim: false,
    },
    {
      src: appointmentsImage,
      alt: 'Appointments Dashboard',
      label: 'Appointments',
      border: '#437769',
      shadow: 'rgba(67, 119, 105, 0.6)',
      objectFit: 'contain' as const,
      objectPosition: 'center',
      cardBasis: 'basis-[88%] sm:basis-[82%] md:basis-[74%]',
      // Dark gradient bg matches hero teal — looks like a premium screen frame
      background: 'linear-gradient(180deg, #060f0d 0%, #0c1f1b 50%, #060f0d 100%)',
      bottomFade: false,
      scrollAnim: false,
    },
    {
      src: whatsappImage,
      alt: 'WhatsApp Chat',
      label: 'WhatsApp Integration',
      border: '#5BB29D',
      shadow: 'rgba(91, 178, 157, 0.5)',
      objectFit: 'cover' as const,
      objectPosition: 'top',
      cardBasis: 'basis-[80%] sm:basis-[72%] md:basis-[65%]',
      background: '#000',
      bottomFade: true,
      scrollAnim: true, // Scroll animation to reveal more of the 1080×2400 image
    },
  ];

  return (
    <>
      <style>{`
        @keyframes levitate {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes levitate-desktop {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-15px); }
        }
        .levitating-bot {
          animation: levitate 4s ease-in-out infinite;
        }
        .levitating-bot-desktop {
          animation: levitate-desktop 4s ease-in-out infinite;
        }

        /* ---- Mobile carousel gallery effects ---- */
        .carousel-slide-inner {
          transition:
            transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            opacity 0.4s ease,
            box-shadow 0.4s ease,
            filter 0.4s ease,
            border-color 0.4s ease;
          will-change: transform, opacity, filter;
        }
        .carousel-slide-inner.is-active {
          transform: scale(1) translateY(0);
          opacity: 1;
          filter: blur(0px);
        }
        .carousel-slide-inner.is-inactive {
          transform: scale(0.88) translateY(8px);
          opacity: 0.42;
          filter: blur(1.5px);
        }

        /*
         * WhatsApp "Live Chat" scroll animation
         *
         * The image is 1080×2400 (very tall, 0.45:1 ratio). At a 300px wide card,
         * it renders ~667px tall. Instead of a static hard-crop, we animate it
         * scrolling upward to reveal more of the conversation — making it feel like
         * a live, active chat preview.
         *
         * translateY(-60%) ≈ moves up 400px (of 667px rendered height),
         * showing content from ~60% down the original image.
         *
         * Delay: 2s so the animation begins after the user has seen the top of the
         * chat first.
         */
        @keyframes whatsapp-chat-scroll {
          0%, 15%  { transform: translateY(0%); }
          50%, 65% { transform: translateY(-60%); }
          100%     { transform: translateY(0%); }
        }
        .whatsapp-scroll-img {
          animation: whatsapp-chat-scroll 9s ease-in-out 2s infinite;
          will-change: transform;
        }
      `}</style>

      {/*
        h-[100svh] — CSS fallback using SVH (Smallest Viewport Height, constant).
        The useEffect then immediately overrides with the exact initial px value via ref,
        making it completely immune to browser URL bar resize events on all browsers.
        lg:h-[100vh] overrides on desktop.
      */}
      <section
        ref={sectionRef}
        id="hero"
        className="relative overflow-hidden h-[100svh] lg:h-[100vh]"
        style={{ backgroundColor: '#0A4944' }}
      >
        {/* LAYER 1: Desktop bot */}
        <div
          className="absolute levitating-bot-desktop hidden lg:block pointer-events-none top-[35%] xl:top-[37%] 2xl:top-[38%] w-[45vw] xl:w-[50vw] 2xl:w-[58vw] max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1000px] min-w-[350px] xl:min-w-[400px]"
          style={{
            left: '34%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        >
          <img
            src={botImage}
            alt="Chikitra Bot"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* LAYER 2: Desktop cards row — pinned to bottom */}
        <div
          className="hidden lg:flex items-end justify-between absolute bottom-0 left-0 right-[3%]"
          style={{ height: '55%', zIndex: 3 }}
        >
          {/* WhatsApp Chat Image */}
          <div
            className="rounded-t-[2rem] overflow-hidden flex-shrink-0 transition-all duration-300 hover:shadow-[0_0_30px_rgba(91,178,157,0.8)] h-[90%] xl:h-[100%] 2xl:h-[110%]"
            style={{
              width: '20%',
              border: '2px solid #5BB29D',
              borderBottom: 'none',
              boxShadow: '0 0 16px rgba(91, 178, 157, 0.5)',
            }}
          >
            <img src={whatsappImage} alt="WhatsApp Chat" className="w-full h-full object-cover object-top" />
          </div>

          {/* Patient Details Card */}
          <div
            className="rounded-t-[2rem] overflow-hidden flex-shrink-0 transition-all duration-300 hover:shadow-[0_0_30px_rgba(67,119,105,0.8)] h-[58%] xl:h-[60%] 2xl:h-[64%]"
            style={{
              width: '25%',
              border: '2px solid #437769',
              borderBottom: 'none',
              boxShadow: '0 0 20px rgba(67, 119, 105, 0.6)',
              backgroundColor: 'black',
            }}
          >
            <img src={patientDetailsImage} alt="Patient Details" className="w-full h-full object-cover object-top" />
          </div>

          {/* Appointments Dashboard */}
          <div
            className="rounded-t-[2rem] overflow-hidden flex-shrink-0 transition-all duration-300 hover:shadow-[0_0_30px_rgba(67,119,105,0.8)] h-[75%] xl:h-[82%] 2xl:h-[89%]"
            style={{
              width: '53%',
              border: '2px solid #437769',
              borderBottom: 'none',
              boxShadow: '0 0 20px rgba(67, 119, 105, 0.6)',
              backgroundColor: 'black',
            }}
          >
            <img
              src={appointmentsImage}
              alt="Appointments Dashboard"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* LAYER 3: Desktop text content */}
        <div className="h-full hidden flex-col absolute top-[5%] right-[3%] z-10 pointer-events-none lg:flex items-end text-right w-[75%] max-w-[1000px]">
          <div className="pt-4 lg:pt-6">
            <h1
              className="font-bold text-3xl lg:text-[2.4rem] xl:text-[3.0rem] 2xl:text-[3.6rem]"
              style={{ color: '#D6EADB', lineHeight: '1.15' }}
            >
              See more patients every day.
              <br />
              No extra STAFF. Zero CHAOS.
            </h1>

            <p
              className="text-sm lg:text-[1.05rem] xl:text-[1.15rem] 2xl:text-[1.3rem] mt-2 lg:mt-3 2xl:mt-4 ml-auto"
              style={{ color: '#D6EADB', lineHeight: '1.55', maxWidth: '750px' }}
            >
              Chikitra is your OPD's digital front desk—handles bookings, reminders, intake
              <br className="hidden lg:inline" />
              {' '}and follow-ups so your team focuses only on patients, not paperwork.
            </p>
          </div>

          <div className="mt-4 lg:mt-5 2xl:mt-8" style={{ pointerEvents: 'auto' }}>
            <button
              onClick={() => scrollToSection('book-demo')}
              className="py-2.5 px-6 xl:py-3 xl:px-8 rounded-full font-medium text-sm xl:text-base transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(1, 99, 97, 0.9)',
                border: '2px solid #5BB29D',
                color: '#DBEFE9',
                boxShadow: '0 0 18px rgba(91, 178, 157, 0.5), 0 0 36px rgba(91, 178, 157, 0.2)',
              }}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* =====================================================================
            MOBILE / TABLET LAYOUT  (below lg = 1024px)
            Covers: phones (320–430px) + tablets portrait (768–1023px)
           =====================================================================

           Layout strategy — FLEX SPACER PATTERN (most robust approach):

           ┌─────────────────────────────────┐  ← section (locked px height)
           │  Text          [shrink-0]        │
           │  Bot           [shrink-0]        │
           │  Button        [shrink-0]        │
           │  ·············                  │
           │  SPACER        [flex-1 min-h-0]  │  ← absorbs all extra space.
           │  (expands/collapses as needed)   │     Can shrink to 0 on tight screens.
           │  ·············                  │
           │  Carousel      [shrink-0]        │  ← ALWAYS below button in DOM order.
           │  Dots          [shrink-0]        │     Can NEVER overlap button.
           └─────────────────────────────────┘

           WHY this fixes the overlap:
           Previously, `justify-end` inside `flex-1` caused cards to overflow UPWARD
           when space was tight. Browsers don't always clip upward overflow from
           justify-end with overflow:hidden. The spacer approach eliminates justify-end
           entirely — the carousel simply follows the spacer in normal document flow.
           If space is very tight, the spacer shrinks to 0 and the carousel is directly
           below the button (acceptable). If the carousel is too tall for the remaining
           space, it overflows DOWNWARD and is clipped by the section's overflow:hidden
           — meaning only the bottom (dots/padding) might clip. The card image is
           always visible from the top.
        */}
        <div
          className="lg:hidden h-full flex flex-col relative z-10 w-full"
          style={{ paddingTop: mobileConfig.paddingTop }}
        >
          {/* Text */}
          <div className="text-center px-5 shrink-0">
            <h1
              className="sm:text-[2.6rem]"
              style={{ fontSize: mobileConfig.titleSize, color: '#D6EADB', lineHeight: '1.2' }}
            >
              <span className="font-semibold opacity-90">
                See more patients<br />
                every day.
              </span>
              <br />
              <span className="font-black text-[1.05em] tracking-wide block mt-1">
                No extra STAFF.<br />
                Zero CHAOS.
              </span>
            </h1>
          </div>

          {/* Bot */}
          <div
            className="flex justify-center levitating-bot shrink-0"
            style={{ marginTop: mobileConfig.botMarginTop }}
          >
            <img
              src={botImageMobile}
              alt="Chikitra Bot"
              className="object-contain"
              style={{
                width: 'clamp(130px, 38vw, 220px)',
                height: 'auto',
                maxHeight: mobileConfig.botMaxHeight,
                filter: 'drop-shadow(0 0 25px rgba(91, 178, 157, 0.6))',
              }}
            />
          </div>

          {/* Button */}
          <div
            className="flex justify-center z-20 relative shrink-0"
            style={{ marginTop: mobileConfig.buttonMarginTop, pointerEvents: 'auto' }}
          >
            <button
              onClick={() => scrollToSection('book-demo')}
              className="py-3 px-10 rounded-full font-medium text-base transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(1, 99, 97, 0.9)',
                border: '2px solid #5BB29D',
                color: '#DBEFE9',
                boxShadow: '0 0 18px rgba(91, 178, 157, 0.5)',
              }}
            >
              Get Started
            </button>
          </div>

          {/*
            FLEX SPACER — absorbs all remaining space between button and carousel.
            When there's extra space (tall screen), spacer grows → carousel gets breathing room.
            When space is tight (short screen), spacer shrinks to 0 → carousel is right below button.
            min-h-0 ensures it can shrink to 0 without any minimum constraint.
          */}
          <div className="flex-1 min-h-0" />

          {/*
            Carousel section — shrink-0 so it always renders at its full natural height.
            Always appears BELOW the spacer (and therefore BELOW the button) in DOM flow.
            On very tight screens: the section's overflow:hidden clips the bottom of the
            carousel (dots/padding) but the card image is always visible from the top.
          */}
          <div
            className="w-full shrink-0"
            style={{ paddingBottom: '14px', pointerEvents: 'auto' }}
          >
            <Carousel
              setApi={setApi}
              className="w-full max-w-full"
              opts={{ align: 'center', startIndex: 1, loop: true }}
            >
              <CarouselContent className="-ml-3">
                {slides.map((slide, index) => {
                  const isActive = current === index;
                  return (
                    <CarouselItem
                      key={index}
                      className={`pl-3 ${slide.cardBasis}`}
                      onClick={() => api?.scrollTo(index)}
                    >
                      <div
                        className={`carousel-slide-inner rounded-[1.5rem] overflow-hidden cursor-pointer relative ${isActive ? 'is-active' : 'is-inactive'}`}
                        style={{
                          border: `2px solid ${isActive ? slide.border : slide.border + '66'}`,
                          boxShadow: isActive
                            ? `0 0 28px ${slide.shadow}, 0 0 56px ${slide.shadow.replace('0.6', '0.25').replace('0.5', '0.2')}`
                            : `0 0 6px ${slide.shadow.replace('0.6', '0.1').replace('0.5', '0.08')}`,
                          background: slide.background,
                          /*
                           * Card height uses svh (Smallest Viewport Height) — constant,
                           * never changes with browser chrome. Lower minimum (140px) means
                           * the card gracefully shrinks on very tight/short screens without
                           * ever overflowing into the button above.
                           */
                          height: 'clamp(140px, 26svh, 300px)',
                        }}
                      >
                        {slide.scrollAnim ? (
                          /*
                           * WhatsApp LIVE CHAT SCROLL ANIMATION
                           *
                           * The image (1080×2400, very tall) renders at natural aspect ratio
                           * with width: 100% and height: auto. At ~300px card width, the image
                           * is ~667px tall — much taller than the ~220px card. Instead of just
                           * showing the static top portion, the image SCROLLS UPWARD via CSS
                           * animation, revealing lower parts of the conversation over 9 seconds.
                           *
                           * This turns "heavy cropping" into a "live chat preview" — every few
                           * seconds the viewer sees new messages appearing, making it feel dynamic
                           * and real. The card's overflow:hidden does the clipping.
                           */
                          <img
                            src={slide.src}
                            alt={slide.alt}
                            className="whatsapp-scroll-img"
                            style={{
                              width: '100%',
                              height: 'auto',        // natural aspect ratio — lets image be very tall
                              display: 'block',
                              position: 'absolute',  // positioned within the relative card
                              top: 0,
                              left: 0,
                            }}
                          />
                        ) : (
                          <img
                            src={slide.src}
                            alt={slide.alt}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: slide.objectFit,
                              objectPosition: slide.objectPosition,
                              display: 'block',
                            }}
                          />
                        )}

                        {/* Bottom gradient fade — makes the crop look intentional (content continues below) */}
                        {slide.bottomFade && (
                          <div
                            style={{
                              position: 'absolute',
                              inset: 0,
                              background: 'linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.94) 100%)',
                              pointerEvents: 'none',
                            }}
                          />
                        )}

                        {/* Card label */}
                        <div
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '10px 14px',
                            color: 'rgba(214, 234, 219, 0.85)',
                            fontSize: '10px',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            background: slide.bottomFade
                              ? 'none'
                              : 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
                          }}
                        >
                          {slide.label}
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>

            {/* Pill dots */}
            <div className="flex justify-center items-center gap-2.5 mt-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: current === index ? '22px' : '8px',
                    height: '8px',
                    backgroundColor: current === index ? '#5BB29D' : 'rgba(255,255,255,0.30)',
                    boxShadow: current === index ? '0 0 10px rgba(91, 178, 157, 0.75)' : 'none',
                  }}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default HeroSection;
