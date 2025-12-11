import { render, screen } from '@testing-library/react';
import PaginaPrincipal from '@/app/page';
import { buscarTarefas, Tarefa } from '@/lib/tarefas'; 

// MOCK 1: Mock do módulo de dados para controlar o retorno da API
jest.mock('@/lib/tarefas', () => ({
  // Certifique-se de que a função mockada é exportada
  buscarTarefas: jest.fn(), 
}));

// MOCK 2: Mocka o Client Component ListaDeTarefas
// Isso impede que o teste do Server Component quebre ao tentar renderizar a lista
jest.mock('@/components/ListaDeTarefas', () => ({
  __esModule: true,
  default: ({ tarefas }) => (
    <div data-testid="mock-lista-de-tarefas">
      Lista Renderizada com {tarefas.length} tarefas
    </div>
  ),
}));

describe('PaginaPrincipal (Server Component)', () => {
  
  const tarefasMockadas: Tarefa[] = [
    { id: '10', descricao: 'Tarefa de Mock 1', concluida: false },
    { id: '11', descricao: 'Tarefa de Mock 2', concluida: true },
  ];

  beforeEach(() => {
    // ARRANGE: Configura o mock da API para retornar os dados de teste
    // Isso só funciona porque buscarTarefas está importada acima
    (buscarTarefas as jest.Mock).mockResolvedValue(tarefasMockadas);
  });
  
  afterAll(() => {
    (buscarTarefas as jest.Mock).mockRestore();
  });

  // O teste foi modificado para verificar o mock do componente
  test('deve carregar os dados e passar as props corretas para a lista', async () => {
    // ACT: Renderiza o Server Component
    const page = await PaginaPrincipal();
    render(page);

    // 1. ASSERT: Verifica o título
    expect(screen.getByRole('heading', { name: /next\.js todo testes/i })).toBeInTheDocument();
    
    // 2. ASSERT: Verifica o contador (Total de Tarefas: 2)
    expect(screen.getByTestId('contador-tarefas')).toHaveTextContent(`Total de Tarefas: ${tarefasMockadas.length}`);
    
    // 3. ASSERT: Verifica se o mock da ListaDeTarefas recebeu as 2 tarefas
    const listaMockada = screen.getByTestId('mock-lista-de-tarefas');
    expect(listaMockada).toHaveTextContent('Lista Renderizada com 2 tarefas');
    
    // 4. ASSERT: Verifica se o formulário do Client Component está presente
    expect(screen.getByTestId('formulario-nova-tarefa')).toBeInTheDocument();
  });
});