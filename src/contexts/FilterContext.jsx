import { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
    // simple state and setter > control visibility
	const [filter, setFilter] = useState("all");

	return <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>;
}
