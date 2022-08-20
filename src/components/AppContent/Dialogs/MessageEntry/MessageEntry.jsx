import style from './MessageEntry.module.css';
import React from 'react';
import {
	addMessageActionCreator,
	updateMessageActionCreator,
} from '../../../../redux/dialogs-reduser';

const MessageEntry = (props) => {
	const addMessage = () => {
		props.dispatch(addMessageActionCreator());
	};

	const updateArea = (e) => {
		const text = e.target.value;
		props.dispatch(updateMessageActionCreator(text));
	};

	return (
		<div className={style.form}>
			<textarea
				className={style.textarea}
				placeholder="Enter your post..."
				onChange={updateArea}
				value={props.updateMessage}
			/>
			<button className={style.button} onClick={addMessage}>
				Add
			</button>
		</div>
	);
};

export default MessageEntry;
