import React, {useState} from "react";

interface AddTodoProps {
    addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
    const [text, setText] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (text.trim()) {
            addTodo(text.trim());
            setText('');
        }

        // TODO: add notification
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodo;