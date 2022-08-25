import dart from '../image/s-l500.jpg';

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
	users: [
		{
			id: 1,
			src: dart,
			followed: true,
			fullName: 'Slava',
			status: 'Nice to meet you...',
			location: { city: 'Kyiv', country: 'Ukraine' },
		},
		{
			id: 2,
			src: dart,
			followed: false,
			fullName: 'Lena',
			status: 'O my god!',
			location: { city: 'Berlin', country: 'Germany' },
		},
		{
			id: 3,
			src: dart,
			followed: false,
			fullName: 'Erika',
			status: 'Yo!',
			location: { city: 'Toronto', country: 'Canada' },
		},
		{
			id: 4,
			src: dart,
			followed: true,
			fullName: 'Vania',
			status: 'Xo xo xo',
			location: { city: 'Miamy', country: 'USA' },
		},
	],
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
			return { ...state, users: [...state.users, ...action.users] };

		default:
			return state;
	}
};

export const followAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReduser;
