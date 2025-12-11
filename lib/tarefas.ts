export type Tarefa = {
  id: string;
  descricao: string;
  concluida: boolean;
};

// Dados iniciais simulados
const DADOS_INICIAIS: Tarefa[] = [
  { id: '1', descricao: 'Configurar ambiente de testes', concluida: true },
  { id: '2', descricao: 'Implementar Server Component', concluida: false },
  { id: '3', descricao: 'Criar hook customizado', concluida: false },
];

/**
 * Simula a busca de tarefas de uma API (Server-side).
 * @returns Uma Promise que resolve com a lista de Tarefas.
 */
export async function buscarTarefas(): Promise<Tarefa[]> {
  // Simula um pequeno delay de rede
  await new Promise(resolve => setTimeout(resolve, 50));
  return DADOS_INICIAIS;
}