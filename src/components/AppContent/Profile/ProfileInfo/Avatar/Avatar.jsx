import style from './Avatar.module.css';

const Avatar = (props) => {
	return (
		<div className={style.picture}>
			<img
				className={style.img}
				// src={props.avatar.photos.large}
				// alt={`${props.avatar.fullName} ${'photo'}`}
				src={props.src}
				alt={props.alt}
			/>
		</div>
	);
};

export default Avatar;
