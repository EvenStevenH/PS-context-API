import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	// lazy initializer > get stored theme, if present
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		return savedTheme ? JSON.parse(savedTheme) : "light"; 
	});

	// update localStorage on change
	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(theme));
	}, [theme]);

	function toggleTheme() {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	}

	// provide the context
	return (<ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>)
}
