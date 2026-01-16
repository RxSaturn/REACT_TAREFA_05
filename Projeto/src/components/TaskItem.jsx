/**
 * Componente TaskItem - Representa cada item individual da lista de tarefas
 * 
 * - Exibe informações da tarefa (título, categoria, prioridade, status)
 * - Aplica a estilização condicional para prioridade "Alta" (CSS Modules)
 * - Exibe a etiqueta "Urgente" apenas se prioridade for "Alta" E status for diferente de "concluído"
 * - Botão "Ver Detalhes" que aciona função recebida via props
 */

import styles from './TaskItem.module.css';

// Uso de props para receber os dados da tarefa e a função de callback
function TaskItem({ tarefa, onVerDetalhes }) {
  // Desestruturação dos dados da tarefa para facilitar o acesso
  const { titulo, categoria, prioridade, status } = tarefa;

  // Mapeamento de prioridade para classe CSS
  const classesPrioridade = {
    "Alta": styles.prioridadeAlta,
    "Média": styles.prioridadeMedia,
    "Baixa": styles.prioridadeBaixa
  };

  // Verifica se a tarefa é de alta prioridade para aplicar estilo de alerta
  const ehPrioridadeAlta = prioridade === "Alta";

  // Verifica se deve exibir a etiqueta "Urgente"
  // SE prioridade "Alta" E status diferente de "concluído"
  const exibirUrgente = ehPrioridadeAlta && status !== "concluído";

  // Determina a classe CSS baseada na prioridade
  // SE for alta prioridade, aplica classe de alerta, caso contrário usa classe normal
  const classeItem = ehPrioridadeAlta 
    ? `${styles.taskItem} ${styles.prioridadeAlta}` 
    : styles.taskItem;

  // Função que é chamada quando o botão "Ver Detalhes" é clicado
  const handleVerDetalhes = () => {
    onVerDetalhes(tarefa);
  };

  return (
    <li className={classeItem}>
      <div className={styles.taskHeader}>
        <h3 className={styles.taskTitulo}>{titulo}</h3>
        {/* Exibe a etiqueta "Urgente" apenas se as condições forem atendidas */}
        {exibirUrgente && (
          <span className={styles.etiquetaUrgente}>⚠️ Urgente</span>
        )}
      </div>
      
      <div className={styles.taskInfo}>
        <span className={styles.categoria}>📁 {categoria}</span>
        <span className={`${styles.prioridade} ${classesPrioridade[prioridade] || ''}`}>
          📊 {prioridade}
        </span>
        <span className={`${styles.status} ${status === "concluído" ? styles.statusConcluido : styles.statusPendente}`}>
          {status === "concluído" ? "✅ Concluído" : "⏳ Pendente"}
        </span>
      </div>

      {/* Botão que aciona a função recebida via props */}
      <button 
        className={styles.btnDetalhes} 
        onClick={handleVerDetalhes}
      >
        Ver Detalhes
      </button>
    </li>
  );
}

export default TaskItem;
