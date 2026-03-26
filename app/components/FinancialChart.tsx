import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { PieChart as PieIcon } from 'lucide-react';
import { Categoria } from '../types/finance';

const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#14b8a6'];

export function FinancialChart({ categorias = [] }: { categorias?: Categoria[] }) {
  const chartData = (categorias || [])
    .filter(cat => cat && cat.valor_total < 0)
    .map(cat => ({ name: cat.nome, value: Math.abs(cat.valor_total) }));

  if (chartData.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
      <h3 className="text-xs font-black text-slate-400 uppercase mb-6 flex items-center gap-2 tracking-widest">
        <PieIcon size={14}/> Distribuição de Despesas
      </h3>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie 
              data={chartData} 
              innerRadius={70} 
              outerRadius={95} 
              paddingAngle={5} 
              dataKey="value"
              stroke="none"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle"/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}