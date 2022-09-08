import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
	return (
		<header className={style.header}>
			<img
				className={style.logo}
				src={props.headerData.src}
				alt={props.headerData.alt}
			/>
			<div className={style.loginBlock}>
				<NavLink className={style.loginLink} to={'/login'}>
					{props.isAuth ? props.login : 'Login'}
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
