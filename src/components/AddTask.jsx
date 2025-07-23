import { useState } from 'react';

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="space-y-4 bg-slate-200 p-6 rounded-md shadow flex flex-col">
            <input 
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="resize-none h-16 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" placeholder="Write the description here..."
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button
                className="w-full bg-slate-500 hover:bg-slate-600 text-white p-2 rounded-md font-semibold"
                onClick={() => {
                    if (!title.trim() || !description.trim()) {
                        return alert('Please fill in both title and description.');
                    }
                    onAddTaskSubmit(title, description);
                    setTitle('');
                    setDescription('');
                }}
            >
                Add Task
            </button>
        </div>
    );
}

export default AddTask;