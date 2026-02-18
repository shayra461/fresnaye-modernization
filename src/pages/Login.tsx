import Navbar from "@/components/Navbar";
import heroBg from "@/assets/hero-bg.jpg";
import { Lock } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `var(--gradient-hero), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md">
          {/* Logo mark */}
          <div className="text-center mb-10">
            <div className="inline-flex flex-col items-center">
              <span className="font-display text-5xl font-semibold text-white tracking-wide mb-1">
                F<span className="text-teal">&</span>C
              </span>
              <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/60 font-light">
                Fresnaye & Company
              </span>
            </div>
          </div>

          {/* Login card */}
          <div className="bg-white/95 backdrop-blur-sm shadow-elevated p-8">
            <h2 className="font-display text-2xl text-foreground font-medium mb-2 text-center">
              Client Portal
            </h2>
            <p className="font-body text-sm text-muted-foreground text-center mb-8">
              Sign in to access your account
            </p>

            {/* SSO Button */}
            <a
              href="http://fresnaye.com/wp-login.php"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-navy text-white font-body text-sm font-medium py-3.5 hover:bg-navy-mid transition-colors mb-6"
            >
              <Lock size={15} />
              Login with C2
            </a>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-border" />
              <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">OR</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Standard login form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open("http://fresnaye.com/wp-login.php", "_blank");
              }}
              className="space-y-5"
            >
              <div>
                <label className="font-body text-xs font-medium text-foreground uppercase tracking-wider block mb-2">
                  Username or Email Address
                </label>
                <input
                  type="text"
                  className="w-full border border-input px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-teal transition-colors bg-background"
                  placeholder="Enter your username or email"
                />
              </div>

              <div>
                <label className="font-body text-xs font-medium text-foreground uppercase tracking-wider block mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    className="w-full border border-input px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-teal transition-colors bg-background pr-12"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors font-body text-xs"
                  >
                    {showPass ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-teal" />
                  <span className="font-body text-sm text-muted-foreground">Remember Me</span>
                </label>
                <a
                  href="http://fresnaye.com/wp-login.php?action=lostpassword"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-teal hover:underline"
                >
                  Lost your password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-teal text-white font-body text-sm font-medium py-3.5 hover:bg-teal-light transition-colors shadow-teal"
              >
                Log In
              </button>
            </form>
          </div>

          <p className="text-center mt-6 font-body text-xs text-white/50">
            <a href="/" className="hover:text-white/80 transition-colors">← Go to Fresnaye & Company</a>
          </p>
        </div>
      </div>
    </div>
  );
}
