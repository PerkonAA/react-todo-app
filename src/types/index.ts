import type {FILTERS} from "../consts";

export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
}

export type TFilter = typeof FILTERS[keyof typeof FILTERS];

export type Action =
    | { type: 'ADD_TODO'; payload: ITodo }
    | { type: 'REMOVE_TODO'; payload: number }
    | { type: 'EDIT_TODO'; payload: { id: number; text: string } }
    | { type: 'TOGGLE_TODO'; payload: number };