import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';
import {v4} from 'uuid';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks]);

  // Quando o segundo parâmetro é vazio, o useEffect roda apenas uma vez, como componentDidMount
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {method: 'GET'});
      const data = await response.json();
      setTasks(data);
    }
    // Posso chamar da API quando precisar setar os dados iniciais (banco de dados ou resultado de API)
    // fetchTasks();
  },[]);

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask]);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Tasks Manager</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
      
    </div>
  );
}

export default App;