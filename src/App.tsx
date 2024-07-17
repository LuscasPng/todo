import { ChangeEvent, FormEvent, useState } from "react";

import { MdRadioButtonUnchecked } from "react-icons/md";
import { PiClipboardTextThin } from "react-icons/pi";
import { LuPlusCircle } from "react-icons/lu";
import { Trash } from "lucide-react";

import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";


export function App() {
  const [todoTask, setTodoTask] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("")

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    setTodoTask([...todoTask, newTask])
  }
  
  function handleNewComment(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>  
        <form onSubmit={handleCreateTask} className={styles.createTask}>
          <input 
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewComment}
          />
          <button type="submit">
            Criar
            <LuPlusCircle size={16} />
          </button>
        </form>
        <div className={styles.todoList}>
          <header>
            <div className={styles.createdTasks}>
              <h4>Tarefas criadas</h4>
              <span>{todoTask.length}</span>
            </div>
            <div className={styles.doneTask}>
              <h4>Concluídas</h4>
              <span>0</span>
            </div>
          </header>
          {todoTask.length === 0 ? (
            <div className={styles.empytContent}>
              <div className={styles.divisor}/>
              <div className={styles.empytList}>
                <PiClipboardTextThin size={84} />
                <p><span>Você ainda não tem tarefas cadastradas</span><br />
                Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          ) : (
            <ul className={styles.list}>
              {todoTask.map(task => (
                <li key={task}>
                  <div>
                    <button title="Marcar como concluido">
                      {/* <IoIosCheckmarkCircle  size={20} /> */}
                      <MdRadioButtonUnchecked size={20} />
                    </button>
                    {task}
                  </div>
                  <button title="Excluir tarefa">
                    <Trash size={20} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* 
        Falta adicionar a funcionalidade de marcar a tarefa como concluida; funcionalidade de remover tarefa; contador de tarefas concluidas;
        Melhorias: Limpar input de adicionar tarefa após clicar em Criar 
      */}
    </div>
  )
}
