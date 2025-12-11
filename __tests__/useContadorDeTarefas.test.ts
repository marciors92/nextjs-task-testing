import { renderHook } from '@testing-library/react'; 
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';
import { Tarefa } from '@/lib/tarefas';

describe('useContadorDeTarefas', () => {
  // ARRANGE: Dados
  const tarefasVazias: Tarefa[] = [];
  const tarefasComTrês: Tarefa[] = [
    { id: 'a', descricao: 'T1', concluida: false },
    { id: 'b', descricao: 'T2', concluida: true },
    { id: 'c', descricao: 'T3', concluida: false },
  ];

  test('deve retornar 0 quando a lista de tarefas é vazia', () => {
    // ACT: Renderiza o hook
    const { result } = renderHook(() => useContadorDeTarefas(tarefasVazias));

    // ASSERT: Verifica o valor
    expect(result.current).toBe(0);
  });

  test('deve retornar o número correto de tarefas', () => {
    // ACT: Renderiza o hook
    const { result } = renderHook(() => useContadorDeTarefas(tarefasComTrês));

    // ASSERT: Verifica o valor
    expect(result.current).toBe(3);
  });
});