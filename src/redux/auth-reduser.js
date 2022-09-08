const SET_USER_DATA = 'TOGGLE_FOLLOW';

const initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	// isFetching: false,
};

const authReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			// debugger;
			return {
				...state,
				...action.data,
				isAuth: true,
			};

		default:
			return state;
	}
};

export const setAuthUserDataAc = (userId, email, login) => ({
	type: SET_USER_DATA,
	data: { userId, email, login },
});

export default authReduser;
