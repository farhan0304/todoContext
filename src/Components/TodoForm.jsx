import { useState } from "react";
import { useTodo } from "../Context/TodoContext";

function TodoForm() {
    const [msg,setMsg] = useState("");
    const {todos,addTodo} = useTodo()
    const addTask = (e) => {
        e.preventDefault();
        addTodo({todo:msg,complete:false})
        setMsg("")
    }
    return (
        <form  className="flex"
        onSubmit={(e) => addTask(e)}
        >
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={msg}
                onChange={(e)=>setMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

