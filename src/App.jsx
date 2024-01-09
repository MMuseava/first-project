import TestResult from "./components/testResult/TestResult";
import CustomButton from "./components/customButton";
import "./App.css";

const App = () => {
	let grade = 75;

	const onPressHandler = () => {
		alert("Hi");
	};
	const promtName = () => {
		let name = prompt("Enter your name");
		alert(name + " hello");
}




	return (
		<div className="header">
			<p id="text">Hello Wolrd!</p>
			<button onClick={() => alert("Hello")}>Click Here</button>
			<button onClick={onPressHandler}>Press Here</button>
			<button onClick={promtName}>Put Name</button>
			<h2>{grade >= 85 ? "Great Job" : "Good Job"}</h2>
			<TestResult />
			<CustomButton/>
			
			
			
		</div>
	);
}

export default App;
