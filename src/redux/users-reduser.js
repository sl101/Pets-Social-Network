const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';

const initialState = {
	users: [],
	currentPage: 3,
	pageSize: 5,
	totalUsersCount: 0,
};

const usersReduser = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: !u.followed };
					}
					return u;
				}),
			};

		case SET_USERS:
			return { ...state, users: action.users };

		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.value };

		case SET_TOTAL_USER_COUNT:
			return { ...state, totalUsersCount: action.value };

		default:
			return state;
	}
};

export const followAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentAC = (value) => ({ type: SET_CURRENT_PAGE, value });
export const setTotalUsersCountAC = (value) => ({
	type: SET_TOTAL_USER_COUNT,
	value,
});

export default usersReduser;
