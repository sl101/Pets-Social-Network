const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

const initialState = {
	updateMessage: '',

	usersData: [
		{ id: 1, name: 'Slava' },
		{ id: 2, name: 'Lena' },
		{ id: 3, name: 'Erika' },
		{ id: 4, name: 'Vania' },
	],

	messagesData: [
		{ id: 1, message: 'Hi!' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'Lernst du Deutsch?' },
		{ id: 4, message: 'Great!' },
	],
};

const dialogsReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			const message = state.updateMessage;
			if (message) {
				const maxId = state.messagesData.length;
				const newMessage = {
					id: maxId + 1,
					message: message,
				};
				state.messagesData.push(newMessage);
				state.updateMessage = '';
			}
			return state;

		case UPDATE_MESSAGE:
			state.updateMessage = action.fieldValue;
			return state;

		default:
			return state;
	}
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateMessageActionCreator = (value) => {
	return { type: UPDATE_MESSAGE, fieldValue: value };
};

export default dialogsReduser;
