import styles from "./Todo.module.css";
 
export const TodoItem = ( {todo}) => {
    return <div>
         <div className={styles.todo} key={todo.id}>
                    <input type="checkbox"/>
                    <div>{todo.value}</div>
                </div>
    </div>
}