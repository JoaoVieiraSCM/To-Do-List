import { ChevronRightIcon, Trash2, Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set('title', task.title);
        query.set('description', task.description);
        navigate(`/task?${query.toString()}`);
    }

    return (
    <div>
       <p className={`bg-slate-200 rounded-md shadow text-slate-500 p-6 text-center ${tasks.length === 0 ? 'visible' : 'hidden'}`}>You have no tasks</p>
       <ul className={`space-y-4 p-6 bg-slate-200 rounded-md shadow ${tasks.length === 0 ? 'hidden' : 'visible'}`}>
        {tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
                <button onClick={() => onTaskClick(task.id)} className={`w-full flex gap-1 text-left bg-slate-400 hover:bg-slate-500 text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}>
                    {
                        task.isCompleted && <Check />
                    }
                    {task.title}
                </button>
                <button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 hover:bg-slate-500 text-white p-2 rounded-md">
                    <ChevronRightIcon />
                </button>
                <button onClick={() => onDeleteTaskClick(task.id)} className="bg-slate-400 hover:bg-red-800 text-white p-2 rounded-md">
                    <Trash2 />
                </button>
            </li>
        ))}
    </ul> 
    </div>
    
    );
}

export default Tasks;