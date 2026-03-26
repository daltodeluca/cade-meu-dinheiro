export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="mt-16 pb-8 text-center">
      <div className="inline-block p-1">
        <span className="text-slate-400 dark:text-slate-600 text-[10px] font-black uppercase tracking-[0.5em] select-none">
          Dalto de Luca, InLuce Technologies © {year}
        </span>
      </div>
    </footer>
  );
}