import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Sparkles, 
  Menu, 
  X, 
  ArrowUp,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { AiAccountingHero } from "@/components/AiAccountingHero";
import { AiAccountingFeatures } from "@/components/AiAccountingFeatures";
import { AiAccountingWorkflow } from "@/components/AiAccountingWorkflow";
import { AiAccountingChallenges } from "@/components/AiAccountingChallenges";
import { AiAccountingCommands } from "@/components/AiAccountingCommands";
import { AiAccountingFeaturesList } from "@/components/AiAccountingFeaturesList";
import { AiAccountingHowItWorks } from "@/components/AiAccountingHowItWorks";
import { AiAccountingDashboardSection } from "@/components/AiAccountingDashboardSection";
import { AiAccountingGstSection } from "@/components/AiAccountingGstSection";
import { AiAccountingBusinessNeeds } from "@/components/AiAccountingBusinessNeeds";
import { AiAccountingComparison } from "@/components/AiAccountingComparison";
import { AiAccountingBenefits } from "@/components/AiAccountingBenefits";
import { AiAccountingDemoSection } from "@/components/AiAccountingDemoSection";
import { AiAccountingSecurity } from "@/components/AiAccountingSecurity";
import { AiAccountingTestimonials } from "@/components/AiAccountingTestimonials";
import { AiAccountingPricing } from "@/components/AiAccountingPricing";
import { AiAccountingBottomBanner } from "@/components/AiAccountingBottomBanner";
import { AiAccountingFaq } from "@/components/AiAccountingFaq";
import Footer from "@/components/Footer";

const AiAccountingExplained = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Set page meta title and description dynamically for SEO
  useEffect(() => {
    document.title = "AI Accounting Software for Smarter Business Finance | AIBASS";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Simplify bookkeeping, GST invoices, inventory, financial reports and cash flow with AIBASS AI accounting software. Start your 30 day free trial."
      );
    }
    
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

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const productHighlights = [
    "Voice and Text Commands",
    "Automatic GST Calculation",
    "Connected Stock Updates",
    "Clear Financial Reports",
    "Cash Flow Predictions"
  ];

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden text-slate-950 font-sans">
      
      {/* Dynamic Background Glow */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(218, 235, 255, 0.7) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(224, 231, 255, 0.6) 0%, transparent 50%)
          `,
        }} 
      />

      {/* Navigation Header */}
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
          <div className="flex items-center justify-between px-4 py-3">
            
            {/* Logo */}
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate("/")}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-sm">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">AIBASS</span>
            </div>

            {/* Menu Links */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="/#features" className="text-xs font-bold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em]">Features</a>
              <a href="/#how-it-works" className="text-xs font-bold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em] whitespace-nowrap">How It Works</a>
              <a href="/#business" className="text-xs font-bold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em] whitespace-nowrap">Businesses</a>
              <a href="/#why-choose" className="text-xs font-bold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em] whitespace-nowrap">Why Choose AIBASS</a>
              <a href="/#pricing" className="text-xs font-bold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em]">Pricing</a>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => navigate("/auth?tab=signup")}
                className="hidden lg:flex h-10 items-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Get Started
              </Button>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-750 hover:text-slate-950 hover:bg-slate-100/40 focus:outline-none transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
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
                    href="/#features"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-extrabold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em]"
                  >
                    Features
                  </a>
                  <a
                    href="/#how-it-works"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-extrabold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em]"
                  >
                    How It Works
                  </a>
                  <a
                    href="/#business"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-extrabold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em]"
                  >
                    Businesses
                  </a>
                  <a
                    href="/#why-choose"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-extrabold text-slate-655 hover:text-slate-950 transition-colors uppercase tracking-[0.15em]"
                  >
                    Why Choose AIBASS
                  </a>
                  <a
                    href="/#pricing"
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

      {/* Main Container */}
      <main className="relative z-10 mx-auto max-w-[1380px] w-full px-4 sm:px-8 lg:px-12 pb-16">
        
        {/* Section 1: Hero Block */}
        <AiAccountingHero />

        {/* Section 2: Product Highlights */}
        <section id="highlights" className="py-6 md:py-8 border-t border-slate-100 scroll-mt-24">
          <div className="max-w-4xl mx-auto bg-white border border-slate-200/60 rounded-[32px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.03)] space-y-6">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight text-center">
              Product Highlights
            </h3>
            <div className="w-12 h-1 bg-indigo-600 rounded-full mx-auto" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4 justify-center">
              {productHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 justify-center sm:justify-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: AI Based Accounting Software Built for Modern Businesses */}
        <section id="about-aibass" className="py-6 md:py-8 border-t border-slate-100 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-[0.2em] text-indigo-655 uppercase block">Intelligent Workspace</span>
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  AI Based Accounting Software Built for Modern Businesses
                </h2>
              </div>
              
              <div className="space-y-4 text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
                <p>
                  AIBASS is an AI based accounting software that makes everyday business finance easier to manage. 
                  It brings accounting, bookkeeping, invoicing, GST, inventory, financial reporting and cash flow 
                  information into one connected platform.
                </p>
                <p>
                  Instead of moving through several menus to find reports or complete routine activities, 
                  users can tell AIBASS what they need using a voice or text command. The platform processes 
                  the instruction and completes the supported action or displays the requested information.
                </p>
                <p className="font-semibold text-slate-850">
                  This simpler approach helps business owners spend less time navigating accounting software 
                  and more time understanding sales, expenses, stock and financial performance.
                </p>
              </div>

              <div className="pt-2">
                <Button 
                  onClick={() => {
                    const element = document.getElementById("ai-features");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-indigo-600 hover:bg-indigo-755 text-white font-semibold px-6 py-5 rounded-full flex items-center gap-2 group transition-all shadow-md hover:shadow-indigo-200"
                >
                  Explore AIBASS Features
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-sm rounded-[32px] border border-slate-200/60 bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.03)] overflow-hidden">
                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 rounded-full bg-indigo-50/50 -z-10" />
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">AIBASS Ecosystem</h4>
                <div className="space-y-3">
                  {["Unified Ledger", "Command Center", "GST Automations", "Inventory Ledger", "Predictive Analytics"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-655" />
                      <span className="text-xs font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 4: What Is AI Accounting Software and How Does It Help with Day to Day Business Finance? */}
        <section className="py-6 md:py-8 border-t border-slate-100">
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold tracking-[0.2em] text-indigo-655 uppercase block">How It Helps</span>
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  What Is AI Accounting Software and How Does It Help with Day to Day Business Finance?
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-4 text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
                <p>
                  AI accounting software uses intelligent automation to simplify accounting, bookkeeping and financial management. 
                  It helps businesses organise financial data, create invoices, calculate GST, update inventory, generate reports and 
                  access important information with less manual work.
                </p>
                <p>
                  AIBASS makes these activities easier by allowing users to give voice or text commands. Business owners can request a 
                  profit and loss statement, generate a balance sheet, check stock, view category wise expenses or review cash flow predictions 
                  without searching through multiple software screens.
                </p>
                <p className="font-semibold text-slate-850">
                  By connecting accounting, invoicing, GST, inventory and reporting in one platform, AIBASS helps businesses save time, 
                  understand their financial position and make informed day to day decisions.
                </p>
              </div>

            </div>

            {/* Feature Cards Grid (how it helps) */}
            <AiAccountingFeatures />

            {/* Workflow Pipeline Progress Bar */}
            <AiAccountingWorkflow />
          </div>
        </section>

        {/* Section 5: Make Everyday Accounting Easier with AI */}
        <AiAccountingChallenges />

        {/* Section 6: Manage Accounting Through Voice or Text Commands */}
        <AiAccountingCommands />

        {/* Section 7: AI Accounting Features for Everyday Business Management */}
        <AiAccountingFeaturesList />

        {/* Section 8: How AIBASS Works */}
        <AiAccountingHowItWorks />

        {/* Section 9: Financial Dashboard for a Clear View of Business Performance */}
        <AiAccountingDashboardSection />

        {/* Section 10: Automatic GST Calculation for Sales Invoices */}
        <AiAccountingGstSection />

        {/* Section 11: AI Accounting Software for Different Business Needs */}
        <AiAccountingBusinessNeeds />

        {/* Section 12: AI Accounting Software Versus Traditional Accounting Tools */}
        <AiAccountingComparison />

        {/* Section 13: Why Businesses Choose AIBASS */}
        <AiAccountingBenefits />

        {/* Section 14: See AIBASS in Action */}
        <AiAccountingDemoSection />

        {/* Section 15: Security Designed to Protect Your Business Financial Data */}
        <AiAccountingSecurity />

        {/* Section 16: Helping Businesses Manage Accounts More Easily (Testimonials) */}
        <AiAccountingTestimonials />

        {/* Section 17: Simple and Affordable Pricing */}
        <AiAccountingPricing />

        {/* Section 18: Make Business Accounting Easier with AI (Bottom Banner Callout) */}
        <AiAccountingBottomBanner />

        {/* Section 19: Frequently Asked Questions */}
        <AiAccountingFaq />

      </main>

      {/* Website Footer */}
      <Footer />

      {/* Scroll to Top Button */}
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

export default AiAccountingExplained;
