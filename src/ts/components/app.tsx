import React, { FC } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import '../../scss/base.scss';
import Home from './pages/home';
import Itinerary from './pages/itinerary';
import Lodging from './pages/lodging';
import Party from './pages/party';
import Registry from './pages/registry';
import Header from './shared/header';

const App: FC = () => (
	<Router>
		<Header />
		<Route exact path="/" component={Home} />
		<Route path="/registry" component={Registry} />
		<Route path="/lodging" component={Lodging} />
		<Route path="/itinerary" component={Itinerary} />
		<Route path="/party" component={Party} />
	</Router>
);

export default App;
