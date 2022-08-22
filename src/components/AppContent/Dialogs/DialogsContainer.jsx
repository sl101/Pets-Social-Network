import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		usersData: state.dialogsData.usersData,
		messagesData: state.dialogsData.messagesData,
	};
};

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
