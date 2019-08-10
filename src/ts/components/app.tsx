import React, { FC } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import '../../scss/base.scss';
import Home from './home/home';
import Itinerary from './itinerary/itinerary';
import Lodging from './lodging/lodging';
import Registry from './registry/registry';
import Header from './shared/header';

const App: FC = () => (
	<Router>
		<Header />
		<Route exact path="/" component={Home} />
		<Route path="/registry" component={Registry} />
		<Route path="/lodging" component={Lodging} />
		<Route path="/itinerary" component={Itinerary} />
	</Router>
);

export default App;
