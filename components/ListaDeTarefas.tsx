'use client';
import React from 'react';
import { Tarefa } from '@/lib/tarefas'; 

type ListaDeTarefasProps = {
  tarefas: Tarefa[];
};

export default function ListaDeTarefas({ tarefas }: ListaDeTarefasProps) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Lista de Tarefas</h2>
      <ul data-testid="lista-de-tarefas">
        {tarefas.map(tarefa => (
          <li
            key={tarefa.id}
            style={{ 
              textDecoration: tarefa.concluida ? 'line-through' : 'none',
              listStyleType: 'none',
              padding: '5px 0'
            }}
          >
            [{tarefa.concluida ? 'X' : ' '}] {tarefa.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}