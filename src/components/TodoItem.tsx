import type {ITodo} from "../types";
import React from "react";

interface TodoItemProps {
    todo: ITodo;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({todo, deleteTodo, toggleTodo}) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>
        </div>
    );
};

export default React.memo(TodoItem);