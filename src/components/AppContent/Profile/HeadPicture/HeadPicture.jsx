import style from './HeadPicture.module.css';

const HeadPicture = (props) => {
	return (
		<div className={style.picture}>
			<img
				className={style.img}
				src={props.profileHeader.src}
				alt={props.profileHeader.alt}
			/>
		</div>
	);
};

export default HeadPicture;
