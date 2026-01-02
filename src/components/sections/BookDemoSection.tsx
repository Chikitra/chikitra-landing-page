import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import botTablet from "@/assets/bot-tablet.png";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  email: z.string().trim().email("Please enter a valid email").optional().or(z.literal("")),
});

const BookDemoSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      formSchema.parse(formData);
      setErrors({});
      setIsSubmitted(true);
      toast({
        title: "Demo request submitted!",
        description: "Our team will reach out to you shortly.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  if (isSubmitted) {
    return (
      <section id="book-demo" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0D3A33' }}>
        {/* Background bot watermark */}
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
    );
  }

  return (
    <section id="book-demo" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0D3A33' }}>
      {/* Background bot watermark - Behind left text section */}
      <div className="absolute left-[10%] top-1/2 -translate-y-1/2 pointer-events-none h-full max-h-[700px]" style={{ opacity: 0.03 }}>
        <img src={botTablet} alt="" className="h-full w-auto scale-x-[-1]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content - Center on mobile/tablet */}
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

            <div className="pt-8 mb-6 mx-auto lg:mx-0" style={{ borderTop: '1px solid rgba(194, 226, 203, 0.3)' }}>
              <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#C2E2CB' }}>Book a demo</p>
              <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#C2E2CB' }}>and enjoy a</p>
              <p className="text-2xl md:text-3xl font-bold" style={{ color: '#C2E2CB' }}>FREE 30-day trial.</p>
            </div>

            <p className="text-base md:text-lg" style={{ color: '#C2E2CB' }}>
              *Our team will reach out to help you get started.
            </p>
          </div>

          {/* Right - Form */}
          <div className="rounded-3xl p-8 md:p-10" style={{ backgroundColor: '#155146' }}>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ color: '#C2E2CB' }}>Book a demo</h3>
            <p className="text-xl md:text-2xl text-center mb-8" style={{ color: '#C2E2CB' }}>See Chikitra in action</p>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  style={{
                    backgroundColor: '#123D34',
                    color: '#C2E2CB',
                    border: 'none'
                  }}
                  required
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
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
                  style={{
                    backgroundColor: '#123D34',
                    color: '#C2E2CB',
                    border: 'none'
                  }}
                  required
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
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
                  style={{
                    backgroundColor: '#123D34',
                    color: '#C2E2CB',
                    border: 'none'
                  }}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="rounded-full px-16 py-4 text-lg font-bold transition-all duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: '#C2E2CB',
                    color: '#0E3A33',
                    border: 'none'
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemoSection;
