import style from './Message.module.css';

const Message = (props) => {
	console.log(props);
	return <li className={style.message}>{props.messageData.message}</li>;
};

export default Message;
