import { Route, Routes } from 'react-router-dom';
import style from './AppContent.module.css';
import DialogsContainer from './Dialogs/DialogsContainer';
import Music from './Music/Music';
import News from './News/News';
import Profile from './Profile/Profile';
import Settings from './Settings/Settings';
import UsersContainer from './Users/UsersContainer';

const AppContent = (props) => {
	return (
		<section className={style.appContent}>
			<Routes>
				<Route path="/profile/*" element={<Profile />} />
				<Route path="/users/*" element={<UsersContainer />} />
				<Route path="/dialogs/*" element={<DialogsContainer />} />
				<Route path="/news/*" element={<News />} />
				<Route path="/music/*" element={<Music />} />
				<Route path="/settings/*" element={<Settings />} />
			</Routes>
		</section>
	);
};

export default AppContent;
