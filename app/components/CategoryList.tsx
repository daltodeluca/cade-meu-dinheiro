import { ChevronDown, TrendingDown } from 'lucide-react';
import { Categoria } from '../types/finance';
import { useState } from 'react';

const parseValue = (val: any): number => {
  if (typeof val === 'number') return val;
  if (!val) return 0;
  const clean = String(val).replace(/[R$\s.]/g, '').replace(',', '.');
  return parseFloat(clean) || 0;
};

export function CategoryList({ categorias }: { categorias: Categoria[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="card-premium p-0 overflow-hidden">
      
      <div className="px-8 py-6 border-b border-border flex justify-between items-center bg-card/50">
        <h2 className="title-premium mb-0">
          <TrendingDown size={14} className="text-gold" /> Resumo por Categoria
        </h2>
        <span className="text-ghost text-[10px] font-black uppercase tracking-[0.2em]">
          Valor Consolidado
        </span>
      </div>

      <div className="divide-y divide-border">
        {categorias.map((cat) => {
          const valorLimpoTotal = parseValue(cat.valor_total);

          return (
            <div key={cat.nome}>
              <button 
                onClick={() => setOpen(open === cat.nome ? null : cat.nome)}
                className="w-full px-8 py-7 flex items-center justify-between hover:bg-background/50 transition-all group"
              >
                <div className="text-left">
                  <p className="font-bold text-main transition-colors group-hover:text-gold">
                    {cat.nome}
                  </p>
                  <p className="text-xs text-soft font-light">
                    {cat.descricao_da_categoria}
                  </p>
                </div>
                
                <div className="flex items-center gap-5">
                  <span className={`value-premium text-lg ${
                    valorLimpoTotal < 0 ? 'text-red-500' : 'text-gold'
                  }`}>
                    {valorLimpoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                  <ChevronDown className={`text-ghost transition-transform duration-300 ${
                    open === cat.nome ? 'rotate-180 text-gold' : ''
                  }`} />
                </div>
              </button>
              
              {open === cat.nome && (
                <div className="bg-background/30 px-12 py-6 border-t border-border animate-in slide-in-from-top-2 duration-300">
                  <ul className="space-y-4">
                    {cat.itens.map((item, i) => {
                      const valorItemLimpo = parseValue(item.valor);
                      return (
                        <li key={i} className="flex justify-between text-sm border-b border-border/50 pb-3 last:border-0 last:pb-0">
                          <span className="text-soft font-light italic">
                            {item.desc}
                          </span>
                          <span className={`font-bold tracking-tight ${
                            valorItemLimpo < 0 ? 'text-red-400' : 'text-main'
                          }`}>
                            {valorItemLimpo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}