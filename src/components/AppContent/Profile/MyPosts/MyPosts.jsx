import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = (props) => {
	const postsElements = props.postsData.posts.map((element) => (
		<li className={style.item}>
			<Post
				emotionsIcons={props.postsData.emotionsIcons}
				elementData={element}
			/>
		</li>
	));

	return <ul className={style.content}>{postsElements.reverse()}</ul>;
};

export default MyPosts;
