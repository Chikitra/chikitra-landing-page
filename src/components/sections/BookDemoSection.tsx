import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

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
      <section id="book-demo" className="section-dark py-24 relative overflow-hidden">
        {/* Background watermark */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <div className="text-[300px]">🤖</div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h2 className="text-4xl font-bold text-chikitra-mint mb-4">Thank you!</h2>
            <p className="text-xl text-chikitra-mint/80">
              Our team will reach out to you soon to schedule your demo.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book-demo" className="section-dark py-24 relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <div className="text-[300px]">🤖</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Content */}
          <div>
            <p className="text-chikitra-mint/70 italic mb-2">Don't take our word for it —</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chikitra-mint leading-tight mb-2">
              See the difference
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chikitra-light-green mb-2">
              yourself,
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chikitra-light-green uppercase mb-8">
              TODAY.
            </h2>

            <div className="border-t border-chikitra-mint/20 pt-8 mb-6">
              <p className="text-xl text-chikitra-teal mb-1">Book a demo</p>
              <p className="text-xl text-chikitra-teal mb-1">and enjoy a</p>
              <p className="text-2xl font-bold text-chikitra-light-green">FREE 30-day trial.</p>
            </div>

            <p className="text-chikitra-mint/60 text-sm">
              *Our team will reach out to help you get started.
            </p>
          </div>

          {/* Right - Form */}
          <div className="bg-chikitra-dark-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-chikitra-mint text-center mb-2">Book a demo</h3>
            <p className="text-chikitra-mint/70 text-center mb-8">See Chikitra in action</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-chikitra-mint mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-full bg-chikitra-mint-card text-chikitra-dark placeholder:text-chikitra-dark/40 focus:outline-none focus:ring-2 focus:ring-chikitra-teal"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-chikitra-mint mb-2 text-sm">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number (+91)"
                  className="w-full px-4 py-3 rounded-full bg-chikitra-mint-card text-chikitra-dark placeholder:text-chikitra-dark/40 focus:outline-none focus:ring-2 focus:ring-chikitra-teal"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-chikitra-mint mb-2 text-sm">
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full bg-chikitra-mint-card text-chikitra-dark placeholder:text-chikitra-dark/40 focus:outline-none focus:ring-2 focus:ring-chikitra-teal"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="btn-pill-light px-12 py-3 text-base font-medium"
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
