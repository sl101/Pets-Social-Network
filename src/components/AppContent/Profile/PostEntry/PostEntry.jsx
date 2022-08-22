import style from './PostEntry.module.css';

const PostEntry = (props) => {
	return (
		<div className={style.form}>
			<textarea
				className={style.textarea}
				placeholder="Enter your post..."
				onChange={props.updateArea}
				value={props.updatePost}
			/>
			<button className={style.button} onClick={props.addPost}>
				Add
			</button>
		</div>
	);
};

export default PostEntry;
