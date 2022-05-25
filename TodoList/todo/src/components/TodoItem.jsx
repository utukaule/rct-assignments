import { useState } from "react";
import styles from "./Todo.module.css";

export const TodoItem = ({ todo, onDelete }) => {
    const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
    return <div>
        <div className={styles.todo} key={todo.id}>
            
            <div className={styles.check}>
            <input  type="checkbox" checked={isCompleted} onChange={(e) => { setIsCompleted(e.target.checked) }} />
            </div>
            
            <div className={styles.task}>
            <div className={isCompleted ? styles.striked:""}>{todo.value}</div>
            </div>
            
            <div className={styles.delete}>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
            </div>
        
        </div>
    </div>
}