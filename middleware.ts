// middleware.ts
import { auth } from "@/auth"

export default auth((req) => {
  // Aqui você não faz nada. O middleware apenas garante que a sessão 
  // seja lida, mas não bloqueia o acesso.
})

export const config = {
  // Mantemos o matcher apenas para rotas que NÃO são estáticas/api
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}