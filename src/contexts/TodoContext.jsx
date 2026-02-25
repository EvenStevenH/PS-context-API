import { createContext, useState, useEffect, useMemo } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
	// store array of todo objects
	const [todos, setTodos] = useState(() => {
		const saved = localStorage.getItem("todos");
		return saved ? JSON.parse(saved) : [];
	});

	// value object ref > only change when todos change
	const value = useMemo(
		() => ({
			todos,
			addTodo,
			toggleTodo,
			deleteTodo,
			editTodo,
			clearCompleted,
		}),
		[todos],
	);

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

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
