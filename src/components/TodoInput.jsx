import { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoInput() {
	const [text, setText] = useState("");
	const { addTodo } = useContext(TodoContext); // function from context

	// handler
	function handleSubmit(e) {
		e.preventDefault();
		if (!text.trim()) return;
		addTodo(text);
		setText("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Add a todo..."
			/>
			<button type="submit">Add</button>
		</form>
	);
}
