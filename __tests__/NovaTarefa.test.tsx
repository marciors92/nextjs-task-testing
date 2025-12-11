import { render, screen, fireEvent } from '@testing-library/react';
import NovaTarefa from '@/components/NovaTarefa';
import { act } from 'react'; // Para garantir que o estado seja atualizado

// Mock da função onAdicionar
const mockOnAdicionar = jest.fn();

describe('NovaTarefa Component', () => {
  
  beforeEach(() => {
    mockOnAdicionar.mockClear();
    // Suprime o alerta padrão para não poluir o terminal de teste
    jest.spyOn(window, 'alert').mockImplementation(() => {}); 
  });
  
  test('deve renderizar o input e o botão desabilitado inicialmente', () => {
    // ARRANGE: Renderiza
    render(<NovaTarefa onAdicionar={mockOnAdicionar} />);
    
    const input = screen.getByTestId('input-descricao');
    const button = screen.getByTestId('btn-adicionar');

    // ASSERT: Verifica o estado inicial
    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled(); 
  });

  test('deve habilitar o botão quando o input for preenchido com texto', () => {
    // ARRANGE: Renderiza
    render(<NovaTarefa onAdicionar={mockOnAdicionar} />);
    const input = screen.getByTestId('input-descricao');
    const button = screen.getByTestId('btn-adicionar');

    // ACT: Digita algo
    fireEvent.change(input, { target: { value: 'Nova tarefa de teste' } });

    // ASSERT: Verifica se o botão está habilitado
    expect(button).not.toBeDisabled();
  });

  test('deve chamar onAdicionar com os dados corretos e limpar o input na submissão', async () => {
    // ARRANGE: Renderiza
    render(<NovaTarefa onAdicionar={mockOnAdicionar} />);
    const input = screen.getByTestId('input-descricao');
    const button = screen.getByTestId('btn-adicionar');
    const descricao = 'Tarefa a ser adicionada';

    // ACT: Preenche
    fireEvent.change(input, { target: { value: descricao } });
    
    // ACT: Submete
    await act(async () => {
      fireEvent.click(button);
    });

    // ASSERT: Verificação da submissão
    expect(mockOnAdicionar).toHaveBeenCalledTimes(1);
    
    // Verifica se a função foi chamada com o objeto correto (sem ID)
    expect(mockOnAdicionar).toHaveBeenCalledWith({
      descricao: descricao,
      concluida: false,
    });
    
    // Verifica se o input foi limpo
    expect(input).toHaveValue('');
  });
});