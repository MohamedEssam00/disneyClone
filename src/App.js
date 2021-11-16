import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Detail from "./components/Detail";
import Home from "./components/Home";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	Link,
	useHistory,
} from "react-router-dom";
import Login from "./components/Login";
function App() {
	let history = useHistory();
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" component={Login} exact></Route>
				<Route path="/home" component={Home}></Route>
				<Route path="/detail/:id">
					<Detail />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
