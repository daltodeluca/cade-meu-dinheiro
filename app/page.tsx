// app/page.tsx
import Dashboard from "./components/Dashboard";
import { UserMenu } from "./components/UserMenu";

// Este arquivo NÃO tem "use client", logo é um Server Component
export default async function Page() {
  return (
    /* Aqui está a mágica: 
       Passamos um Server Component (UserMenu) como prop 
       para um Client Component (Dashboard). 
       O Next.js permite isso!
    */
    <Dashboard userMenu={<UserMenu />} />
  );
}