import style from './Dialogs.module.css';
import DialogUser from './DialogUser/DialogUser';
import Message from './Message/Message';
import MessageEntryContainer from './MessageEntry/MessageEntryContainer';

const Dialogs = (props) => {
	const dialogsElements = props.usersData.map((element) => (
		<DialogUser userData={element} key={element.id} />
	));

	const messagesElements = props.messagesData.map((element, index) => (
		<Message messageData={element} key={element.id} />
	));

	return (
		<div className={style.content}>
			<h2 className={`${style.title} ${'title'}`}>Dialogs</h2>
			<div className={style.inner}>
				<ul className={style.users}>{dialogsElements}</ul>
				<div className={style.chat}>
					<ul className={style.messages}>{messagesElements}</ul>
					<MessageEntryContainer />
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
