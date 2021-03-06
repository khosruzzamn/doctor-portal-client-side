import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import useAuth from '../../Authentication/Hooks/useAuth';
import logo from '../../images/logo.png';

const Header = () => {
	const { user, logOut } = useAuth();
	const [isSticky, setSticky] = useState(false);
	const [isCollapsed, setCollapsed] = useState(null);
	const [navStyle, setNavStyle] = useState('text-gray');

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				setSticky(true);
				setNavStyle('');
			} else {
				setSticky(false);
				setNavStyle('text-gray');
			}
		});
	}, []);
	return (
		<nav id='top-header'
			className={
				isSticky || isCollapsed ? (
					'slide in show shadow-sm navbar navbar-expand-sm bg-white navbar-light py-3 fixed-top'
				) : (
					'slide out show navbar navbar-expand-sm navbar-light py-4 fixed-top'
				)
			}
		>
			<div className="container">
				<Link className="navbar-brand" to="/" style={{ color: '#15D1C8' }}>
					<img src={logo} alt="logo" />
				</Link>
				<button
					onClick={() => setCollapsed(!isCollapsed ? 'show' : null)}
					className="navbar-toggler d-lg-none"
					type="button"
					data-toggle="collapse"
					data-target="#collapsibleNavId"
					aria-controls="collapsibleNavId"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className={`collapse navbar-collapse ${isCollapsed}`} id="collapsibleNavId">
					<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-gray" to="/appointment">
								Make Appointment
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-gray" to="/our-doctor">
								Specialists
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-gray" to="/dashboard/dashboard">
								Dashboard
							</Link>
						</li>
						{/* <li className="nav-item">
							<Link className={`nav-link ${navStyle}`} to="/reviews">
								Reviews
							</Link>
						</li> */}
						<li className="nav-item">
							<Link className="nav-link text-gray" to="/contact">
								Contact Us
							</Link>
						</li>

						{user?.email ? <li className="nav-item">
							<Link onClick={logOut} className='btn btn-secondary ml-5' to="/">
								Sign Out
							</Link>
						</li> : <li className="nav-item">
							<Link className='btn btn-secondary ml-5' to="/login">
								Sign In
							</Link>
						</li>}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
