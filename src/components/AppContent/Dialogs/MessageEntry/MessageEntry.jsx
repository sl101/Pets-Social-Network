import style from './MessageEntry.module.css';
import React from 'react';

const textareaRef = React.createRef();

const addPost = () => {
	const text = textareaRef.current.value;
	alert(text);
};

const MessageEntry = () => {
	return (
		<div className={style.form}>
			<textarea
				className={style.textarea}
				placeholder="Enter your post..."
				ref={textareaRef}
			/>
			<button className={style.button} onClick={addPost}>
				Add
			</button>
		</div>
	);
};

export default MessageEntry;
