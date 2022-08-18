import style from './Message.module.css';

const Message = (props) => {
	return <li className={style.message}>{props.messageData.message}</li>;
};

export default Message;
