import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import Users from './../AppContent/Users/Users';

const Navbar = () => {
	return (
		<nav className={style.navbar}>
			<ul className={style.list}>
				<li className={style.item}>
					<NavLink
						className={(navData) =>
							navData.isActive ? style.active : style.link
						}
						to="/profile"
					>
						Profile
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink
						className={(navData) =>
							navData.isActive ? style.active : style.link
						}
						to="/dialogs"
					>
						Messages
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink
						className={(navData) =>
							navData.isActive ? style.active : style.link
						}
						to="/users"
					>
						Users
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} to="/news">
						News
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} to="/music">
						Music
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} to="/settings">
						Settings
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
