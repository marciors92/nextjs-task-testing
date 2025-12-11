'use client'; // Deve ser Client Component por conter estado (useState) e interação (form submit)

import React, { useState } from 'react';
import { Tarefa } from '@/lib/tarefas'; 

type NovaTarefaProps = {
  // Callback para notificar o componente pai sobre a nova tarefa
  onAdicionar: (novaTarefa: Omit<Tarefa, 'id'>) => void; 
};

export default function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [inputDescricao, setInputDescricao] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples do requisito: não permite tarefas vazias
    if (inputDescricao.trim() === '') {
      alert('A descrição da tarefa não pode ser vazia!');
      return;
    }

    // Cria o objeto da nova tarefa
    const novaTarefa: Omit<Tarefa, 'id'> = {
      descricao: inputDescricao.trim(),
      concluida: false,
    };

    // Chama o callback e limpa o input
    onAdicionar(novaTarefa);
    setInputDescricao('');
  };

  return (
    <form onSubmit={handleSubmit} data-testid="formulario-nova-tarefa" style={{ display: 'flex', gap: '10px' }}>
      <input
        type="text"
        placeholder="Descrição da nova tarefa..."
        value={inputDescricao}
        onChange={(e) => setInputDescricao(e.target.value)}
        data-testid="input-descricao"
        style={{ padding: '8px', border: '1px solid #ccc', flexGrow: 1 }}
      />
      <button type="submit" disabled={!inputDescricao.trim()} data-testid="btn-adicionar" style={{ padding: '8px 15px' }}>
        Adicionar Tarefa
      </button>
    </form>
  );
}