import style from './PersonalSettings.module.css';

const PersonalSettings = (props) => {
	return (
		<ul className={style.list}>
			<li className={style.item}>
				<span className={style.title}>Name:</span>
				<span className={style.value}>{props.name}</span>
			</li>
			<li className={style.item}>
				<span className={style.title}>Status:</span>
				<span className={style.value}>{props.aboutMe}</span>
			</li>
		</ul>
	);
};

export default PersonalSettings;
