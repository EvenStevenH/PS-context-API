import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
	// store array of todo objects
	const [todos, setTodos] = useState(() => {
		const saved = localStorage.getItem("todos");
		return saved ? JSON.parse(saved) : [];
	});

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	// CRUD functions
	function addTodo(text) {
		const newTodo = {
			id: Date.now(),
			text,
			completed: false,
		};
		setTodos((prev) => [...prev, newTodo]);
	}
	function toggleTodo(id) {
		setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
	}
	function deleteTodo(id) {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	}
	function editTodo(id, newText) {
		setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
	}
	function clearCompleted() {
		setTodos((prev) => prev.filter((todo) => !todo.completed));
	}

	return (
		<TodoContext.Provider
			value={{
				todos,
				addTodo,
				toggleTodo,
				deleteTodo,
				editTodo,
				clearCompleted,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}
