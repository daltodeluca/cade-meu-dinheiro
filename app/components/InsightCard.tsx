import { Sparkles, Quote } from 'lucide-react';

export function InsightCard({ insight }: { insight: string }) {
  if (!insight) return null;

  return (
    <div className="card-premium border-l-4 border-l-gold overflow-hidden animate-in slide-in-from-right-4 duration-700 bg-card shadow-xl">
      <Quote size={40} className="absolute top-2 right-2 text-gold opacity-[0.08] -rotate-12" />

      <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
        <div className="p-3 bg-background rounded-2xl shrink-0 border border-border shadow-inner">
          <Sparkles size={24} className="text-gold" />
        </div>

        <div className="flex-1">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold mb-3">
            Recomendação Estratégica
          </h3>
          
          <p className="text-lg md:text-xl font-medium leading-relaxed italic text-main antialiased tracking-tight">
            "{insight}"
          </p>
          
          <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center">
            <span className="text-ghost text-[9px] font-black uppercase tracking-[0.3em]">
              AI System v3.0
            </span>
            <span className="text-[10px] font-bold text-gold italic">
              InLuce Financial Intelligence
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}