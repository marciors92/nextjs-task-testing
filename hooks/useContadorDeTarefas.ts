import { useMemo } from 'react';
import { Tarefa } from '@/lib/tarefas'; 

/**
 * Hook customizado para contar o número de tarefas.
 * @param tarefas Array de tarefas a serem contadas.
 * @returns O número total de tarefas.
 */
export function useContadorDeTarefas(tarefas: Tarefa[]): number {
  // Usa useMemo para garantir que o cálculo só seja refeito se a lista mudar
  const totalTarefas = useMemo(() => {
    return tarefas.length;
  }, [tarefas]);

  return totalTarefas;
}