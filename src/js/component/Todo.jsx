import React, { useState } from "react";

const Todos = () => {
	let [tasks, setTasks] = useState([]);

	const handleKeyDown = event => {
		if (event.key == "Enter") {
			setTasks([
				...tasks,
				{
					id: tasks.length + 1,
					tareas: event.target.value,
					buttonVisible: false
				}
			]);
		}
	};

	const handleRemove = todo_x => {
		let newTasks = tasks.filter(item => item.id !== todo_x);
		setTasks(newTasks);
	};

	return (
		<div className="container mt-5 lista">
			<ul className="list-group p-2">
				<input
					placeholder="What needs to be done?"
					onKeyDown={handleKeyDown}
					type="text"
					className="form-control"
				/>
				{tasks.map(x => {
					return (
						<li
							key={x.id}
							onMouseOver={() => {
								let objIndex = tasks.findIndex(
									obj => obj.id == x.id
								);
								tasks[objIndex].buttonVisible = true;
								setTasks([...tasks]);
							}}
							onMouseOut={() => {
								let objIndex = tasks.findIndex(
									obj => obj.id == x.id
								);
								tasks[objIndex].buttonVisible = false;
								setTasks([...tasks]);
							}}
							className="list-group-item">
							{x.tareas}
							<button
								type="button"
								onClick={() => handleRemove(x.id)}
								className={`btn-close position-absolute end-0 me-3 ${
									x.buttonVisible ? "visible" : "invisible"
								}`}
								aria-label="Close"></button>
						</li>
					);
				})}
			</ul>
			<div>{tasks.length} item left</div>
		</div>
	);
};

export default Todos;
