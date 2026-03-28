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
    <section className="card-premium text-center animate-in zoom-in-95 duration-500">
      <h2 className="text-2xl font-black text-main mb-2 tracking-tight">
        Bem-vindo!
      </h2>
      
      <p className="text-soft mb-8 text-sm font-medium">
        Suba seu extrato CSV e deixe a IA organizar tudo.
      </p>
      
      <div className="relative border-2 border-dashed border-border rounded-3xl p-12 hover:bg-gold/5 transition-all cursor-pointer group overflow-hidden">
        <input 
          type="file" 
          accept=".csv" 
          onChange={handleFileChange} 
          className="absolute inset-0 opacity-0 cursor-pointer z-20 disabled:cursor-not-allowed" 
          disabled={loading}
        />

        <div className="relative z-10">
          <Upload className={`w-14 h-14 mx-auto mb-5 icon-premium ${
            loading ? 'text-gold animate-bounce' : ''
          }`} />
          
          <p className="text-main font-bold tracking-tight">
            {loading ? "A IA está processando..." : "Clique ou arraste seu CSV aqui"}
          </p>
          
          <p className="text-ghost text-[10px] uppercase tracking-[0.2em] mt-4 font-bold">
            Formato aceito: .CSV (Bancos do Brasil)
          </p>
        </div>
      </div>
    </section>
  );
}