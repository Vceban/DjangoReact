import React, {Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import store from '../store'
import {loadUser} from '../actions/auth';

import { HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import './App.scss'
import Login from './accounts/Login';
import Register from './accounts/Register'
import Header from './layout/Header'
import Footer from './layout/Footer'
import PrivateRoute from './common/PrivateRoute'
import Navbar from "./Navbar";
import Logggin from "./accounts/Logggin";
import Regggister from "./accounts/Regggister";
import ProductList from "./ProductList";
import Card from "./Card";
import Item from "./Item";
import Swiper from "./Swiper";


class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isLoggginActive: true,
		}
	}

	componentDidMount() {
		store.dispatch(loadUser());
	}

	render(){
		const { isLoggginActive } = this.state;
		const current = isLoggginActive ? "Register" : "Login";
		const currentActive = isLoggginActive ? "login" : "register";
		return (
			<Provider store ={store}>
				<Router>
			<Fragment>
				<Header/>
			<div className="container">
				<Switch>
					<Route exact path = "/register" component ={Register} />
					<Route exact path = "/login" component ={Logggin} />
				</Switch>
			</div>

			</Fragment>

					<Footer/>
					</Router>
				</Provider>
			)
	}
}
ReactDOM.render(<App/>, document.getElementById('app'));