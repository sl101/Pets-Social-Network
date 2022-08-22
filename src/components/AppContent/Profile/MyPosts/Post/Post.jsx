import LikeContainer from './Like/LikeContainer';
import style from './Post.module.css';

const Post = (props) => {
	return (
		<div className={style.content}>
			<a className={style.link} href="jsx-a11y/anchor-is-valid">
				<h2 className={style.nickName}>{props.elementData.name}</h2>
			</a>
			<div className={style.body}>
				<p>{props.elementData.message}</p>
			</div>
			<LikeContainer />
		</div>
	);
};

export default Post;
