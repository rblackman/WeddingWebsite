import * as React from 'react';
import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../../scss/header.scss';


const Header: FC = () => (
	<header>
		<nav>
			<Link to="/" className="home-link" title="Home">#r2b2wedding</Link>
			<ul>
				<li><NavLink to="/itinerary" className="nav-item" activeClassName="nav-item active">Itinerary</NavLink></li>
				<li><NavLink to="/lodging" className="nav-item" activeClassName="nav-item active">Lodging</NavLink></li>
				<li><NavLink to="/registry" className="nav-item" activeClassName="nav-item active">Registry</NavLink></li>
			</ul>
		</nav>
	</header>
);

export default Header;
