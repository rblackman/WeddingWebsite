import React, { FC, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../../scss/header.scss';
import { debounce } from '../../helpers/debounce';

const isMobile: () => boolean = () => window.innerWidth <= 800;

const Header: FC = () => {

	const [isOpen, updateOpen] = useState(false);
	const [showMenu, updateShowMenu] = useState(false);
	const [isInit, updateIsInit] = useState(false);

	const menuClick: () => void = () => updateOpen(!isOpen);

	useEffect(() => {
		if (isMobile()) {
			updateShowMenu(true);
		}

		const debouncedResize = debounce(() => {
			const newShowMenu = isMobile();
			if (newShowMenu !== showMenu) {
				updateShowMenu(newShowMenu);
			}
		}, 200);

		window.addEventListener('resize', debouncedResize);

		updateIsInit(true);

		return () => {
			window.removeEventListener('resize', debouncedResize);
		};

	});

	const navClasses: string[] = [
		showMenu ? 'show-menu' : 'no-show-menu',
		isOpen ? 'menu-open' : 'menu-closed',
		isInit ? 'show' : 'hide'
	];

	return (
		<header className={navClasses.join(' ')}>
			<nav>
				<h1>
					<Link to="/" className="home-link" title="Home">#r2b2wedding</Link>
				</h1>
				<ul className="nav-items">
					<li><NavLink to="/itinerary" className="nav-item" activeClassName="nav-item active">Itinerary</NavLink></li>
					<li><NavLink to="/lodging" className="nav-item" activeClassName="nav-item active">Lodging</NavLink></li>
					<li><NavLink to="/party" className="nav-item" activeClassName="nav-item active">Wedding Party</NavLink></li>
					<li><NavLink to="/registry" className="nav-item" activeClassName="nav-item active">Registry</NavLink></li>
				</ul>
				<button className="menu-button" onClick={menuClick}>
					<svg className="menu">
						<use xlinkHref="#menu" />
					</svg>
				</button>
			</nav>
		</header >
	);
};

export default Header;
