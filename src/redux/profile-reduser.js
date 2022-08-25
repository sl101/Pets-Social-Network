import lavanda from '../image/lavanda.jpg';
import frbuldog from '../image/french_bulldog.jpg';
import like from '../image/like.svg';

const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';

const initialState = {
	profileHeader: {
		src: lavanda,
		alt: 'lavanda flauers',
	},

	profileInfo: {
		avatar: {
			srcAvatar: frbuldog,
			altAvatar: 'fr-buldog',
		},

		personalData: {
			name: 'Dog Buldog',
			age: 2,
		},
	},

	updatePost: '',

	postsData: {
		emotionsIcons: {
			srcLike: like,
			altLike: 'icon like',
		},

		posts: [
			{
				id: 1,
				name: 'small dog',
				message: 'Hi! I am small dog',
				likesCount: 5,
			},
			{
				id: 2,
				name: 'lucky dog',
				message: 'O! I am lucky dog',
				likesCount: 2,
			},
			{
				id: 3,
				name: 'angry cat',
				message: "And I'm nice cat",
				likesCount: 3,
			},
			{ id: 4, name: 'lucky dog', message: 'Great!', likesCount: 0 },
		],
	},
};

const profileReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			const post = state.updatePost;

			if (post) {
				const maxId = state.postsData.posts.length;
				const newPost = {
					id: maxId + 1,
					name: 'hot dog',
					message: post,
					likesCount: 0,
				};

				// return {
				// 	...state,
				// 	updatePost: '',
				// 	posts: [...state.postsData.posts, newPost],
				// };
				let stateCopy = { ...state };
				stateCopy.postsData.posts = [...state.postsData.posts];
				stateCopy.postsData.posts.push(newPost);
				stateCopy.updatePost = '';

				return stateCopy;
			}
			return state;
		}

		case UPDATE_POST:
			return { ...state, updatePost: action.payLoad };

		default:
			return state;
	}
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostActionCreator = (value) => {
	return { type: UPDATE_POST, payLoad: value };
};

export default profileReduser;
