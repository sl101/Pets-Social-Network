import MessageEntry from './MessageEntry';
import { connect } from 'react-redux';
import {
	addMessageActionCreator,
	updateMessageActionCreator,
} from '../../../../redux/dialogs-reduser';

const mapStateToProps = (state) => {
	return {
		updateMessage: state.dialogsData.updateMessage,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateArea: (e) => {
			const text = e.target.value;
			dispatch(updateMessageActionCreator(text));
		},
		addMessage: () => {
			dispatch(addMessageActionCreator());
		},
	};
};

const MessageEntryContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageEntry);

export default MessageEntryContainer;
