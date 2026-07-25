import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/api";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUp,
  Award,
  BarChart3,
  Building2,
  CheckCircle2,
  Clock,
  Database,
  Lock,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  X,
  Zap,
  Menu,
} from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";
import SeventhSection from "@/components/SeventhSection";
import FaqSection from "@/components/FaqSection";
import EighthSection from "@/components/EighthSection";
import Footer from "@/components/Footer";

type Stat = {
  icon: JSX.Element;
  value: string;
  label: string;
};

const fallbackFeatures = [
  "AI-assisted bookkeeping with clean audit trails",
  "Payroll, tax, and GST workflows in one secure workspace",
  "Real-time financial dashboards for leadership teams",
  "Automated reconciliation with exception detection",
  "Enterprise-grade access control and encrypted records",
  "Fast reporting for profit, cash flow, and compliance",
];

const fallbackStats: Stat[] = [
  { icon: <TrendingUp className="h-7 w-7" />, value: "42%", label: "faster month-end close" },
  { icon: <Users className="h-7 w-7" />, value: "10k+", label: "business users supported" },
  { icon: <BarChart3 className="h-7 w-7" />, value: "99.9%", label: "workflow uptime target" },
];

const Index = () => {
  const navigate = useNavigate();
  const [showDemo, setShowDemo] = useState(false);
  const [features, setFeatures] = useState<string[]>(fallbackFeatures);
  const [stats, setStats] = useState<Stat[]>(fallbackStats);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    fetch(`${API_BASE_URL}/dashboard`)
      .then((res) => res.json())
      .then((data) => {
        if (data.features?.length) {
          setFeatures(data.features);
        }

        if (data.stats?.length) {
          const mappedStats = data.stats.map((stat: { value: string; label: string }, index: number) => {
            const icons = [
              <TrendingUp key="trend" className="h-7 w-7" />,
              <Users key="users" className="h-7 w-7" />,
              <BarChart3 key="chart" className="h-7 w-7" />,
            ];

            return {
              icon: icons[index % icons.length],
              value: stat.value,
              label: stat.label,
            };
          });
          setStats(mappedStats);
        }
      })
      .catch((err) => console.error("Error fetching dashboard data:", err));
  }, []);

  const highlights = [
    { icon: Shield, title: "Bank-Level Security", desc: "Encrypted financial records" },
    { icon: Zap, title: "Real-Time AI", desc: "Fast operational insight" },
    { icon: Lock, title: "Compliance Ready", desc: "Built for regulated teams" },
    { icon: Clock, title: "Always Available", desc: "Reliable finance workspace" },
  ];

  const benefits = [
    { icon: Database, title: "Unified Data Layer", desc: "Finance, payroll, tax, and inventory data stay connected." },
    { icon: Award, title: "Executive Polish", desc: "Clear reporting surfaces designed for confident decisions." },
    { icon: Users, title: "Team Ready", desc: "A secure shared workspace for accountants and operators." },
  ];

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden text-slate-950">
      {/* Light Sky Blue Glow */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none" 
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #a5cfffff, transparent)
          `,
        }} 
      />
      {showDemo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-2xl"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 24 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className="liquid-panel relative w-full max-w-4xl rounded-[36px] p-4 shadow-[0_30px_90px_rgba(15,23,42,0.32)] sm:p-6"
          >
            <Button
              onClick={() => setShowDemo(false)}
              aria-label="Close demo"
              className="absolute -right-3 -top-3 z-50 h-11 w-11 rounded-full border border-white/45 bg-white/45 p-0 text-slate-900 shadow-lg backdrop-blur-xl hover:bg-white/70"
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="relative overflow-hidden rounded-[28px] bg-slate-950 pt-[56.25%] shadow-inner">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/L83KfmWD3Pg?si=et24Kysqr38PY2XI&autoplay=1"
                title="SHREE ANDAL AI SOFTWARE SOLUTIONS (OPC) PRIVATE LIMITED Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute left-0 top-0 h-full w-full"
              />
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                SHREE ANDAL AI SOFTWARE SOLUTIONS Demo
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-655">
                A closer look at intelligent finance operations for modern businesses.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-x-0 top-4 z-50 mx-auto max-w-6xl px-4 sm:px-6"
      >
        <div className="flex flex-col rounded-2xl border border-white/40 bg-white/65 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-350">
          {/* Header main row */}
          <div className="flex items-center justify-between px-4 py-3">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-sm">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">AIBASS</span>
            </motion.div>

            <nav className="hidden lg:flex items-center gap-6">
              <a href="#features" className="text-xs font-bold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em]">Features</a>
              <a href="#how-it-works" className="text-xs font-bold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em] whitespace-nowrap">How It Works</a>
              <a href="#business" className="text-xs font-bold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em] whitespace-nowrap">Businesses</a>
              <a href="#why-choose" className="text-xs font-bold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em] whitespace-nowrap">Why Choose AIBASS</a>
              <a href="#pricing" className="text-xs font-bold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em]">Pricing</a>
            </nav>

            <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
              <Button
                onClick={() => navigate("/auth?tab=signup")}
                className="hidden lg:flex h-10 items-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Get Started
              </Button>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-750 hover:text-slate-950 hover:bg-slate-100/40 focus:outline-none transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </motion.div>
          </div>

          {/* Mobile menu dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="flex flex-col gap-3.5 px-6 pb-6 pt-2 border-t border-slate-150/40">
                  <a
                    href="#features"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-extrabold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em]"
                  >
                    Features
                  </a>
                  <a
                    href="#how-it-works"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-extrabold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em]"
                  >
                    How It Works
                  </a>
                  <a
                    href="#business"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-extrabold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em]"
                  >
                    Businesses
                  </a>
                  <a
                    href="#why-choose"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-extrabold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em]"
                  >
                    Why Choose AIBASS
                  </a>
                  <a
                    href="#pricing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-extrabold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em]"
                  >
                    Pricing
                  </a>
                  
                  <div className="h-px bg-slate-200/50 my-1" />
                  
                  <div className="flex items-center">
                    <Button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        navigate("/auth?tab=signup");
                      }}
                      className="w-full h-10 rounded-full bg-slate-950 text-sm font-semibold text-white shadow hover:bg-slate-800"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <main className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <HeroSection onWatchDemo={() => setShowDemo(true)} />
      </main>

      {/* Full-width First Section */}
      <div className="relative mx-auto max-w-[1380px] w-full px-4 sm:px-8 lg:px-12">
        <FirstSection onWatchDemo={() => setShowDemo(true)} />
      </div>

      {/* Full-width Third Section */}
      <div id="features" className="relative mx-auto max-w-7xl w-full px-4 sm:px-8 lg:px-12 mt-2">
        <ThirdSection />
      </div>

      {/* Full-width Second Section */}
      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-8 lg:px-12 mt-12">
        <SecondSection />
      </div>

      {/* Full-width Fourth Section */}
      <div id="how-it-works" className="relative mx-auto max-w-7xl w-full px-4 sm:px-8 lg:px-12 mt-12">
        <FourthSection />
      </div>

      {/* Full-width Fifth Section */}
      <div id="business" className="relative mx-auto max-w-7xl w-full px-4 sm:px-8 lg:px-12 mt-12">
        <FifthSection />
      </div>

      {/* Full-width Sixth Section */}
      <div id="why-choose" className="relative mx-auto max-w-7xl w-full px-4 sm:px-8 lg:px-12 mt-12">
        <SixthSection />
      </div>

      {/* Full-width Seventh Section */}
      <div id="pricing" className="relative mx-auto max-w-7xl w-full px-4 sm:px-8 lg:px-12 mt-12">
        <SeventhSection />
      </div>

      {/* Full-width FAQ Section */}
      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-8 lg:px-12 mt-12">
        <FaqSection />
      </div>

      {/* Full-width Eighth Section */}
      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-8 lg:px-12 mt-12 mb-24">
        <EighthSection />
      </div>

      <Footer />

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 border border-slate-800 text-white shadow-xl hover:bg-slate-850 hover:scale-105 active:scale-95 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
