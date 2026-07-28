import React from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Database,
  Terminal,
  FileCheck,
  TrendingUp,
  CalendarCheck
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const AiAccountingHowItWorks = () => {
  const navigate = useNavigate();
  const steps = [
    {
      step: "1",
      title: "Add Business Information",
      desc: "Enter sales, purchases, expenses, inventory and other relevant financial records into the platform.",
      icon: Database,
      color: "border-blue-200 text-blue-600 bg-blue-50/50"
    },
    {
      step: "2",
      title: "Give the AI a Command",
      desc: "Type or speak the accounting activity or information you need.",
      icon: Terminal,
      color: "border-purple-200 text-purple-600 bg-purple-50/50"
    },
    {
      step: "3",
      title: "Review the Result",
      desc: "Check the generated invoice, GST calculation, financial report, inventory update or cash flow prediction.",
      icon: FileCheck,
      color: "border-emerald-200 text-emerald-600 bg-emerald-50/50"
    },
    {
      step: "4",
      title: "Take Informed Action",
      desc: "Use the available financial and operational information to manage expenses, stock, cash flow and everyday business decisions.",
      icon: TrendingUp,
      color: "border-indigo-200 text-indigo-600 bg-indigo-50/50"
    }
  ];

  return (
    <section className="py-6 md:py-8 border-t border-slate-100 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            How AIBASS Works
          </h2>
          <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
            AIBASS simplifies the journey from entering business information to reviewing the financial result.
          </p>
          <div className="w-12 h-1 bg-indigo-600 rounded-full mx-auto" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-slate-150 rounded-[32px] p-6 relative flex flex-col items-center text-center space-y-4 hover:shadow-[0_12px_35px_rgba(0,0,0,0.02)] transition-all"
              >
                {/* Step badge */}
                <span className="absolute -top-3.5 left-6 bg-slate-950 text-white font-black text-xs px-2.5 py-0.5 rounded-full shadow-md">
                  Step {item.step}
                </span>

                <div className={`w-14 h-14 rounded-2xl border ${item.color} flex items-center justify-center shadow-inner`}>
                  <Icon className="h-6 w-6" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">{item.title}</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Button
            onClick={() => navigate("/auth?tab=signup")}
            className="bg-slate-950 hover:bg-slate-800 text-white font-semibold h-12 px-8 rounded-full inline-flex items-center gap-2 group transition-all"
          >
            Book a Product Walkthrough
            <CalendarCheck className="h-4 w-4" />
          </Button>
        </div>

      </div>
    </section>
  );
};
