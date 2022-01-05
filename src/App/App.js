import "./App.css";
import Login from "../Login/Login";
import Main from "../Main/Main";
import AddCaroro from "../AddCaroro/AddCaroro";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Route exact path="/" component={Main}></Route>
				<Route path="/addcaroro" component={AddCaroro}></Route>
			</Router>
		</>
	);
}

export default App;
