import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoItem({ todo }) {
	const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext); // functions from context
	const [editText, setEditText] = useState(false); // editing mode state
	const [text, setText] = useState(todo.text);

	// editing mode functions
	function handleEdit() {
		if (!text.trim()) return; // Check if the text is empty or only whitespace
		editTodo(todo.id, text);
		setEditText(false); // Exit editing mode after saving
	}
	function handleKeyDown(e) {
		if (e.key === "Enter") handleEdit();
		if (e.key === "Escape") setEditText(false);
	}

	return (
		<li className="todo-item">
			{editText ? (
				<>
					<input
						className="edit-input"
						value={text}
						onChange={(e) => setText(e.target.value)}
						onKeyDown={handleKeyDown}
					/>
					<button onClick={handleEdit}>Save</button>
				</>
			) : (
				<>
					<div>
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => toggleTodo(todo.id)}
							style={{ marginRight: "1em" }}
						/>
						<span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
					</div>

					<div>
						<button onClick={() => setEditText(true)}>Edit</button>
						<button onClick={() => deleteTodo(todo.id)}>Delete</button>
					</div>
				</>
			)}
		</li>
	);
}
