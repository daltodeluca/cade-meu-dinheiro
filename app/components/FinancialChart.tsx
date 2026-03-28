"use client";
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { PieChart as PieIcon } from 'lucide-react';
import { Categoria } from '../types/finance';

const COLORS = ['#C5A059', '#A6894B', '#0F172A', '#334155', '#475569', '#1E293B'];

const parseValue = (val: any): number => {
  if (typeof val === 'number') return val;
  if (!val) return 0;
  const clean = String(val).replace(/[R$\s.]/g, '').replace(',', '.');
  return parseFloat(clean) || 0;
};

export function FinancialChart({ categorias = [] }: { categorias?: Categoria[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chartData = (categorias || [])
    .map(cat => ({
      name: cat.nome,
      value: Math.abs(parseValue(cat.valor_total))
    }))
    .filter(cat => cat.value > 0);

  const totalGeral = chartData.reduce((sum, item) => sum + item.value, 0);

  if (!mounted || chartData.length === 0) return (
    <div className="card-premium h-[450px] flex items-center justify-center border-dashed">
      <p className="text-slate-400 text-xs uppercase tracking-[0.3em] font-black italic">
        Aguardando análise...
      </p>
    </div>
  );

  return (
    <div className="card-premium h-[450px] flex flex-col">
      <h3 className="title-premium">
        <PieIcon size={14} className="text-gold" /> Distribuição de Despesas
      </h3>
      
      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              innerRadius={80}
              outerRadius={105}
              paddingAngle={8}
              dataKey="value"
              stroke="none"
              isAnimationActive={true}
            >
              {chartData.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                  className="hover:opacity-80 transition-opacity cursor-pointer outline-none"
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value: any, name: any) => {
                const porcentagem = ((Number(value) / totalGeral) * 100).toFixed(1);
                const valorFormatado = Number(value).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                });
                return [`${valorFormatado} (${porcentagem}%)`, name];
              }}
              contentStyle={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                fontSize: '12px',
                color: 'var(--foreground)',
                padding: '12px'
              }}
              itemStyle={{ color: 'var(--gold)', fontWeight: 'bold' }}
            />
            
            <Legend 
              verticalAlign="bottom" 
              align="center"
              iconType="circle"
              wrapperStyle={{ paddingTop: '20px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}