import { Link } from "react-router-dom";
import ChikitraLogo from "@/components/ChikitraLogo";

const SignIn = () => {
  return (
    <div className="min-h-screen section-light flex flex-col">
      {/* Header */}
      <header className="py-6 px-6">
        <ChikitraLogo variant="light" size="md" />
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="bg-chikitra-mint-card rounded-2xl p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-chikitra-dark text-center mb-2">
              Sign in
            </h1>
            <p className="text-chikitra-dark/60 text-center mb-8">
              Welcome back to Chikitra
            </p>

            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-chikitra-dark mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full bg-background text-chikitra-dark placeholder:text-chikitra-dark/40 focus:outline-none focus:ring-2 focus:ring-chikitra-teal border border-border"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-chikitra-dark mb-2 text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-full bg-background text-chikitra-dark placeholder:text-chikitra-dark/40 focus:outline-none focus:ring-2 focus:ring-chikitra-teal border border-border"
                />
              </div>

              <button
                type="button"
                className="w-full btn-pill-filled py-3 text-base font-medium"
              >
                Sign in
              </button>
            </form>

            <p className="text-center text-chikitra-dark/60 text-sm mt-6">
              Don't have an account?{" "}
              <Link to="/#book-demo" className="text-chikitra-teal font-medium hover:underline">
                Book a demo
              </Link>
            </p>
          </div>

          <p className="text-center text-chikitra-dark/40 text-sm mt-8">
            <Link to="/" className="hover:text-chikitra-teal transition-colors">
              ← Back to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
