"use client";
import { useState, useEffect } from 'react';
import { useFinancialAnalysis } from './hooks/useFinancialAnalysis';
import { Header } from './components/Header';
import { FileUploader } from './components/FileUploader';
import { CategoryList } from './components/CategoryList';
import { FinancialChart } from './components/FinancialChart';
import { InsightCard } from './components/InsightCard';
import { RefreshCcw, DollarSign } from 'lucide-react';
import { Footer } from './components/Footer';

export default function Home() {
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
    <main className="min-h-screen bg-background dark:bg-background py-12 px-4 transition-colors">
      <div className="max-w-3xl mx-auto">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {!analysis ? (
          <FileUploader onFileUpload={processarArquivo} loading={loading} />
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
            <button onClick={() => setAnalysis(null)} className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
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