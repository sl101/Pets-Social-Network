import { combineReducers, createStore } from 'redux';
import headerReduser from './header-reduser';
import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';

const redusers = combineReducers({
	headerData: headerReduser,
	profileData: profileReduser,
	dialogsData: dialogsReduser,
});

const store = createStore(redusers);
export default store;
