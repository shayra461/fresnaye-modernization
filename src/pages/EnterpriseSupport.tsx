import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LifeBuoy, MessageSquare, Clock, CheckCircle } from "lucide-react";
import heroSupport from "@/assets/hero-support.jpg";

const features = [
  {
    icon: LifeBuoy,
    title: "Dedicated Support",
    desc: "Enterprise clients receive dedicated account managers and priority escalation paths for all inquiries.",
  },
  {
    icon: MessageSquare,
    title: "Ticketing System",
    desc: "Submit and track support tickets through our secure portal. Create new tickets or access existing ones with a one-time password.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Our enterprise support team operates across time zones to ensure responsive assistance whenever you need it.",
  },
  {
    icon: CheckCircle,
    title: "Guaranteed SLAs",
    desc: "Service Level Agreements tailored to the criticality of your operations, with defined response and resolution times.",
  },
];

export default function EnterpriseSupport() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Hero */}
      <div className="pt-20 relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroSupport})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "ken-burns 24s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, hsl(220 60% 8% / 0.96) 0%, hsl(218 55% 14% / 0.85) 60%, hsl(175 70% 41% / 0.15) 100%)" }} />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(hsl(175 70% 41%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 70% 41%) 1px, transparent 1px)", backgroundSize: "70px 70px" }}
        />
        <div className="container mx-auto px-6 py-28 relative">
          <div className="flex items-center gap-3 mb-6" style={{ animation: "fade-in 0.6s ease both" }}>
            <div className="w-12 h-px bg-teal" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-teal font-medium">
              Client Services
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-6" style={{ animation: "fade-in 0.7s ease 0.1s both" }}>
            Enterprise <em>Support</em>
          </h1>
          <p className="font-body text-white/65 text-lg max-w-xl leading-relaxed" style={{ animation: "fade-in 0.7s ease 0.2s both" }}>
            Dedicated support infrastructure for our enterprise clients. Access your support portal, open tickets, and connect with our team.
          </p>
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "linear-gradient(to bottom, transparent, hsl(220 20% 97%))" }} />
      </div>

      {/* Support Portal */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-divider" />
              <h2 className="font-display text-4xl text-foreground font-light mb-6">
                Access Your <em>Support Portal</em>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Enterprise clients can access our dedicated support system. Sign in to submit and manage your support tickets, or use a one-time password to open a new ticket as a guest.
              </p>

              <div className="space-y-4">
                <a
                  href="https://fresnaye.com/support/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-6 py-4 bg-navy text-white font-body text-sm font-medium hover:bg-navy-mid transition-colors group"
                >
                  <span>Sign In to Support Portal</span>
                  <span className="text-teal group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="https://fresnaye.com/support/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-6 py-4 border border-border text-foreground font-body text-sm font-medium hover:border-teal/40 hover:bg-muted transition-all group"
                >
                  <span>Create New Ticket as Guest</span>
                  <span className="text-teal group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="https://fresnaye.com/open-ticket-page/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-6 py-4 border border-border text-foreground font-body text-sm font-medium hover:border-teal/40 hover:bg-muted transition-all group"
                >
                  <span>Open Existing Ticket (One-Time Password)</span>
                  <span className="text-teal group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-5 p-6 bg-card border border-border hover:border-teal/30 transition-all shadow-card"
                >
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <f.icon size={18} className="text-teal" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-semibold text-foreground mb-2">{f.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
