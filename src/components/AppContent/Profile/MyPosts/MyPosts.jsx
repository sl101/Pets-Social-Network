import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = (props) => {
	const postsElements = props.posts.map((element) => (
		<Post elementData={element} key={element.id} />
	));

	return <ul className={style.content}>{postsElements.reverse()}</ul>;
};

export default MyPosts;
