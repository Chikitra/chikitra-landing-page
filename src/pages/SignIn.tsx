import { useEffect } from "react";

const SignIn = () => {
  useEffect(() => {
    window.location.href = "https://app.chikitra.com";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center section-light">
      <p className="text-chikitra-dark">Redirecting to app.chikitra.com...</p>
    </div>
  );
};

export default SignIn;
