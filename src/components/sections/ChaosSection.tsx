const ChaosSection = () => {
  return (
    <section id="chaos" className="py-24" style={{ backgroundColor: '#042826' }}>
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-bold leading-tight mb-6" style={{ color: '#DBEFE9' }}>
            <span className="text-3xl md:text-4xl lg:text-[2.75rem]">Most clinics still run on paper,</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-[2.75rem]">memory and </span>
            <span className="uppercase text-4xl md:text-5xl lg:text-6xl">CHAOS.</span>
          </h2>

          <p className="text-lg md:text-xl" style={{ color: '#DBEFE9' }}>
            This slows doctors down, frustrates patients, and quietly leaks revenue every day.
          </p>
        </div>

        {/* Bar Chart Visualization */}
        <div className="relative max-w-5xl mx-auto">
          {/* Bars - Image Placeholders */}
          <div className="flex items-end justify-center gap-4 md:gap-8 h-[300px] md:h-[350px]">
            {/* Bar 1 - Tallest - Image Placeholder */}
            <div className="flex-1 max-w-[200px] h-[85%] rounded-lg overflow-hidden bg-chikitra-mint-card">
              {/* Image will go here */}
            </div>

            {/* Bar 2 - Image Placeholder */}
            <div className="flex-1 max-w-[200px] h-[65%] rounded-lg overflow-hidden bg-chikitra-mint-card">
              {/* Image will go here */}
            </div>

            {/* Bar 3 - Image Placeholder */}
            <div className="flex-1 max-w-[200px] h-[48%] rounded-lg overflow-hidden bg-chikitra-mint-card">
              {/* Image will go here */}
            </div>

            {/* Bar 4 - Shortest - Image Placeholder */}
            <div className="flex-1 max-w-[200px] h-[32%] rounded-lg overflow-hidden bg-chikitra-mint-card">
              {/* Image will go here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaosSection;
