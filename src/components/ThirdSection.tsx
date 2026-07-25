import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
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

const featureDetails = [
  {
    id: "commands",
    num: "01",
    title: "Voice and Text AI Commands",
    icon: Mic,
    colorClass: "border-t-[#0EA5E9]",
    iconBg: "bg-sky-50 text-sky-600",
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
    colorClass: "border-t-[#6366F1]",
    iconBg: "bg-indigo-50 text-indigo-650",
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
    colorClass: "border-t-[#10B981]",
    iconBg: "bg-emerald-50 text-emerald-600",
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
    colorClass: "border-t-[#F59E0B]",
    iconBg: "bg-amber-50 text-amber-600",
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
    colorClass: "border-t-[#F43F5E]",
    iconBg: "bg-rose-50 text-rose-600",
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
    colorClass: "border-t-[#06B6D4]",
    iconBg: "bg-cyan-50 text-cyan-600",
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
    colorClass: "border-t-[#8B5CF6]",
    iconBg: "bg-purple-50 text-purple-650",
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

const ThirdSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featureDetails.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + featureDetails.length) % featureDetails.length);
  };

  // Auto-scroll effect: advances every 5 seconds, resets when activeIndex changes (including manual interactions)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const getCardStyle = (index: number) => {
    const total = featureDetails.length;
    let offset = index - activeIndex;

    // Handle wrapping around the circular array
    if (offset < -1) offset += total;
    if (offset > 1) offset -= total;

    if (offset === 0) {
      // Main Center Card
      return {
        x: "0%",
        scale: 1,
        zIndex: 10,
        opacity: 1,
        pointerEvents: "auto" as const,
      };
    } else if (offset === -1 || (activeIndex === 0 && index === total - 1)) {
      // Left Card (Behind)
      return {
        x: "-45%",
        scale: 0.85,
        zIndex: 5,
        opacity: 0.3,
        pointerEvents: "none" as const,
      };
    } else if (offset === 1 || (activeIndex === total - 1 && index === 0)) {
      // Right Card (Behind)
      return {
        x: "45%",
        scale: 0.85,
        zIndex: 5,
        opacity: 0.3,
        pointerEvents: "none" as const,
      };
    } else {
      // Hidden cards
      return {
        x: offset > 0 ? "80%" : "-80%",
        scale: 0.7,
        zIndex: 1,
        opacity: 0,
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-100/25 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
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

        {/* 3D Stack Cards Showcase */}
        <div className="relative flex flex-col items-center justify-center min-h-[640px] w-full px-4">
          <div className="relative w-full max-w-[840px] h-[680px] sm:h-[580px] lg:h-[550px] flex items-center justify-center">
            {featureDetails.map((feat, index) => {
              const style = getCardStyle(index);
              const isCenter = index === activeIndex;
              const CardIcon = feat.icon;

              return (
                <motion.div
                  key={feat.id}
                  style={{
                    position: "absolute",
                    width: "100%",
                    maxWidth: "760px",
                  }}
                  animate={style}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  className={`rounded-xl border-t-[6px] border-x border-b bg-white p-6 sm:p-10 shadow-[0_25px_55px_rgba(15,23,42,0.06)] flex flex-col justify-between h-[650px] sm:h-[555px] lg:h-[520px] transition-colors duration-300 ${feat.colorClass} ${
                    isCenter ? "border-slate-150" : "border-slate-200/60 cursor-pointer"
                  }`}
                  onClick={() => {
                    if (!isCenter) {
                      setActiveIndex(index);
                    }
                  }}
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3.5">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${feat.iconBg} shadow-sm`}>
                          <CardIcon className="h-5.5 w-5.5" />
                        </div>
                        <div>
                          <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest block">Feature {feat.num}</span>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B0F19] tracking-tight">{feat.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* How It Works */}
                    <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-100 space-y-1.5">
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
                  <div className="bg-indigo-50/60 border border-indigo-100/50 p-4.5 rounded-xl mt-4">
                    <div className="flex items-center gap-1.5 text-indigo-650 mb-1">
                      <Briefcase className="h-4 w-4" />
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-indigo-600">Business Benefit</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-indigo-955 leading-relaxed">{feat.benefit}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-8">
            <button 
              onClick={handlePrev}
              className="h-12 w-12 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center justify-center shadow-md"
              aria-label="Previous capability"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest min-w-[70px] text-center font-mono">
              {activeIndex + 1} / {featureDetails.length}
            </span>
            <button 
              onClick={handleNext}
              className="h-12 w-12 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center justify-center shadow-md"
              aria-label="Next capability"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ThirdSection;