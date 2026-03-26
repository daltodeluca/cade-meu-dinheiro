import { Upload } from 'lucide-react';

interface Props {
  onFileUpload: (file: File) => void;
  loading: boolean;
}

export function FileUploader({ onFileUpload, loading }: Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileUpload(file);
  };

  return (
    <section className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 text-center animate-in zoom-in-95 duration-500">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Bem-vindo!</h2>
      <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">Suba seu extrato CSV e deixe a IA organizar tudo.</p>
      
      <div className="relative border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-12 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all cursor-pointer group">
        <input 
          type="file" 
          accept=".csv" 
          onChange={handleFileChange} 
          className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed" 
          disabled={loading}
        />
        <Upload className={`w-12 h-12 mx-auto mb-4 transition-transform ${loading ? 'text-blue-500 animate-bounce' : 'text-slate-300 group-hover:text-blue-500 group-hover:scale-110'}`} />
        <p className="text-slate-600 dark:text-slate-300 font-bold">
          {loading ? "A IA está processando..." : "Clique ou arraste seu CSV aqui"}
        </p>
      </div>
    </section>
  );
}