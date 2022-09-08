import { combineReducers, createStore } from 'redux';
import authReduser from './auth-reduser';
import dialogsReduser from './dialogs-reduser';
import headerReduser from './header-reduser';
import profileReduser from './profile-reduser';
import usersReduser from './users-reduser';

let redusers = combineReducers({
	headerData: headerReduser,
	profileData: profileReduser,
	dialogsData: dialogsReduser,
	usersData: usersReduser,
	auth: authReduser,
});

let store = createStore(redusers);

window.store = store;
export default store;
