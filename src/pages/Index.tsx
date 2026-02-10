import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ChaosSection from "@/components/sections/ChaosSection";
import WhyChikitraSection from "@/components/sections/WhyChikitraSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CommunitySection from "@/components/sections/CommunitySection";
import PricingSection from "@/components/sections/PricingSection";
import BookDemoSection from "@/components/sections/BookDemoSection";

const Index = () => {
  const location = useLocation();
  const [showDesktopNav, setShowDesktopNav] = useState(false);

  useEffect(() => {
    // Handle scroll to section based on route
    const path = location.pathname;
    let sectionId = "";

    switch (path) {
      case "/about":
        sectionId = "about";
        break;
      case "/features":
        sectionId = "features";
        break;
      case "/pricing":
        sectionId = "pricing";
        break;
      case "/contact":
      case "/book-demo":
        sectionId = "book-demo";
        break;
      case "/testimonials":
        sectionId = "community";
        break;
      default:
        sectionId = "";
    }

    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.pathname]);

  useEffect(() => {
    // Handle scroll to show/hide desktop navbar and sidebar
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 100;
        setShowDesktopNav(scrollPosition > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Mobile/Tablet Navbar - always visible on small screens */}
      <div className="lg:hidden">
        <Navbar />
      </div>

      {/* Desktop Navbar - hidden on hero section, appears when scrolled past hero */}
      <div className={`hidden lg:block fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${showDesktopNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <Navbar />
      </div>

      {/* Screen 1: Hero */}
      <HeroSection hideSidebar={showDesktopNav} />

      {/* Screen 2: Chaos / Problem */}
      <ChaosSection />
      
      {/* Screen 3: Features (6 empty cards) */}
      <FeaturesSection />

      {/* Screen 4: Why Chikitra */}
      <WhyChikitraSection />
      
      {/* Screen 5: Community + Founders */}
      <CommunitySection />
      
      {/* Screen 6: Pricing */}
      <PricingSection />
      
      {/* Screen 7: Book Demo CTA + Form */}
      <BookDemoSection />
      
      {/* Screen 8: Footer */}
      <Footer />
    </main>
  );
};

export default Index;
