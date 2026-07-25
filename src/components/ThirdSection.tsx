import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Check, 
  HelpCircle, 
  Briefcase,
  Mic, 
  BookOpen, 
  Calculator, 
  Boxes, 
  BarChart4, 
  TrendingUp, 
  Brain
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const featureDetails = [
  {
    id: "commands",
    num: "01",
    title: "Voice and Text AI Commands",
    icon: Mic,
    iconBg: "bg-sky-50 text-sky-600",
    glowColor: "bg-sky-500/10",
    howItWorks: "Users can give AIBASS instructions through voice or text. The AI processes the command and completes the supported action or displays the requested business information.",
    supports: [
      "Create a sales invoice",
      "Show monthly profit and loss",
      "Generate a balance sheet",
      "Display category wise expenses",
      "Check available inventory",
      "Show low stock products",
      "View cash flow predictions",
    ],
    benefit: "Business owners can complete accounting tasks and access important information without navigating multiple software screens.",
  },
  {
    id: "accounting",
    num: "02",
    title: "AI Accounting and Bookkeeping",
    icon: BookOpen,
    iconBg: "bg-indigo-50 text-indigo-655",
    glowColor: "bg-indigo-500/10",
    howItWorks: "AIBASS organises accounting and bookkeeping information within one structured system. It records available business data and presents financial information through reports and category wise views.",
    supports: [
      "AI based accounting",
      "AI based bookkeeping",
      "Income and expense tracking",
      "Monthly profit and loss reports",
      "Balance sheet generation",
      "Category wise financial views",
    ],
    benefit: "Businesses can maintain clearer financial records, reduce dependence on separate spreadsheets and understand monthly performance more easily.",
  },
  {
    id: "gst",
    num: "03",
    title: "Automatic Invoicing and GST",
    icon: Calculator,
    iconBg: "bg-emerald-50 text-emerald-600",
    glowColor: "bg-emerald-500/10",
    howItWorks: "AIBASS creates sales invoices and calculates the applicable GST based on the type of transaction.",
    supports: [
      "Automatic sales invoice creation",
      "CGST and SGST calculations for intrastate sales",
      "IGST calculations for interstate sales",
      "Connected invoice and accounting records",
      "Automatic tax value calculation",
    ],
    benefit: "Businesses can prepare invoices faster, reduce manual tax calculations and maintain more consistent sales and accounting records.",
  },
  {
    id: "inventory",
    num: "04",
    title: "Inventory and Stock Management",
    icon: Boxes,
    iconBg: "bg-amber-50 text-amber-600",
    glowColor: "bg-amber-500/10",
    howItWorks: "AIBASS connects purchase and sales records with inventory quantities. Stock levels are updated when purchases are recorded or sales invoices are created.",
    supports: [
      "Purchase based stock additions",
      "Sales invoice based stock reductions",
      "Automatic inventory updates",
      "Current stock visibility",
      "Low stock reminders",
    ],
    benefit: "Businesses can reduce stock mismatches, identify products that need replenishment and avoid losing sales because of unexpected shortages.",
  },
  {
    id: "reporting",
    num: "05",
    title: "Financial Reporting",
    icon: BarChart4,
    iconBg: "bg-rose-50 text-rose-600",
    glowColor: "bg-rose-500/10",
    howItWorks: "AIBASS uses recorded accounting information to generate financial reports that show business performance and financial position.",
    supports: [
      "Monthly financial reports",
      "Profit and loss statements",
      "Balance sheets",
      "Income and expense summaries",
      "Category wise financial views",
    ],
    benefit: "Business owners can understand revenue, expenses, profit, assets and liabilities without waiting for reports to be prepared manually.",
  },
  {
    id: "cashflow",
    num: "06",
    title: "Cash Flow Prediction",
    icon: TrendingUp,
    iconBg: "bg-cyan-50 text-cyan-600",
    glowColor: "bg-cyan-500/10",
    howItWorks: "AIBASS analyses available financial information to estimate future cash availability and highlight possible cash flow changes.",
    supports: [
      "Review expected cash availability",
      "Identify possible cash shortages",
      "Plan upcoming expenses",
      "Understand future financial requirements",
    ],
    benefit: "Businesses can prepare for upcoming payments, manage expenses more carefully and reduce the risk of unexpected cash shortages.",
  },
  {
    id: "decision",
    num: "07",
    title: "AI Supported Decision Making",
    icon: Brain,
    iconBg: "bg-purple-50 text-purple-650",
    glowColor: "bg-purple-500/10",
    howItWorks: "AIBASS combines financial reports, category wise information, stock details and cash flow predictions to provide useful business insights.",
    supports: [
      "Monthly financial performance",
      "High expense categories",
      "Current stock position",
      "Low stock products",
      "Expected cash availability",
      "Important financial changes",
    ],
    benefit: "Business owners can make decisions using current business information instead of relying only on assumptions or delayed reports.",
  },
];

const SCROLL_LENGTH = 3200; // Duration of pinning in px

const ThirdSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Initialize GSAP ScrollTrigger for pinned scroll on Desktop
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: cardRef.current,
          start: "center center",
          end: `+=${SCROLL_LENGTH}`,
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            const index = Math.min(
              Math.floor(self.progress * featureDetails.length),
              featureDetails.length - 1
            );
            setActiveIndex(index);
          }
        });
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Programmatic scroll to index when left menu is clicked
  const scrollToFeature = (idx: number) => {
    const st = ScrollTrigger.getAll().find(s => s.trigger === cardRef.current);
    if (st) {
      const start = st.start;
      const end = st.end;
      const total = end - start;
      const target = start + (idx / featureDetails.length) * total + 20;
      window.scrollTo({
        top: target,
        behavior: "smooth"
      });
    } else {
      setActiveIndex(idx);
    }
  };

  const activeFeat = featureDetails[activeIndex];
  const ActiveIcon = activeFeat.icon;

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-50/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto space-y-4 px-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0F19] sm:text-4xl lg:text-5xl leading-tight">
            AI Accounting Features That Simplify{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Everyday Business Management
            </span>
          </h2>
          <p className="text-sm font-semibold leading-relaxed text-slate-500 max-w-4xl mx-auto">
            AIBASS combines AI based accounting software, AI bookkeeping software, GST accounting software, inventory accounting software, financial reporting software and cash flow forecasting software in one connected platform.
          </p>
        </div>

        {/* ─── DESKTOP UNIFIED SINGLE CARD SPLIT VIEW ─── */}
        <div className="hidden lg:block pt-6">
          <div ref={cardRef} className="rounded-2xl border border-slate-200/60 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.05)] grid lg:grid-cols-[0.38fr_0.62fr] gap-10 p-10 items-stretch min-h-[650px] relative overflow-hidden">
            
            {/* Soft decorative background highlight inside card based on active feature */}
            <div className={`absolute top-0 right-0 w-[40%] h-full filter blur-3xl pointer-events-none opacity-20 transition-all duration-700 ${activeFeat.glowColor}`} />

            {/* Left Side: Sticky Navigation items INSIDE the card */}
            <div className="space-y-2.5 pr-4 border-r border-slate-100 flex flex-col justify-between">
              {featureDetails.map((feat, index) => {
                const isSelected = index === activeIndex;
                const Icon = feat.icon;
                return (
                  <button
                    key={feat.id}
                    onClick={() => scrollToFeature(index)}
                    className={`w-full flex items-center gap-4 py-3 px-3.5 rounded-xl text-left transition-all duration-355 ${
                      isSelected
                        ? "bg-slate-900 text-white shadow-md translate-x-1.5"
                        : "bg-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isSelected ? "bg-white/15 text-white" : feat.iconBg
                    }`}>
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest block text-slate-400">
                        Feature {feat.num}
                      </span>
                      <span className="font-extrabold text-sm sm:text-base block truncate leading-tight mt-0.5">
                        {feat.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Side: Active details changing inside the static card */}
            <div className="flex flex-col justify-between h-full relative z-10 pl-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeat.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="space-y-6 flex flex-col justify-between h-full"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${activeFeat.iconBg} shadow-sm`}>
                        <ActiveIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block">Feature {activeFeat.num}</span>
                        <h3 className="text-3xl font-extrabold text-[#0B0F19] tracking-tight leading-tight">{activeFeat.title}</h3>
                      </div>
                    </div>

                    {/* How It Works */}
                    <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-100 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <HelpCircle className="h-4 w-4" />
                        <span className="text-[10px] font-extrabold uppercase tracking-wider">How it works</span>
                      </div>
                      <p className="text-base sm:text-lg font-bold leading-relaxed text-slate-700">{activeFeat.howItWorks}</p>
                    </div>

                    {/* Supports List */}
                    <div className="space-y-2.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block pl-1">Key Operations Supported</span>
                      <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                        {activeFeat.supports.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                              <Check className="h-3 w-3 stroke-[3.5]" />
                            </div>
                            <span className="text-sm sm:text-base font-bold text-slate-700 leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Business Benefit */}
                  <div className="bg-indigo-50/60 border border-indigo-100/50 p-5 rounded-xl mt-6">
                    <div className="flex items-center gap-1.5 text-indigo-650 mb-1">
                      <Briefcase className="h-4 w-4" />
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">Business Benefit</span>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-bold text-indigo-955 leading-relaxed">{activeFeat.benefit}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* ─── MOBILE/TABLET VIEW (Stack of all cards scrolling normally) ─── */}
        <div className="lg:hidden space-y-8 px-4">
          {featureDetails.map((feat) => {
            const CardIcon = feat.icon;
            return (
              <div
                key={feat.id}
                className={`rounded-xl border-t-[6px] border-x border-b bg-white p-6 sm:p-8 shadow-md flex flex-col justify-between ${
                  feat.id === "commands" ? "border-t-[#0EA5E9]" :
                  feat.id === "accounting" ? "border-t-[#6366F1]" :
                  feat.id === "gst" ? "border-t-[#10B981]" :
                  feat.id === "inventory" ? "border-t-[#F59E0B]" :
                  feat.id === "reporting" ? "border-t-[#F43F5E]" :
                  feat.id === "cashflow" ? "border-t-[#06B6D4]" :
                  "border-t-[#8B5CF6]"
                }`}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${feat.iconBg} shadow-sm`}>
                      <CardIcon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest block">Feature {feat.num}</span>
                      <h3 className="text-xl font-extrabold text-[#0B0F19] tracking-tight leading-tight">{feat.title}</h3>
                    </div>
                  </div>

                  {/* How It Works */}
                  <div className="bg-slate-50/80 rounded-xl p-4.5 border border-slate-100 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <HelpCircle className="h-4 w-4" />
                      <span className="text-[9px] font-extrabold uppercase tracking-wider">How it works</span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold leading-relaxed text-slate-655">{feat.howItWorks}</p>
                  </div>

                  {/* Supports List */}
                  <div className="space-y-2.5">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 block pl-1">Key Operations Supported</span>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {feat.supports.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                            <Check className="h-3 w-3 stroke-[3.5]" />
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-slate-700 leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Business Benefit */}
                <div className="bg-indigo-50/60 border border-indigo-100/50 p-4.5 rounded-xl mt-6">
                  <div className="flex items-center gap-1.5 text-indigo-650 mb-1">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-indigo-600">Business Benefit</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-indigo-955 leading-relaxed">{feat.benefit}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ThirdSection;