import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Mail, Phone } from "lucide-react";
import iconLogo from "@/assets/chikitra-logo.avif";
import chikitraLogo from "@/assets/Long_logo_original_final.png";
import botPhone from "@/assets/bot-phone.png";

// Custom WhatsApp SVG icon (no circle border)
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/chikitra_official?utm_source=qr&igsh=aWluN2tia3JyeXNv",
    label: "Instagram"
  },
  {
    icon: WhatsAppIcon,
    href: "https://wa.me/918637389951",
    label: "WhatsApp"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/chikitra/",
    label: "LinkedIn"
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/17XUQhvto8/",
    label: "Facebook"
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
];

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="pt-10 pb-0 relative overflow-hidden" style={{ backgroundColor: '#052826' }}>
      {/* Background bot - Extreme right */}
      <div className="absolute right-0 bottom-0 pointer-events-none h-full max-h-[300px] md:max-h-[400px] translate-x-[10%]" style={{ opacity: 0.07 }}>
        <img src={botPhone} alt="" className="h-full w-auto" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main grid: 5 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 pb-6">

          {/* Col 1: Logo + Social Icons */}
          <div className="flex flex-col items-start gap-0">
            {/* Short + Long logo side by side */}
            <div className="flex items-center gap-2">
              <img src={iconLogo} alt="Chikitra Icon" className="h-7 w-auto object-contain" />
              <img src={chikitraLogo} alt="Chikitra" className="h-5 w-auto object-contain" />
            </div>

            {/* Separator line after logos */}
            <div className="w-full mt-3 mb-4" style={{ borderBottom: '1.5px solid rgba(230, 231, 232, 0.35)' }} />

            {/* Social Icons - no circle border */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-colors hover:opacity-70"
                  style={{ color: '#DEDEDE' }}
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="text-left">
            <h4 className="font-medium text-sm mb-4" style={{ color: '#E6E7E8' }}>Company</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="transition-colors text-sm font-light hover:opacity-80"
                  style={{ color: '#E6E7E8' }}
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="transition-colors text-sm font-light hover:opacity-80"
                  style={{ color: '#E6E7E8' }}
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("community")}
                  className="transition-colors text-sm font-light hover:opacity-80"
                  style={{ color: '#E6E7E8' }}
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="text-left">
            <h4 className="font-medium text-sm mb-4" style={{ color: '#E6E7E8' }}>Services</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("book-demo")}
                  className="transition-colors text-sm font-light hover:opacity-80"
                  style={{ color: '#E6E7E8' }}
                >
                  Book a demo
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/918637389951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-sm font-light hover:opacity-80"
                  style={{ color: '#E6E7E8' }}
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div className="text-left">
            <h4 className="font-medium text-sm mb-4" style={{ color: '#E6E7E8' }}>Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="transition-colors text-sm font-light hover:opacity-80"
                    style={{ color: '#E6E7E8' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Get in touch */}
          <div className="text-left">
            <h4 className="font-medium text-sm mb-4" style={{ color: '#E6E7E8' }}>Get in touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@chikitra.com"
                  className="transition-colors text-sm font-light hover:opacity-80 flex items-center gap-2"
                  style={{ color: '#E6E7E8' }}
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  hello@chikitra.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919192422622440"
                  className="transition-colors text-sm font-light hover:opacity-80 flex items-center gap-2"
                  style={{ color: '#E6E7E8' }}
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +91 91 92422 62240
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Info row: Just, Chikitra | CIN */}
        <div className="flex items-center justify-between pb-4">
          <p className="text-xs font-light italic" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Just, <span className="font-medium not-italic" style={{ color: 'rgba(255,255,255,0.6)' }}>Chikitra</span>
          </p>
          <p className="text-xs font-light" style={{ color: 'rgba(255,255,255,0.5)' }}>
            CIN: U62091WB2025PTC285332
          </p>
        </div>

        {/* Large separator line */}
        <div style={{ borderTop: '2px solid rgba(230, 231, 232, 0.3)' }} />

        {/* Copyright */}
        <div className="py-4">
          <p className="text-center text-xs font-light" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            © 2026 Chikitra Medtech Solutions Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
