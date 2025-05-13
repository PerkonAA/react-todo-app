import type {Action, ITodo} from "../types";

export const todoReducer = (state: ITodo[], action: Action): ITodo[] => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.payload);
        case 'TOGGLE_TODO':
            return state.map((todo) =>
                todo.id === action.payload
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state;
    }
}