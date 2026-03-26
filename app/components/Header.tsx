import { DollarSign, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-10">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-500/30">
          <DollarSign className="text-white w-5 h-5" />
        </div>
        <span className="font-black text-slate-900 dark:text-white italic text-xl tracking-tight">
          Cadê meu dinheiro?
        </span>
      </div>
      
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm text-slate-500 transition-all hover:scale-110 active:scale-95"
        title="Alternar tema"
      >
        {darkMode ? (
          <Sun className="text-yellow-500" size={20} />
        ) : (
          <Moon className="text-slate-400" size={20} />
        )}
      </button>
    </div>
  );
}