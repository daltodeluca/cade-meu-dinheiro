import { AlertCircle } from 'lucide-react';

export function InsightCard({ insight }: { insight: string }) {
  return (
    <div className="bg-slate-900 dark:bg-blue-600 p-8 rounded-3xl text-white shadow-xl flex items-start gap-6 animate-in slide-in-from-right-4 duration-700">
      <div className="p-3 bg-white/10 rounded-2xl shrink-0">
        <AlertCircle size={28} className="text-white" />
      </div>
      <div>
        <h3 className="text-blue-400 dark:text-blue-100 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Análise Inteligente</h3>
        <p className="text-lg font-medium leading-relaxed italic antialiased text-slate-100">
          "{insight}"
        </p>
      </div>
    </div>
  );
}