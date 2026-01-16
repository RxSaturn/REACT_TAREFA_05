/**
 * Componente TaskList - Responsável por renderizar a lista de tarefas
 * 
 * - Recebe o array de tarefas via props
 * - Recebe a função de callback para ver detalhes via props
 * - Renderiza cada tarefa usando o componente TaskItem
 * - Utiliza key única para cada item da lista
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
