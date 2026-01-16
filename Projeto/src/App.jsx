/**
 * App.jsx - Componente principal do Dashboard de Gestão de Atividades
 * 
 * - Importa os dados mock de tarefas
 * - Define a função Arrow que recebe os detalhes da tarefa
 * - Passa a função via props para o componente TaskList
 * - Renderiza o dashboard
 */

import TaskList from './components/TaskList';
import tarefas from './data/tarefas';
import './App.css';

function App() {
  /**
   * Arrow Function que recebe o objeto da tarefa e exibe os detalhes
   * é passada via props para o componente filho (TaskItem)
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
        <p>Organize e veja as suas tarefas de forma eficiente</p>
      </header>

      <main className="app-main">
        {/* 
          Passa a lista de tarefas e a função de callback via props
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
