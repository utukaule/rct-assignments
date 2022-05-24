import { useState } from "react"
import { TodoItem } from "./TodoItem";
export const Todo = () => {
    let [value, setValue] = useState("");
    const [todos, setTodos] = useState([]) //this the array where all the input todos will be stored.

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    //read input
    //update todo list
    //re-render todos list when updated.
    return <div>
        {/* use handleChange or use directly like go to onChange and type {(e)=>setValue(e.target.value)} */}
        <input value={value} onChange={handleChange} placeholder="Add Todo..." />
            {/* // The value above is knows as value mapping */}
        <button onClick={() => {
            setTodos([
                ...todos,
                {id:Date.now(), value: value, isCompleted: false }
            ])
            setValue("")
        }}
        >
            +
        </button>

        <div>
            {/* todo list is here */}
            {todos.map((todo) => (
               <TodoItem key={todo.id} todo={todo}/>
            ))}
        </div>
    </div>
}

//Flow of above program.
//onChange of input read value.
// store the value.
// on click of add button.
//read the stored value and add it to my todo list.