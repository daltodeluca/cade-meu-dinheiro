import { ChevronDown, TrendingDown } from 'lucide-react';
import { Categoria } from '../types/finance';
import { useState } from 'react';

export function CategoryList({ categorias }: { categorias: Categoria[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
      <div className="px-8 py-6 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
        <h2 className="text-xl font-bold dark:text-white">Resumo por Categoria</h2>
        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Valor</span>
      </div>
      <div className="divide-y divide-slate-50 dark:divide-slate-800">
        {categorias.map((cat) => (
          <div key={cat.nome}>
            <button 
              onClick={() => setOpen(open === cat.nome ? null : cat.nome)}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all"
            >
              <div className="text-left">
                <p className="font-bold text-slate-800 dark:text-slate-100">{cat.nome}</p>
                <p className="text-xs text-slate-400">{cat.descricao_da_categoria}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`font-black text-lg ${cat.valor_total < 0 ? 'text-red-500 dark:text-red-400' : 'text-emerald-500'}`}>
                  {cat.valor_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
                <ChevronDown className={`text-slate-300 transition-transform ${open === cat.nome ? 'rotate-180 text-blue-500' : ''}`} />
              </div>
            </button>
            {open === cat.nome && (
              <div className="bg-slate-50 dark:bg-slate-800/30 px-12 py-6 border-t border-slate-100 dark:border-slate-800">
                <ul className="space-y-3">
                  {cat.itens.map((item, i) => (
                    <li key={i} className="flex justify-between text-sm border-b border-slate-200/40 dark:border-slate-700/40 pb-2 last:border-0">
                      <span className="text-slate-600 dark:text-slate-400">{item.desc}</span>
                      <span className={`font-bold ${item.valor < 0 ? 'text-red-500' : 'dark:text-slate-200'}`}>
                        {item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}