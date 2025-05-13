import type {ITodo} from "../types";
import React, {useState} from "react";
import styled from "styled-components";

interface TodoItemProps {
    todo: ITodo;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    editTodo: (id: number, text: string) => void;
}

// Стили
const TodoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`;

const TodoText = styled.span<{ completed: boolean }>`
    margin: 0 8px;
    text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const BaseButton = styled.button`
    padding: 4px 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    margin: 0 8px;
`;

export const DeleteButton = styled(BaseButton)`
    background-color: #f44336;
    
    &:hover {
        background-color: #d32f2f;
    }
`;

export const EditButton = styled(BaseButton)`
    background-color: #2196f3;
    
    &:hover {
        background-color: #1976d2;
    }
`;

export const SaveButton = styled(BaseButton)`
    background-color: #28a745;
    
    &:hover {
        background-color: #218838;
    }
`;

const TodoItem: React.FC<TodoItemProps> = ({todo, deleteTodo, toggleTodo, editTodo}) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newText, setNewText] = useState<string>('');

    const handleEdit = () => {
        editTodo(todo.id, newText);
        setIsEditing(false);
    }

    return (
        <TodoContainer>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />

            {isEditing ? (
                <>
                    <input type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <SaveButton onClick={handleEdit}>Save</SaveButton>
                </>
            ) : (
                <>
                    <TodoText
                        completed={todo.completed}
                        style={{ cursor: 'pointer' }}
                        onClick={() => toggleTodo(todo.id)}
                        title='Toggle'
                    >
                        {todo.text}
                    </TodoText>
                    <EditButton onClick={() => setIsEditing(true)}>
                        Edit
                    </EditButton>
                </>
            )}

            <DeleteButton onClick={() => deleteTodo(todo.id)}>
                Delete
            </DeleteButton>
        </TodoContainer>
    );
};

export default React.memo(TodoItem);