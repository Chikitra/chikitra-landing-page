import { useState, useEffect, useRef, useCallback } from "react";
import workflowIcon from "@/assets/workflow (1).png";
import medicalRecordIcon from "@/assets/medical-record (1).png";
import notifyIcon from "@/assets/notify.png";
import productivityIcon from "@/assets/productivity.png";
import coinsIcon from "@/assets/coins.png";
import panelIcon from "@/assets/panel.png";
import spidermanBot from "@/assets/Spiderman_bot.png";
import spidermanBotMobile from "@/assets/Spidey_bot.png";

const comparisonData = [
  {
    category: "Patient Flow",
    icon: workflowIcon,
    typical: "Stops at appointment booking.",
    chikitra: "Manages the entire journey — entry to exit."
  },
  {
    category: "Patient Records",
    icon: medicalRecordIcon,
    typical: "Time wasted typing or digging through files.",
    chikitra: "Patient history ready before they sit down."
  },
  {
    category: "Follow-ups",
    icon: notifyIcon,
    typical: "Depends on staff memory or manual messages.",
    chikitra: "Automatic, timely follow-ups that bring patients back."
  },
  {
    category: "Staff Productivity",
    icon: productivityIcon,
    typical: "Staff stuck with calls, registers, and paperwork.",
    chikitra: "Staff free to focus on patients, not admin."
  },
  {
    category: "Revenue Leakage",
    icon: coinsIcon,
    typical: "No-shows and drop-offs go unnoticed.",
    chikitra: "Data-driven decisions increase revenue and reduce costs."
  },
  {
    category: "Data Control",
    icon: panelIcon,
    typical: "Data scattered across books, phones, and apps.",
    chikitra: "100% private, secure, and always accessible to you."
  }
];

const SLIDE_DURATION = 4000; // ms per slide

/* ── Mobile Carousel ─────────────────────────────────────── */
const MobileCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % comparisonData.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + comparisonData.length) % comparisonData.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  /* Progress bar + auto-advance */
  useEffect(() => {
    startTimeRef.current = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        setCurrent(prev => (prev + 1) % comparisonData.length);
        setProgress(0);
        startTimeRef.current = Date.now();
      }
      progressRef.current = requestAnimationFrame(tick);
    };
    progressRef.current = requestAnimationFrame(tick);
    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [current]);

  const slide = comparisonData[current];

  return (
    <div className="flex flex-col items-center w-full">

      {/* ── Padded text block ── */}
      <div className="w-full flex flex-col items-center px-5 sm:px-8 md:px-12">
        {/* COMPARISON pill */}
        <div className="mb-6 sm:mb-7">
          <span
            className="px-5 py-1.5 text-xs sm:text-sm tracking-widest font-semibold uppercase"
            style={{
              border: "1.5px solid #01665E",
              borderRadius: "999px",
              color: "#C0E1CA",
              letterSpacing: "0.18em",
            }}
          >
            COMPARISON
          </span>
        </div>

        {/* Heading */}
        <h2
          className="font-bold text-center mb-4 sm:mb-5"
          style={{
            color: "#C0E1CA",
            fontSize: "clamp(2.2rem, 7.5vw, 3rem)",
            lineHeight: 1.12,
          }}
        >
          Why Chikitra?
        </h2>

        {/* Sub-text */}
        <p
          className="text-center mb-10 sm:mb-12"
          style={{
            color: "#C0E1CA",
            fontSize: "clamp(1rem, 3.8vw, 1.2rem)",
            lineHeight: 1.65,
            maxWidth: "420px",
          }}
        >
          We are not claiming perfection but{" "}
          <span className="font-bold">WE ARE CERTAINLY BETTER</span>
        </p>
      </div>

      {/* ── Bot image — full width, webs reach edges ── */}
      <div className="w-full relative mb-6 sm:mb-8">
        <img
          src={spidermanBotMobile}
          alt="Spiderman Bot"
          className="w-full h-auto object-contain block"
          style={{ maxHeight: "clamp(180px, 52vw, 320px)" }}
        />
      </div>

      {/* ── Progress bar ── */}
      <div
        className="mb-7 sm:mb-9"
        style={{
          width: "min(72vw, 320px)",
          height: "3px",
          backgroundColor: "rgba(1,102,94,0.25)",
          borderRadius: "99px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#1C9D75",
            borderRadius: "99px",
            transition: "width 0.05s linear",
          }}
        />
      </div>

      {/* ── Carousel slide ── */}
      <div
        className="relative w-full px-4 sm:px-6 md:px-10"
        style={{ maxWidth: "560px" }}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          if (delta < -40) next();
          else if (delta > 40) prev();
          touchStartX.current = null;
        }}
      >
        {/* Tap left / right zones */}
        <div
          className="absolute inset-y-0 left-0 z-20 cursor-pointer"
          style={{ width: "28%" }}
          onClick={prev}
        />
        <div
          className="absolute inset-y-0 right-0 z-20 cursor-pointer"
          style={{ width: "28%" }}
          onClick={next}
        />

        {/* Slide card */}
        <div
          className="rounded-2xl p-5 sm:p-6"
          style={{
            backgroundColor: "#0F3330",
            border: "1.5px solid #174841",
          }}
        >
          {/* Icon + category header */}
          <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div
              className="flex items-center justify-center rounded-xl flex-shrink-0"
              style={{
                width: "clamp(40px, 11vw, 52px)",
                height: "clamp(40px, 11vw, 52px)",
                backgroundColor: "rgba(28,157,117,0.15)",
                border: "1px solid rgba(28,157,117,0.3)",
              }}
            >
              <img
                src={slide.icon}
                alt={slide.category}
                style={{
                  width: "clamp(22px, 6vw, 30px)",
                  height: "clamp(22px, 6vw, 30px)",
                  objectFit: "contain",
                  opacity: 0.85,
                }}
              />
            </div>
            <h3
              className="font-semibold"
              style={{
                color: "#ACC7B2",
                fontSize: "clamp(1.05rem, 4.2vw, 1.3rem)",
              }}
            >
              {slide.category}
            </h3>
          </div>

          {/* Two cards side by side */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Typical Way */}
            <div
              className="rounded-xl p-3 sm:p-4 flex flex-col"
              style={{
                backgroundColor: "#0A2724",
                borderLeft: "3px solid #B34341",
              }}
            >
              <p
                className="font-semibold mb-2"
                style={{
                  color: "#B34341",
                  fontSize: "clamp(0.75rem, 3.2vw, 0.92rem)",
                }}
              >
                Typical Way
              </p>
              <p
                style={{
                  color: "#D1D3D4",
                  fontSize: "clamp(0.72rem, 3vw, 0.88rem)",
                  lineHeight: 1.55,
                }}
              >
                {slide.typical}
              </p>
            </div>

            {/* Chikitra Way */}
            <div
              className="rounded-xl p-3 sm:p-4 flex flex-col"
              style={{
                backgroundColor: "#0A2724",
                borderLeft: "3px solid #188765",
              }}
            >
              <p
                className="font-semibold mb-2"
                style={{
                  color: "#188765",
                  fontSize: "clamp(0.75rem, 3.2vw, 0.92rem)",
                }}
              >
                The <em>Chikitra</em> Way
              </p>
              <p
                style={{
                  color: "#C2E2CB",
                  fontSize: "clamp(0.72rem, 3vw, 0.88rem)",
                  lineHeight: 1.55,
                }}
              >
                {slide.chikitra}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6 dot indicators */}
      <div className="flex items-center gap-2 sm:gap-3 mt-7 sm:mt-9 mb-2">
        {comparisonData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: idx === current ? "32px" : "9px",
              height: "9px",
              borderRadius: "99px",
              backgroundColor: idx === current ? "#1C9D75" : "#1B5048",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "width 0.3s ease, background-color 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Main Section ────────────────────────────────────────── */
const WhyChikitraSection = () => {
  return (
    <>
      <style>{`
        .comparison-grid {
          grid-template-columns: minmax(120px, 140px) 1fr 1fr;
        }
        @media (min-width: 768px) {
          .comparison-grid {
            grid-template-columns: minmax(160px, 200px) 1fr 1fr;
          }
        }
        @media (min-width: 1280px) {
          .comparison-grid {
            grid-template-columns: minmax(200px, 260px) 1fr 1fr;
          }
        }
        @media (min-width: 1536px) {
          .comparison-grid {
            grid-template-columns: minmax(240px, 300px) 1fr 1fr;
          }
        }
      `}</style>

      <section
        id="why-chikitra"
        className="relative"
        style={{
          background: "linear-gradient(180deg, #0C3A35 0%, #042825 100%)",
        }}
      >
        {/* ── MOBILE & TABLET (< lg) ── */}
        <div className="lg:hidden py-14 sm:py-20 flex flex-col items-center overflow-x-hidden">
          <MobileCarousel />
        </div>

        {/* ── DESKTOP (≥ lg) ── */}
        <div className="hidden lg:block py-16 xl:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto relative">
              {/* Spider-man Bot - Overlapping table */}
              <div
                className="absolute z-30"
                style={{
                  left: "-120px",
                  top: "-256px",
                  width: "480px",
                  height: "480px",
                }}
              >
                <img
                  src={spidermanBot}
                  alt="Spiderman Bot"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Comparison Table */}
              <div
                className="rounded-xl md:rounded-2xl xl:rounded-[2.5rem] overflow-hidden relative z-10 flex flex-col"
                style={{ backgroundColor: "#10443D" }}
              >
                {/* Header Row */}
                <div
                  className="grid comparison-grid"
                  style={{ backgroundColor: "#10443D" }}
                >
                  <div
                    style={{ backgroundColor: "#10443D" }}
                    className="p-3 md:p-4 xl:p-6"
                  />

                  <div
                    style={{ backgroundColor: "#0A3531" }}
                    className="p-3 md:p-4 xl:p-6"
                  >
                    <h3
                      className="text-sm md:text-lg xl:text-xl 2xl:text-2xl font-bold text-left"
                      style={{ color: "#D1D3D4" }}
                    >
                      Typical Way
                    </h3>
                  </div>

                  <div
                    style={{ backgroundColor: "#10443D" }}
                    className="p-3 md:p-4 xl:p-6"
                  >
                    <h3
                      className="text-sm md:text-lg xl:text-xl 2xl:text-2xl font-bold text-left"
                      style={{ color: "#C2E2CB" }}
                    >
                      The "<span style={{ fontStyle: "italic" }}>Chikitra</span>
                      " Way
                    </h3>
                  </div>
                </div>

                {/* Data Rows */}
                {comparisonData.map((item, index) => (
                  <div
                    key={index}
                    className="grid comparison-grid"
                    style={{ backgroundColor: "#10443D" }}
                  >
                    {/* Category */}
                    <div
                      style={{ backgroundColor: "#10443D" }}
                      className="p-3 md:p-4 xl:p-6 md:flex md:items-center xl:justify-end gap-2 md:gap-3 xl:gap-4"
                    >
                      <span
                        className="font-semibold text-xs md:text-sm xl:text-base block md:inline"
                        style={{ color: "#ADC9B4" }}
                      >
                        {item.category}
                      </span>
                      <img
                        src={item.icon}
                        alt={item.category}
                        className="hidden md:inline-block w-6 md:h-6 xl:w-7 xl:h-7 object-contain flex-shrink-0"
                        style={{ opacity: 0.5 }}
                      />
                    </div>

                    {/* Typical Way */}
                    <div
                      style={{ backgroundColor: "#0A3531" }}
                      className="p-3 md:p-4 xl:p-6 flex items-center relative"
                    >
                      <p
                        className="text-xs md:text-sm xl:text-base font-light"
                        style={{ color: "#D1D3D4" }}
                      >
                        {item.typical}
                      </p>
                      {index < comparisonData.length - 1 && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: "16px",
                            right: "16px",
                            height: "2px",
                            backgroundColor: "#0F3F37",
                          }}
                        />
                      )}
                    </div>

                    {/* Chikitra Way */}
                    <div
                      style={{ backgroundColor: "#10443D" }}
                      className="p-3 md:p-4 xl:p-6 flex items-center relative"
                    >
                      <p
                        className="text-xs md:text-sm xl:text-base font-light"
                        style={{ color: "#C2E2CB" }}
                      >
                        {item.chikitra}
                      </p>
                      {index < comparisonData.length - 1 && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: "16px",
                            right: "16px",
                            height: "2px",
                            backgroundColor: "#0F3F37",
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChikitraSection;
