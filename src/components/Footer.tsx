import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import iconLogo from "@/assets/chikitra-logo.avif";
import chikitraLogo from "@/assets/Long_logo_original_final.png";
import botPhone from "@/assets/bot-phone.png";

// Uniform filled SVG social icons — all 20×20 viewBox, rendered at 20px
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
  </svg>
);

const socialLinks = [
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/chikitra_official?utm_source=qr&igsh=aWluN2tia3JyeXNv",
    label: "Instagram"
  },
  {
    icon: WhatsAppIcon,
    href: "https://wa.me/918637389951",
    label: "WhatsApp"
  },
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/company/chikitra/",
    label: "LinkedIn"
  },
  {
    icon: FacebookIcon,
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
            {/* Wrapper constrains separator line width to match logo+icons row */}
            <div className="inline-flex flex-col items-stretch">
              {/* Short + Long logo side by side */}
              <div className="flex items-center gap-2">
                <img src={iconLogo} alt="Chikitra Icon" className="h-7 w-auto object-contain" />
                <img src={chikitraLogo} alt="Chikitra" className="h-5 w-auto object-contain" />
              </div>

              {/* Separator line — only spans between logo and social icons, not full column */}
              <div className="mt-3 mb-4" style={{ borderBottom: '1.5px solid rgba(230, 231, 232, 0.35)' }} />

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center transition-colors hover:opacity-70"
                    style={{ color: 'rgba(222, 222, 222, 0.75)' }}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
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
