import { NavLink } from 'react-router-dom';
import style from './DialogUser.module.css';

const DialogUser = (props) => {
	return (
		<li className={style.user}>
			<NavLink
				className={(navData) => (navData.isActive ? style.active : style.link)}
				to={'/dialogs/' + props.userData.id}
			>
				{props.userData.name}
			</NavLink>
		</li>
	);
};

export default DialogUser;
