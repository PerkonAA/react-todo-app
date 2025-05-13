import React, {Suspense, useEffect, useReducer, useState} from 'react'
import './App.css'
import AddTodo from "./components/AddTodo.tsx";
import {todoReducer} from "./reducers/todoReducer.tsx";
import type {TFilter, ITodo} from "./types";
import {FILTERS} from "./consts";
import TodoFilter from "./components/TodoFilter.tsx";

const TodoList = React.lazy(() => import("./components/TodoList.tsx"));

const initializer = (): ITodo[] => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
}

const App: React.FC = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], initializer);
    const [filter, setFilter] = useState<TFilter>(FILTERS.ALL);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const addTodo = (text: string) => {
        if (text.trim() === '') {
            alert('Task cannot be empty');
            return;
        }

        dispatch({
            type: 'ADD_TODO',
            payload: {
                id: Date.now(),
                text,
                completed : false,
            }
        });
    }

    const deleteTodo = (id: number) => {
        dispatch({ type: 'REMOVE_TODO', payload: id });
    }

    const toggleTodo = (id: number) => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    }

    const filteredTodos = todos.filter((todo: ITodo) => {
        switch (filter) {
            case FILTERS.COMPLETED:
                return todo.completed;
            case FILTERS.ACTIVE:
                return !todo.completed;
            default:
                return true;
        }
    });

    return (
        <div>
            <h1>TodoApp</h1>
            <AddTodo addTodo={addTodo} />
            <TodoFilter currentFilter={filter} onChange={setFilter}/>
            {todos.length > 0 && (
                <Suspense fallback={<p>Загрузка списка...</p>}>
                    <TodoList
                        todos={filteredTodos}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                    />
                </Suspense>
            )}
        </div>
    );
};

export default App;
