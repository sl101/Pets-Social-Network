import style from './PostEntry.module.css';
import React from 'react';
import {
	addPostActionCreator,
	updatePostActionCreator,
} from '../../../../redux/profile-reduser';

const PostEntry = (props) => {
	const textareaRef = React.createRef();

	const addPost = () => {
		props.dispatch(addPostActionCreator());
	};

	const updateArea = () => {
		const text = textareaRef.current.value;
		props.dispatch(updatePostActionCreator(text));
	};

	return (
		<div className={style.form}>
			<textarea
				className={style.textarea}
				placeholder="Enter your post..."
				ref={textareaRef}
				onChange={updateArea}
				value={props.updatePost}
			/>
			<button className={style.button} onClick={addPost}>
				Add
			</button>
		</div>
	);
};

export default PostEntry;
