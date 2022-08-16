import style from './Dialogs.module.css';
import DialogUser from './DialogUser/DialogUser';
import Message from './Message/Message';

const Dialogs = (props) => {
	const dialogsElements = props.dialogsData.usersData.map((element) => (
		<DialogUser userData={element} />
	));

	const messagesElements = props.dialogsData.messagesData.map((element) => (
		<Message messageData={element} />
	));

	return (
		<div className={style.content}>
			<h2 className={style.title}>Dialogs</h2>
			<div className={style.inner}>
				<ul className={style.users}>{dialogsElements}</ul>
				<ul className={style.messages}>{messagesElements}</ul>
			</div>
		</div>
	);
};

export default Dialogs;
