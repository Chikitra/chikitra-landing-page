const ChaosSection = () => {
  return (
    <section id="chaos" className="section-dark py-24">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chikitra-mint leading-tight mb-6">
            Most clinics still run on paper, memory
            <br />
            and <span className="uppercase">CHAOS.</span>
          </h2>
          
          <p className="text-lg text-chikitra-mint/70">
            This slows doctors down, frustrates patients, and quietly leaks revenue every day.
          </p>
        </div>

        {/* Bar Chart Visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Growth Arrow */}
          <div className="absolute top-[20%] right-[15%] z-10">
            <div className="flex items-center">
              <span className="text-chikitra-mint/60 italic text-lg mr-2">Growth</span>
              <svg 
                width="80" 
                height="40" 
                viewBox="0 0 80 40" 
                className="text-chikitra-mint/40"
              >
                <path 
                  d="M0 35 L60 5 L55 15 M60 5 L50 10" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Bars */}
          <div className="flex items-end justify-center gap-6 h-[400px]">
            {/* Bar 1 - Tallest */}
            <div className="w-24 md:w-32 h-[90%] bg-chikitra-dark-card rounded-2xl" />
            
            {/* Bar 2 */}
            <div className="w-24 md:w-32 h-[70%] bg-chikitra-dark-card rounded-2xl" />
            
            {/* Bar 3 */}
            <div className="w-24 md:w-32 h-[50%] bg-chikitra-dark-card rounded-2xl" />
            
            {/* Bar 4 - Shortest */}
            <div className="w-24 md:w-32 h-[35%] bg-chikitra-dark-card rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaosSection;
