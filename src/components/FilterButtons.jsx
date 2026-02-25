import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

export default function FilterButtons() {
	const { filter, setFilter } = useContext(FilterContext);

	const renderButton = (label, value) => (
		<button
			key={value}
			className={filter === value ? "active-filter" : ""}
			onClick={() => setFilter(value)}
		>
			{label}
		</button>
	);

	return (
		<div className="filter-buttons">
			{renderButton("All", "all")}
			{renderButton("Active", "active")}
			{renderButton("Completed", "completed")}
		</div>
	);
}
