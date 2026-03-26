💸 cademeudinheiro
Um jeito menos doloroso de descobrir para onde seu dinheiro está indo. Em vez de você gastar horas categorizando extratos bancários, a IA (Gemini 3 Flash) faz o trabalho sujo de entender o que é "Açougue do Zé" e jogar na categoria certa.

## 🚀 O que faz?
Parsing de CSV: Lê seu extrato via PapaParse.

Categorização Inteligente: Usa IA para agrupar gastos de forma granular (nada de "Outros" ou "Pix Enviado").

Visualização: Gráficos que mostram a realidade (via Recharts).

Dark Mode: Essencial para quando você for olhar os gastos à noite e não quiser ficar cego com o brilho da tela.

## 🛠️ Tech Stack
Framework: Next.js 16 + Turbopack (Velocidade de 2026).

Estilo: Tailwind CSS v4 (A arquitetura nova).

Cérebro: Gemini 3 Flash API.

Ícones: Lucide React.

Arquitetura: Componentes modulares, Custom Hooks e Tipagem Sênior.

## ⚙️ Como rodar o projeto
Clone o repositório:

Bash
git clone https://github.com/daltodeluca/cademeudinheiro.git
Instale as dependências:

Bash
npm install
Configure as variáveis de ambiente:
Crie um arquivo .env.local na raiz e adicione sua chave do Google:

Snippet de código
GEMINI_API_KEY=sua_chave_aqui
Inicie o motor:

Bash
npm run dev
## 🏗️ Arquitetura
O projeto foi refatorado para seguir padrões de mercado, separando as responsabilidades:

/components: UI atômica e reutilizável.

/hooks: Toda a lógica de estado e parsing.

/services: Comunicação isolada com a API do Gemini.

/types: Contratos de dados para garantir que nada quebre.

## 📝 Licença
Feito por Vinícius de Luca na InLuce Technologies.