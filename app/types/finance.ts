export interface GastoItem {
  desc: string;
  valor: number;
}

export interface Categoria {
  nome: string;
  descricao_da_categoria: string;
  valor_total: number;
  itens: GastoItem[];
}

export interface AnaliseFinanceira {
  categorias: Categoria[];
  insight_gasto_alto: string;
}