import { useState } from "react";

import "./App.css";
import EmployeeCard from "./components/EmployeeCard";

const sampleEmployee = {
	name: {
		first: "Liam'",
		last: "Grant",
	},
	email: "liam.grant@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};

function App() {
	const getEmployee = () => {
		// Send the request
		fetch("https://randomuser.me/api/")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
				console.log(data);
			});
	};
	const [employee, setEmployee] = useState(sampleEmployee);

	return (
		<div className="App">
			<EmployeeCard employee={employee} />
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</div>
	);
}
export default App;
