import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function analisarTransacoes(transactions: any[]): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-3-flash" });
  
  const prompt = `
    Analise estas transações: ${JSON.stringify(transactions)}
    Retorne um JSON rigoroso:
    - Agrupe por categorias lógicas (Ex: Alimentação e Mantimentos, Transporte, etc).
    - Despesas devem ser negativas (ex: -50.00).
    - categorias: [{ nome, descricao_da_categoria, valor_total, itens: [{desc, valor}] }]
    - insight_gasto_alto: string resumida.
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
}