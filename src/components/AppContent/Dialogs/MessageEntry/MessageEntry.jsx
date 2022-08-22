import style from './MessageEntry.module.css';
import React from 'react';

const MessageEntry = (props) => {
	return (
		<div className={style.form}>
			<textarea
				className={style.textarea}
				placeholder="Enter your post..."
				onChange={props.updateArea}
				value={props.updateMessage}
			/>
			<button className={style.button} onClick={props.addMessage}>
				Add
			</button>
		</div>
	);
};

export default MessageEntry;
