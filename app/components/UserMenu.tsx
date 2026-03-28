// components/UserMenu.tsx
import { auth, signIn, signOut } from "@/auth";
import { LogOut, User } from "lucide-react"; // Importamos o ícone User para fallback

export async function UserMenu() {
  const session = await auth();

  if (!session?.user) {
    return (
      <form action={async () => { "use server"; await signIn("google"); }}>
        <button 
          type="submit"
          className="px-4 py-2 bg-gold hover:bg-gold/90 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-sm"
        >
          Entrar
        </button>
      </form>
    );
  }

  return (
    <div className="flex items-center gap-3 group relative">
      <div className="text-right hidden sm:block">
        <p className="text-[10px] font-black text-main leading-none uppercase tracking-tighter">
          {session.user.name?.split(' ')[0]}
        </p>
      </div>
      
      {/* Container do Avatar */}
      <div className="w-8 h-8 rounded-lg border border-gold/30 group-hover:border-gold transition-all cursor-pointer shadow-sm overflow-hidden bg-card flex items-center justify-center">
        {session.user.image ? (
          <img 
            src={session.user.image} 
            alt="User" 
            className="w-full h-full object-cover"
          />
        ) : (
          /* Fallback caso a imagem seja nula ou vazia */
          <User size={16} className="text-gold/50" />
        )}
      </div>

      {/* Dropdown de Logout */}
      <div className="absolute right-0 top-full mt-2 w-40 bg-card border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        <form action={async () => { "use server"; await signOut(); }}>
          <button type="submit" className="w-full p-3 flex items-center gap-2 text-red-500 hover:bg-red-500/5 transition-colors text-[10px] font-black uppercase tracking-widest">
            <LogOut size={14} /> Sair
          </button>
        </form>
      </div>
    </div>
  );
}