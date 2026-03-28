import { DollarSign, Sun, Moon } from 'lucide-react';
import { ReactNode } from 'react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  children?: ReactNode; // Slot para o UserMenu
}

export function Header({ darkMode, setDarkMode, children }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-10 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gold rounded-xl shadow-lg shadow-gold/20">
          <DollarSign className="text-white dark:text-background w-5 h-5" strokeWidth={3} />
        </div>
        <div>
          <span className="font-black text-main italic text-xl tracking-tighter">
            Cadê meu <span className="text-gold">dinheiro?</span>
          </span>
          <p className="text-[9px] uppercase tracking-[0.3em] text-ghost font-bold -mt-1">
            Financial Intelligence
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Renderiza o menu aqui se ele for passado */}
        {children}

        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2.5 bg-card border border-border rounded-2xl shadow-sm text-gold transition-all hover:scale-110 active:scale-95 group"
        >
          {darkMode ? (
            <Sun className="group-hover:rotate-90 transition-transform duration-500" size={20} />
          ) : (
            <Moon className="text-ghost group-hover:-rotate-12 transition-transform duration-500" size={20} />
          )}
        </button>
      </div>
    </div>
  );
}