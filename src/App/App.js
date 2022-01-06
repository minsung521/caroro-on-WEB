import "./App.css";
import Login from "../Login/Login";
import Main from "../Main/Main";
import AddCaroro from "../AddCaroro/AddCaroro";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			{/* <Link to="/">메인</Link>
			<Link to="/addcaroro">등록</Link> */}
			<Routes>
				<Route exact path="/" element={<Main />}></Route>
				<Route path="/addcaroro" element={<AddCaroro />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
