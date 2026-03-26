import { useState } from 'react';
import Papa from 'papaparse';
import { AnaliseFinanceira } from '../types/finance';

export function useFinancialAnalysis() {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<AnaliseFinanceira | null>(null);

  const processarArquivo = (file: File) => {
    setLoading(true);
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        try {
          const res = await fetch('/api/analyze', {
            method: 'POST',
            body: JSON.stringify({ transactions: results.data }),
          });
          const data = await res.json();
          const cleanJson = data.analysis.replace(/```json|```/g, "").trim();
          setAnalysis(JSON.parse(cleanJson));
        } catch (err) {
          alert("Erro no processamento.");
        } finally {
          setLoading(false);
        }
      }
    });
  };

  return { analysis, loading, processarArquivo, setAnalysis };
}