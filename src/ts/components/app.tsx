import * as React from 'react';
import { FC } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import '../../scss/base.scss';
import Home from './home/home';
import Registry from './registry/registry';
import Header from './shared/header';


const App: FC = () => (
	<Router>
		<Header />
		<Route exact path="/" component={Home} />
		<Route path="/registry" component={Registry} />
	</Router>
);

export default App;
