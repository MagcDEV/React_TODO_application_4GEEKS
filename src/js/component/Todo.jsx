import React, { useState, useEffect } from "react";

const Todos = props => {
	let [tasks, setTasks] = useState([]);

	const handleKeyDown = event => {
		if (event.key == "Enter") {
			setTasks([...tasks, event.target.value]);
		}
	};

	/*
    // initialize the tasks variable to an empty array and hook it to setTasks function
    const [ tasks, setTasks] = useState([]);

    // this function useEffect will run only one time, when the component is finally loaded the first time.
    useEffect(() =>
        // here i fetch my todos from the API
        fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr')
            .then(r => r.json())
            .then(data => setTasks(data)) //here it re-set the variable tasks with the incoming data
    , []);

    return <ul>{tasks.map(t => <li>{t.label}</li>)}</ul>;
*/
	return (
		<div className="container mt-5 lista">
			<ul className="list-group p-2">
				<input
					onKeyDown={handleKeyDown}
					type="text"
					className="form-control"
				/>
				{tasks.map(function(x) {
					return (
						<li key={x} className="list-group-item">
							{x}
						</li>
					);
				})}
				<li className="list-group-item">primera tarea</li>
				<li className="list-group-item">primera tarea</li>
				<li className="list-group-item">primera tarea</li>
			</ul>
		</div>
	);
};

export default Todos;
