// components/Dashboard.tsx
"use client";
import { useState, useEffect, ReactNode } from 'react';
import { useFinancialAnalysis } from '../hooks/useFinancialAnalysis';
import { Header } from './Header';
import { FileUploader } from './FileUploader';
import { CategoryList } from './CategoryList';
import { FinancialChart } from './FinancialChart';
import { InsightCard } from './InsightCard';
import { RefreshCcw } from 'lucide-react';
import { Footer } from './Footer';

interface DashboardProps {
  userMenu: ReactNode; // Recebe o componente do servidor aqui
}

export default function Dashboard({ userMenu }: DashboardProps) {
  const { analysis, loading, processarArquivo, setAnalysis } = useFinancialAnalysis();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-background py-12 px-4 transition-colors">
      <div className="max-w-3xl mx-auto">
        {/* Passamos o userMenu para dentro do Header via prop ou children */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode}>
          {userMenu}
        </Header>

        {!analysis ? (
          <FileUploader onFileUpload={processarArquivo} loading={loading} />
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
            <button onClick={() => setAnalysis(null)} className="flex items-center gap-2 text-ghost text-xs font-bold uppercase tracking-widest hover:text-gold transition-colors">
              <RefreshCcw size={14} /> Novo Upload
            </button>

            <CategoryList categorias={analysis.categorias} />
            <InsightCard insight={analysis.insight_gasto_alto} />
            <FinancialChart categorias={analysis?.categorias} />
          </div>
        )}

        <Footer />
      </div>
    </main>
  );
}