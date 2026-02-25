import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggleButton() {
	const { toggleTheme } = useContext(ThemeContext); // function from context

	return <button onClick={toggleTheme}>Toggle Theme</button>;
}
