import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { FilterContext } from "../contexts/FilterContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
	const { todos } = useContext(TodoContext); // array from context
	const { filter } = useContext(FilterContext); // initial filter state from context

	// new array with only items that pass filter condition
	const filteredTodos = todos.filter((todo) => {
		if (filter === "active") return !todo.completed; // items that are not complete
		if (filter === "completed") return todo.completed; // items that are complete
		return true; // else show "all"
	});


	// "map" for new array 
	return (
		<ul>
			{filteredTodos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
				/>
			))}
		</ul>
	);
}
