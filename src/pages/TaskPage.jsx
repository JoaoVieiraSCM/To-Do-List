import { useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    function onBackClick() {
        navigate(-1);
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative mb-6">
                    <button
                        className="absolute left-0 top-0 bottom-0 text-slate-100"
                        onClick={onBackClick}
                    >
                        <ChevronLeftIcon/>
                    </button>
                    <h1 className="text-3xl text-slate-100 font-bold text-center">Task Details</h1>
                </div>
                

                <div className="bg-slate-100 rounded-md shadow p-4">
                    <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
                    <p className="text-slate-600 text-md">{description}</p>
                </div>
            </div>
        </div>
    );
}
export default TaskPage;