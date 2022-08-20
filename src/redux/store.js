// import logo from '../image/fr-buldog.svg';
// import lavanda from '../image/lavanda.jpg';
// import frbuldog from '../image/french_bulldog.jpg';
// import like from '../image/like.svg';
// import profileReduser from './profile-reduser';
// import dialogsReduser from './dialogs-reduser';

// let store = {
// 	_state: {
// 		headerData: {
// 			src: logo,
// 			alt: 'logo',
// 		},

// 		// contentData: {
// 		profileData: {
// 			profileHeader: {
// 				src: lavanda,
// 				alt: 'lavanda flauers',
// 			},

// 			profileInfo: {
// 				avatar: {
// 					srcAvatar: frbuldog,
// 					altAvatar: 'fr-buldog',
// 				},

// 				personalData: {
// 					name: 'Dog Buldog',
// 					age: 2,
// 				},
// 			},

// 			updatePost: '',

// 			postsData: {
// 				emotionsIcons: {
// 					srcLike: like,
// 					altLike: 'icon like',
// 				},

// 				posts: [
// 					{
// 						id: 1,
// 						name: 'small dog',
// 						message: 'Hi! I am small dog',
// 						likesCount: 5,
// 					},
// 					{
// 						id: 2,
// 						name: 'lucky dog',
// 						message: 'O! I am lucky dog',
// 						likesCount: 2,
// 					},
// 					{
// 						id: 3,
// 						name: 'angry cat',
// 						message: "And I'm nice cat",
// 						likesCount: 3,
// 					},
// 					{ id: 4, name: 'lucky dog', message: 'Great!', likesCount: 0 },
// 				],
// 			},
// 		},

// 		dialogsData: {
// 			updateMessage: '',

// 			usersData: [
// 				{ id: 1, name: 'Slava' },
// 				{ id: 2, name: 'Lena' },
// 				{ id: 3, name: 'Erika' },
// 				{ id: 4, name: 'Vania' },
// 			],

// 			messagesData: [
// 				{ id: 1, message: 'Hi!' },
// 				{ id: 2, message: 'How are you?' },
// 				{ id: 3, message: 'Lernst du Deutsch?' },
// 				{ id: 4, message: 'Great!' },
// 			],
// 		},
// 		// },
// 	},

// 	_callSubscriber() {},

// 	getState() {
// 		return this._state;
// 	},

// 	subscribe(observer) {
// 		this._callSubscriber = observer;
// 	},

// 	dispatch(action) {
// 		this._state.contentData.profileData = profileReduser(
// 			this._state.contentData.profileData,
// 			action
// 		);

// 		this._state.contentData.dialogsData = dialogsReduser(
// 			this._state.contentData.dialogsData,
// 			action
// 		);

// 		this._callSubscriber(this._state);
// 	},
// };

// window.store = store;
// export default store;
