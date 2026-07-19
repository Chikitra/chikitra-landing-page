import { useState, useEffect, useRef, useCallback } from "react";
import botImage from "@/assets/Hero-Section_Bot.png";
import botImageMobile from "@/assets/Hero-Section_Bot_Mobile.png";
import patientDetailsImage from "@/assets/Hero-Section_Image1.png";
import appointmentsImage from "@/assets/Hero-Section_Image2.png";
import whatsappImage from "@/assets/Hero-Section_Image3.jpeg";

// ─── Slide timing ────────────────────────────────────────────────────────────
// WhatsApp card stays for 9s = full whatsapp-chat-scroll animation cycle.
// Other slides stay for 2s each.
const SLIDE_DURATIONS = [2000, 2000, 9000]; // index matches slides array

// ─── Slide definitions ───────────────────────────────────────────────────────
const slides = [
  {
    src: patientDetailsImage,
    alt: 'Patient Details',
    label: 'Patient Records',
    border: '#437769',
    shadow: 'rgba(67, 119, 105, 0.6)',
    objectFit: 'cover' as const,
    objectPosition: 'top',
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
    background: '#000',
    bottomFade: true,
    scrollAnim: true,
  },
];

// ─── Mobile 3-D Gallery Carousel ─────────────────────────────────────────────
/**
 * Custom carousel that does NOT use Embla, so we get full control over:
 *  - CSS perspective / translateZ for real depth
 *  - Variable slide durations per slide
 *  - Touch drag without overflow-hidden clipping
 *
 * Each card is absolutely positioned in a fixed-height container.
 * Active card: scale(1) translateZ(0)  → front, full opacity
 * Left/right:  scale(0.78) translateZ(-120px) → pushed far back, blurred
 */
const MobileGallery = ({
  current,
  onChangeTo,
}: {
  current: number;
  onChangeTo: (idx: number) => void;
}) => {
  const count = slides.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragStartY = useRef<number | null>(null);
  const dragDelta = useRef(0);
  const isHorizontalDrag = useRef<boolean | null>(null); // null = undecided

  const prevRef = useRef<() => void>(() => {});
  const nextRef = useRef<() => void>(() => {});
  prevRef.current = () => onChangeTo((current - 1 + count) % count);
  nextRef.current = () => onChangeTo((current + 1) % count);

  // ── Native touch + mouse listeners with { passive: false } ──────────────────
  // React's synthetic onPointerMove is always passive on mobile, meaning we
  // can't call e.preventDefault() to stop the page from scrolling during a
  // horizontal swipe. Native listeners with passive:false give us that control.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      dragStartX.current = e.touches[0].clientX;
      dragStartY.current = e.touches[0].clientY;
      dragDelta.current = 0;
      isHorizontalDrag.current = null;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (dragStartX.current === null) return;
      const dx = e.touches[0].clientX - dragStartX.current;
      const dy = e.touches[0].clientY - (dragStartY.current ?? 0);

      // Lock axis on first significant movement
      if (isHorizontalDrag.current === null) {
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
          isHorizontalDrag.current = Math.abs(dx) >= Math.abs(dy);
        }
      }

      if (isHorizontalDrag.current) {
        // Horizontal swipe — prevent vertical page scroll
        e.preventDefault();
        dragDelta.current = dx;
      }
    };

    const onTouchEnd = () => {
      if (dragStartX.current === null) return;
      if (isHorizontalDrag.current) {
        if (dragDelta.current < -40) nextRef.current();
        else if (dragDelta.current > 40) prevRef.current();
      }
      dragStartX.current = null;
      dragStartY.current = null;
      dragDelta.current = 0;
      isHorizontalDrag.current = null;
    };

    // Mouse drag (desktop fallback)
    const onMouseDown = (e: MouseEvent) => {
      dragStartX.current = e.clientX;
      dragDelta.current = 0;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (dragStartX.current === null) return;
      dragDelta.current = e.clientX - dragStartX.current;
    };
    const onMouseUp = () => {
      if (dragStartX.current === null) return;
      if (dragDelta.current < -40) nextRef.current();
      else if (dragDelta.current > 40) prevRef.current();
      dragStartX.current = null;
      dragDelta.current = 0;
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    el.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []); // stable refs — no deps needed

  return (
    <div
      ref={containerRef}
      className="w-full relative select-none"
      style={{
        height: 'clamp(145px, 27svh, 305px)',
        // perspective on the direct parent of the transformed cards = real 3D depth
        perspective: '900px',
        perspectiveOrigin: '50% 50%',
        touchAction: 'pan-y', // allow vertical scroll; horizontal is handled by us
      }}
    >
      {slides.map((slide, index) => {
        // Compute relative position: -1 = left, 0 = active, 1 = right
        let rel = index - current;
        // Wrap for loop
        if (rel > 1) rel -= count;
        if (rel < -1) rel += count;

        const isActive = rel === 0;
        const isLeft = rel === -1;
        const isRight = rel === 1;
        const isHidden = !isActive && !isLeft && !isRight;

        // 3D transform values
        const scale = isActive ? 1 : 0.75;
        const translateX = isActive ? '0px' : isLeft ? '-62%' : '62%';
        const translateZ = isActive ? '0px' : '-130px';
        const opacity = isActive ? 1 : 0.35;
        const blur = isActive ? 0 : 2.5;
        const borderColor = isActive ? slide.border : '#58595B';
        const boxShadow = isActive
          ? `0 0 28px ${slide.shadow}, 0 0 56px ${slide.shadow.replace('0.6', '0.25').replace('0.5', '0.2')}`
          : 'none';

        return (
          <div
            key={index}
            onClick={() => !isActive && onChangeTo(index)}
            style={{
              position: 'absolute',
              top: 0,
              // Center the active card and offset sides
              left: '50%',
              width: '72%',
              height: '100%',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              cursor: isActive ? 'default' : 'pointer',
              background: slide.background,
              border: `2px solid ${borderColor}`,
              boxShadow,
              // 3D transform — translateX is applied via translate(-50%) offset
              transform: `translateX(calc(-50% + ${translateX})) scale(${scale}) translateZ(${translateZ})`,
              transformOrigin: 'center center',
              opacity: isHidden ? 0 : opacity,
              filter: `blur(${blur}px)`,
              pointerEvents: isHidden ? 'none' : 'auto',
              zIndex: isActive ? 10 : isLeft || isRight ? 5 : 0,
              transition: 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease, filter 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease',
              willChange: 'transform, opacity, filter',
            }}
          >
            {/* Image */}
            {slide.scrollAnim ? (
              <img
                src={slide.src}
                alt={slide.alt}
                className="whatsapp-scroll-img"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  position: 'absolute',
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

            {/* Bottom gradient fade */}
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
        );
      })}
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const userInteractedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Auto-advance with per-slide durations
  useEffect(() => {
    const advance = () => {
      if (userInteractedRef.current) return;
      setCurrent(prev => {
        const next = (prev + 1) % slides.length;
        scheduleNext(next);
        return next;
      });
    };

    const scheduleNext = (idx: number) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(advance, SLIDE_DURATIONS[idx]);
    };

    scheduleNext(current);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once — intentionally no current dependency

  const handleChangeTo = useCallback((idx: number) => {
    setCurrent(idx);
    // Pause auto-slide for 10s after user interaction
    userInteractedRef.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      userInteractedRef.current = false;
      // Restart auto from current slide
      const restart = (idx: number) => {
        timerRef.current = setTimeout(() => {
          setCurrent(prev => {
            const next = (prev + 1) % slides.length;
            restart(next);
            return next;
          });
        }, SLIDE_DURATIONS[idx]);
      };
      setCurrent(c => { restart(c); return c; });
    }, 10000);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // ==========================================
  // MOBILE LAYOUT TWEAKS (Adjust these to find the perfect fit)
  // ==========================================
  const mobileConfig = {
    // 1. Spacing at the very top (between navbar and text)
    paddingTop: '12svh',
    // 2. Text sizing
    titleSize: '2rem',
    // 3. Spacing between text and bot
    botMarginTop: '0.5svh',
    // 4. Bot image max height (width is responsive via clamp)
    botMaxHeight: '20svh',
    // 5. Spacing between bot and 'Get Started' button
    buttonMarginTop: '0.5svh',
  };

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

        /*
         * WhatsApp "Live Chat" scroll animation
         *
         * Duration: 9s = full cycle so the auto-slide (9s on this card)
         * perfectly aligns — the scroll finishes as the slide advances.
         * Delay: 2s so the user sees the top of the chat first.
         */
        @keyframes whatsapp-chat-scroll {
          0%, 10%  { transform: translateY(0%); }
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
        style={{
          background: 'linear-gradient(180deg, #0A4944 0%, #002D28 100%)',
        }}
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
           │  Gallery       [shrink-0]        │  ← ALWAYS below button in DOM order.
           │  Dots          [shrink-0]        │     Can NEVER overlap button.
           └─────────────────────────────────┘
        */}
        <div
          className="lg:hidden h-full flex flex-col relative z-10 w-full"
          style={{ paddingTop: mobileConfig.paddingTop }}
        >
          {/* Text */}
          <div className="text-center px-5 shrink-0">
            <h1
              className="sm:text-[2.6rem]"
              style={{ fontSize: mobileConfig.titleSize, color: '#D4E9DB', lineHeight: '1.2' }}
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
            FLEX SPACER — absorbs all remaining space between button and gallery.
            When there's extra space (tall screen), spacer grows → gallery gets breathing room.
            When space is tight (short screen), spacer shrinks to 0 → gallery is right below button.
            min-h-0 ensures it can shrink to 0 without any minimum constraint.
          */}
          <div className="flex-1 min-h-0" />

          {/*
            3-D Gallery section — shrink-0 so it always renders at its full natural height.
            Always appears BELOW the spacer (and therefore BELOW the button) in DOM flow.
            On very tight screens: the section's overflow:hidden clips the bottom of the
            gallery (dots/padding) but the card image is always visible from the top.
          */}
          <div
            className="w-full shrink-0"
            style={{ paddingBottom: '14px', pointerEvents: 'auto' }}
          >
            <MobileGallery current={current} onChangeTo={handleChangeTo} />

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
                  onClick={() => handleChangeTo(index)}
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
