import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import './App.css';
import { DaftarPasien } from './screens/DaftarPasien';
import { DaftarStaffFarmasi } from './screens/DaftarStaffFarmasi';
import { Home } from './screens/Home';
import { NotFound } from './screens/NotFound';
import { UpdatePasien } from './screens/UpdatePasien';
import { InputStatusLabPasien } from './screens/InputStatusLabPasien';

export class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
						<NavLink to="#" className="navbar-brand">
							<img src="/favicon.ico" alt="#" width="30" height="30"/>
						</NavLink>
						<div className="collapse navbar-collapse">
							<ul className="navbar-nav mr-auto">
								<li className='nav-item'>
									<NavLink to="/" exact className="nav-link" activeClassName="active" >Home</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to="/all-pasien" exact className="nav-link" activeClassName="active">Daftar Pasien</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to="/all-staff" exact className="nav-link" activeClassName="active">Daftar Staff Farmasi</NavLink>
								</li>
							</ul>
						</div>
					</nav>
				
					<div className="container">
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/all-pasien" exact component={DaftarPasien} />
							<Route path="/update-pasien/:id" exact component={UpdatePasien} />
							<Route path="/all-staff" exact component={DaftarStaffFarmasi} />
							<Route path="/not-found" exact component={NotFound} />
							<Route path="/status-lab/:id" exact component={InputStatusLabPasien} />
							<Route component={NotFound} />

						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}