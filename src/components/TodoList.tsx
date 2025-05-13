import TodoItem from "./TodoItem.tsx";
import type {ITodo} from "../types";

interface TodoListProps {
    todos: ITodo[];
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    editTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;