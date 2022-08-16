import style from './Like.module.css';

const Like = (props) => {
	return (
		<a href="jsx-a11y/anchor-is-valid" className={style.like}>
			<img
				className={style.img}
				src={props.emotionsIcons.srcLike}
				alt={props.emotionsIcons.altLike}
			/>
			<span className={style.likesCount}>{props.likesCount}</span>
		</a>
	);
};

export default Like;
