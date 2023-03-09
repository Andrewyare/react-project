import React from 'react';
import { Link } from 'react-router-dom';
import "./css/style.css"

const Header = () => {
	return (
		<nav className="header">
			<div className="header__item">
				<Link className='header__link' to="/">Posts</Link>
			</div>
			<div className="header__item">
				<Link className='header__link' to="/users">Users</Link>
			</div>
			<div className="header__item">
				<Link className='header__link' to="/todo">Todos</Link>
			</div>
		</nav >
	);
};

export default Header;