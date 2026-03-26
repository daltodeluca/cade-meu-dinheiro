import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { transactions } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key faltando" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const prompt = `
  Analise rigorosamente estes dados de transações: ${JSON.stringify(transactions)}
  
  Sua tarefa é classificar cada gasto em categorias específicas.
  
  REGRAS DE OURO PARA CATEGORIZAÇÃO:
  1. Agrupe por método de pagamento (Ex: "Compras no Cartão" ou "Pix Enviado"). 
  2. CATEGORIAS PRINCIPAIS: Agrupe itens correlatos. 
     - Ex: Açougue, Padaria, Hortifruti e Supermercado devem ir para "Alimentação e Mantimentos".
     - Ex: Uber, 99, Posto de Gasolina devem ir para "Transporte e Mobilidade".
     - Ex: Farmácia, Plano de Saúde e Consultas para "Saúde".
  2. FORMATO DE VALOR: Mantenha os valores como números (float). As saídas DEVEM ser negativas (ex: -150.50).
  3. DESCRIÇÃO: Na descrição da categoria, cite brevemente o que foi agrupado (ex: "Compras de mercado, açougue e itens de padaria").
  5. Se houver entradas de dinheiro, chame de "Receitas" ou "Rendas".

  ESTRUTURA DO JSON (OBRIGATÓRIA):
  {
    "categorias": [
      {
        "nome": "Nome Específico da Categoria",
        "descricao_da_categoria": "Breve explicação do que este grupo representa",
        "valor_total": 0.00,
        "itens": [
          { "desc": "Descrição original", "valor": 0.00 }
        ]
      }
    ],
    "insight_gasto_alto": "Texto analítico sobre o maior gasto encontrado."
  }
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    const cleanJson = text.replace(/```json|```/g, "").trim();

    return NextResponse.json({ analysis: cleanJson });

  } catch (error: any) {
    console.error("ERRO NA API:", error);
    return NextResponse.json({ 
      error: "Erro ao processar dados", 
      details: error.message 
    }, { status: 500 });
  }
}