import style from './HeadPicture.module.css';

const HeadPicture = (props) => {
	return (
		<div className={style.picture}>
			<img className={style.img} src={props.src} alt={props.alt} />
		</div>
	);
};

export default HeadPicture;
