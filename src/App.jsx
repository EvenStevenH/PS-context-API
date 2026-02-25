import { useContext } from "react";
import AppProviders from "./AppProviders";
import { ThemeContext } from "./contexts/ThemeContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton";
import "./App.css";

export default function App() {
	const { theme } = useContext(ThemeContext);

	return (
		<main className={`app ${theme}`}>
			<section>
				<h2>Toggle Theme</h2>
				<ThemeToggleButton />
			</section>

			<section>
				<h2>Todo App</h2>
				<TodoInput />
				<FilterButtons />
				<TodoList />
			</section>
		</main>
	);
}
