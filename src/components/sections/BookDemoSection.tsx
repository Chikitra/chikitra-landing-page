import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import botTablet from "@/assets/bot-tablet.png";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  email: z.string().trim().email("Please enter a valid email").optional().or(z.literal("")),
  clinic: z.string().trim().min(1, "Clinic/Organization name is required").max(100, "Clinic/Organization name must be less than 100 characters"),
});

const BookDemoSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    clinic: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace this URL with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxFnZKddQc985CR2DiqP8bECuULtF5Qn5aHCTmJ0qleH92xF2T39lp18HW45HRR-dia/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form data
      formSchema.parse(formData);
      setErrors({});
      setIsSubmitting(true);

      // Submit to Google Sheets in the background (fire and forget)
      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).catch(() => {
        // Silently handle errors since we can't read the response anyway
      });

      // Show success immediately (optimistic UI)
      // The submission will complete in the background
      setTimeout(() => {
        setIsSubmitted(true);
        toast({
          title: "Demo request submitted!",
          description: "Our team will reach out to you shortly.",
        });
        setIsSubmitting(false);
      }, 500); // Small delay to show the "Submitting..." state

    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        setIsSubmitting(false);
      } else {
        toast({
          title: "Submission failed",
          description: "Please try again later.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <>
        {/* ── MOBILE thank you ── */}
        <section
          id="book-demo"
          className="lg:hidden py-20 relative overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #C2D5C6 0%, #3A6B5E 40%, #0D3A33 100%)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04 }}>
            <img src={botTablet} alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 object-contain scale-x-[-1]" />
          </div>
          <div className="container mx-auto px-5 relative z-10 text-center py-16">
            <h2 className="text-3xl font-bold mb-3" style={{ color: '#0D3A33' }}>Thank you!</h2>
            <p className="text-lg" style={{ color: '#0D3A33' }}>
              Our team will reach out to you soon to schedule your demo.
            </p>
          </div>
        </section>

        {/* ── DESKTOP thank you ── */}
        <section id="book-demo" className="hidden lg:block py-24 relative overflow-hidden" style={{ backgroundColor: '#0D3A33' }}>
          <div className="absolute left-[10%] top-1/2 -translate-y-1/2 pointer-events-none h-full max-h-[700px]" style={{ opacity: 0.03 }}>
            <img src={botTablet} alt="" className="h-full w-auto scale-x-[-1]" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center py-20">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#C2E2CB' }}>Thank you!</h2>
              <p className="text-xl" style={{ color: '#C2E2CB' }}>
                Our team will reach out to you soon to schedule your demo.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* ================================================================
          MOBILE / TABLET LAYOUT  (hidden on lg and above)
          Gradient: #C2D5C6 (top) → #0D3A33 (bottom)
          ================================================================ */}
      <section
        id="book-demo"
        className="lg:hidden relative overflow-hidden py-10 px-5"
        style={{ background: 'linear-gradient(180deg, #C2D5C6 0%, #4A7A6A 45%, #0D3A33 100%)' }}
      >
        {/* Bot watermark – faint, centered behind content */}
        <div
          className="absolute pointer-events-none"
          style={{
            opacity: 0.07,
            top: '8%',
            left: '50%',
            transform: 'translateX(-50%) scaleX(-1)',
            width: '75%',
            maxWidth: '320px',
          }}
        >
          <img src={botTablet} alt="" className="w-full object-contain" />
        </div>

        <div className="relative z-10 max-w-sm mx-auto text-center">



          {/* ── Hero text ── */}
          <p className="text-lg sm:text-xl font-normal tracking-wider mb-5" style={{ color: '#0D3A33' }}>
            Don't take our word for it —
          </p>
          <h2 className="text-3xl sm:text-4xl leading-none mb-1" style={{ color: '#0D3A33', fontWeight: 400 }}>
            See the difference
          </h2>
          <h2 className="text-3xl sm:text-4xl leading-none mb-1" style={{ color: '#0D3A33', fontWeight: 600 }}>
            yourself,
          </h2>
          <h2 className="text-4xl sm:text-5xl uppercase leading-none mb-7" style={{ color: '#0D3A33', fontWeight: 800 }}>
            TODAY.
          </h2>

          {/* ── Divider ── */}
          <div className="mb-6 mx-auto" style={{ borderTop: '1.5px solid rgba(13, 58, 51, 0.25)', width: '90%' }} />

          {/* ── Sub-headline (sits on darker gradient — use light text) ── */}
          <p
            className="text-2xl sm:text-3xl font-extrabold leading-tight mb-8 mt-2 px-2"
            style={{
              color: '#C2E2CB',
              textShadow: '0 0 18px rgba(26, 158, 136, 0.55), 0 0 6px rgba(26, 158, 136, 0.3)',
            }}
          >
            Book a demo and enjoy<br />a FREE 30-day trial.
          </p>

          {/* ── Form card ── */}
          <div
            className="rounded-2xl p-5 sm:p-6 text-left mb-5"
            style={{
              backgroundColor: '#155146',
              border: '2px solid #1B6054',
              boxShadow: '0 0 20px rgba(27, 96, 84, 0.5)',
            }}
          >
            <h3 className="text-3xl font-extrabold text-center mb-1" style={{ color: '#C2E2CB' }}>
              Book a demo
            </h3>
            <p className="text-lg font-semibold text-center mb-5" style={{ color: '#C2E2CB' }}>
              See Chikitra in action
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name */}
              <div>
                <label htmlFor="mobile-name" className="block mb-1.5 text-sm font-medium" style={{ color: '#C2E2CB' }}>
                  Name
                </label>
                <input
                  type="text"
                  id="mobile-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 placeholder:opacity-40"
                  style={{ backgroundColor: '#123D34', color: '#C2E2CB', border: 'none' }}
                  required
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="mobile-phone" className="block mb-1.5 text-sm font-medium" style={{ color: '#C2E2CB' }}>
                  Phone number
                </label>
                <input
                  type="tel"
                  id="mobile-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number (+91)"
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 placeholder:opacity-40"
                  style={{ backgroundColor: '#123D34', color: '#C2E2CB', border: 'none' }}
                  required
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="mobile-email" className="block mb-1.5 text-sm font-medium" style={{ color: '#C2E2CB' }}>
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="mobile-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 placeholder:opacity-40"
                  style={{ backgroundColor: '#123D34', color: '#C2E2CB', border: 'none' }}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Clinic */}
              <div>
                <label htmlFor="mobile-clinic" className="block mb-1.5 text-sm font-medium" style={{ color: '#C2E2CB' }}>
                  Clinic/Organization name
                </label>
                <input
                  type="text"
                  id="mobile-clinic"
                  name="clinic"
                  value={formData.clinic}
                  onChange={handleChange}
                  placeholder="Enter the name of your clinic/organization"
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 placeholder:opacity-40"
                  style={{ backgroundColor: '#123D34', color: '#C2E2CB', border: 'none' }}
                  required
                />
                {errors.clinic && <p className="text-red-400 text-xs mt-1">{errors.clinic}</p>}
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full px-12 py-3 text-base font-bold transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#C2E2CB', color: '#0E3A33', border: 'none' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>

          {/* ── Disclaimer below the form card ── */}
          <p className="text-sm sm:text-base font-semibold text-center pb-4" style={{ color: '#C2E2CB' }}>
            *Our team will reach out to help you get started.
          </p>
        </div>
      </section>

      {/* ================================================================
          DESKTOP LAYOUT  (lg and above) — UNCHANGED
          ================================================================ */}
      <section id="book-demo" className="hidden lg:block py-24 relative overflow-hidden" style={{ backgroundColor: '#0D3A33' }}>
        {/* Background bot watermark - Behind left text section */}
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 pointer-events-none h-full max-h-[700px]" style={{ opacity: 0.03 }}>
          <img src={botTablet} alt="" className="h-full w-auto scale-x-[-1]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <p className="text-lg md:text-xl mb-2" style={{ color: '#C2E2CB' }}>Don't take our word for it —</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-2" style={{ color: '#C2E2CB', fontWeight: 500 }}>
                See the difference
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-2" style={{ color: '#C2E2CB', fontWeight: 500 }}>
                yourself,
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase mb-8" style={{ color: '#C2E2CB', fontWeight: 900 }}>
                TODAY.
              </h2>

              <div className="pt-8 mb-6 mx-auto lg:mx-0 w-full max-w-[450px]" style={{ borderTop: '2px solid rgba(194, 226, 203, 0.3)' }}>
                <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#C2E2CB' }}>Book a demo</p>
                <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#C2E2CB' }}>and enjoy a</p>
                <p className="text-2xl md:text-3xl font-bold" style={{ color: '#C2E2CB' }}>FREE 30-day trial.</p>
              </div>

              <p className="text-base md:text-lg font-light" style={{ color: '#C2E2CB' }}>
                *Our team will reach out to help you get started.
              </p>
            </div>

            {/* Right - Form */}
            <div className="rounded-3xl p-8 md:p-10" style={{ backgroundColor: '#155146', border: '2px solid #1B6054', boxShadow: '0 0 20px #1B6054' }}>
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ color: '#C2E2CB' }}>Book a demo</h3>
              <p className="text-xl md:text-2xl text-center mb-8" style={{ color: '#C2E2CB' }}>See Chikitra in action</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-base font-medium" style={{ color: '#C2E2CB' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-xl text-base focus:outline-none focus:ring-2 placeholder:opacity-40"
                    style={{ backgroundColor: '#123D34', color: '#C2E2CB', border: 'none' }}
                    required
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-base font-medium" style={{ color: '#C2E2CB' }}>
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number (+91)"
                    className="w-full px-5 py-4 rounded-xl text-base focus:outline-none focus:ring-2 placeholder:opacity-40"
                    style={{ backgroundColor: '#123D34', color: '#C2E2CB', border: 'none' }}
                    required
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-base font-medium" style={{ color: '#C2E2CB' }}>
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 rounded-xl text-base focus:outline-none focus:ring-2 placeholder:opacity-40"
                    style={{ backgroundColor: '#123D34', color: '#C2E2CB', border: 'none' }}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="clinic" className="block mb-2 text-base font-medium" style={{ color: '#C2E2CB' }}>
                    Clinic/Organization name
                  </label>
                  <input
                    type="text"
                    id="clinic"
                    name="clinic"
                    value={formData.clinic}
                    onChange={handleChange}
                    placeholder="Enter the name of your clinic/organization"
                    className="w-full px-5 py-3 rounded-xl text-base focus:outline-none focus:ring-2 placeholder:opacity-40"
                    style={{ backgroundColor: '#123D34', color: '#C2E2CB', border: 'none' }}
                    required
                  />
                  {errors.clinic && <p className="text-red-400 text-xs mt-1">{errors.clinic}</p>}
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full px-16 py-4 text-lg font-bold transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#C2E2CB', color: '#0E3A33', border: 'none' }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDemoSection;
