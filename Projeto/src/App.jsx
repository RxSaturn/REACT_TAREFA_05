/**
 * App.jsx - Componente principal do Dashboard de Gestão de Atividades
 * 
 * Responsabilidades:
 * - Importar os dados mock de tarefas
 * - Definir a função Arrow que recebe os detalhes da tarefa
 * - Passar a função via props para o componente TaskList
 * - Renderizar o dashboard
 */

import TaskList from './components/TaskList';
import tarefas from './data/tarefas';
import './App.css';

function App() {
  /**
   * Arrow Function que recebe o objeto da tarefa e exibe os detalhes
   * Esta função é passada via props para o componente filho (TaskItem)
   * e é acionada quando o usuário clica no botão "Ver Detalhes"
   */
  const handleVerDetalhes = (tarefa) => {
    // Monta uma mensagem com os detalhes da tarefa
    const mensagem = `
📋 DETALHES DA TAREFA

🆔 ID: ${tarefa.id}
📝 Título: ${tarefa.titulo}
📁 Categoria: ${tarefa.categoria}
📊 Prioridade: ${tarefa.prioridade}
📌 Status: ${tarefa.status === "concluído" ? "✅ Concluído" : "⏳ Pendente"}
    `.trim();

    // Exibe os detalhes no console
    console.log(mensagem);

    // Exibe os detalhes em um alert para o usuário
    alert(mensagem);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📊 Dashboard de Gestão de Atividades</h1>
        <p>Organize suas tarefas de forma eficiente</p>
      </header>

      <main className="app-main">
        {/* 
          Passa a lista de tarefas e a função de callback via props
          A função handleVerDetalhes é uma Arrow Function passada como prop
        */}
        <TaskList 
          tarefas={tarefas} 
          onVerDetalhes={handleVerDetalhes} 
        />
      </main>
    </div>
  );
}

export default App;
