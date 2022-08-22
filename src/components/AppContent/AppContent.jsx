import Profile from './Profile/Profile';
import DialogsContainer from './Dialogs/DialogsContainer';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import style from './AppContent.module.css';
import { Route, Routes } from 'react-router-dom';

const AppContent = (props) => {
	return (
		<section className={style.appContent}>
			<Routes>
				<Route
					path="/profile/*"
					element={
						<Profile
							profileData={props.profileData}
							dispatch={props.dispatch}
						/>
					}
				/>
				<Route path="/dialogs/*" element={<DialogsContainer />} />
				<Route path="/news/*" element={<News />} />
				<Route path="/music/*" element={<Music />} />
				<Route path="/settings/*" element={<Settings />} />
			</Routes>
		</section>
	);
};

export default AppContent;
