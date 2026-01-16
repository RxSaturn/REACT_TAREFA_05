/**
 * Componente TaskList - Responsável por renderizar a lista de tarefas
 * 
 * Responsabilidades:
 * - Receber array de tarefas via props
 * - Receber função de callback para ver detalhes via props
 * - Renderizar cada tarefa usando o componente TaskItem
 * - Utilizar key única para cada item da lista (boa prática do React)
 */

import TaskItem from './TaskItem';
import styles from './TaskList.module.css';

// Desestruturação de props para receber a lista de tarefas e a função de callback
function TaskList({ tarefas, onVerDetalhes }) {
  return (
    <div className={styles.taskListContainer}>
      <h2 className={styles.titulo}>📋 Lista de Tarefas</h2>
      
      {/* Renderiza uma mensagem caso não haja tarefas */}
      {tarefas.length === 0 ? (
        <p className={styles.mensagemVazia}>Nenhuma tarefa encontrada.</p>
      ) : (
        <ul className={styles.taskList}>
          {/* Itera sobre o array de tarefas e renderiza um TaskItem para cada uma */}
          {/* A prop 'key' é obrigatória e usa o ID único da tarefa */}
          {tarefas.map((tarefa) => (
            <TaskItem 
              key={tarefa.id} 
              tarefa={tarefa} 
              onVerDetalhes={onVerDetalhes} 
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
