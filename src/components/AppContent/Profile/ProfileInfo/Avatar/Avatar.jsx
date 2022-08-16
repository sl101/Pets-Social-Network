import style from './Avatar.module.css';

const Avatar = (props) => {
	return (
		<div className={style.picture}>
			<img
				className={style.img}
				src={props.avatar.srcAvatar}
				alt={props.avatar.altAvatar}
			/>
		</div>
	);
};

export default Avatar;
