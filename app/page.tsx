import { buscarTarefas, Tarefa } from '@/lib/tarefas'; 
import ListaDeTarefas from '@/components/ListaDeTarefas';
import NovaTarefa from '@/components/NovaTarefa';
// O hook é importado, mas o cálculo é simples para SC (length)
// Se o hook fosse usado com estado, o componente teria que ser Client.

// Função fictícia que seria uma Server Action na vida real para adicionar a tarefa.
// Colocada aqui para satisfazer o requisito da prop onAdicionar.
async function adicionarTarefaFicticia(novaTarefa: Omit<Tarefa, 'id'>) {
    'use server'; // Marcar como Server Action
    console.log('Server Action simulada: Tarefa adicionada:', novaTarefa);
    // Em produção: persistir no banco de dados e revalidar o cache.
}

export default async function PaginaPrincipal() {
  // 1. Carrega os dados (Server-Side)
  const tarefasIniciais = await buscarTarefas();
  
  // 2. Calcula o total (Simulando o resultado do hook)
  const totalTarefas = tarefasIniciais.length; 

  return (
    <main style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Next.js Todo Testes</h1>

      {/* Exibe a contagem de tarefas */}
      <p data-testid="contador-tarefas" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Total de Tarefas: {totalTarefas}
      </p>

      {/* 3. Formulário (Client Component) */}
      <NovaTarefa onAdicionar={adicionarTarefaFicticia} />
      
      <hr style={{ margin: '30px 0', borderTop: '1px solid #eee' }} />

      {/* 4. Lista (Client Component) */}
      <ListaDeTarefas tarefas={tarefasIniciais} />
    </main>
  );
}