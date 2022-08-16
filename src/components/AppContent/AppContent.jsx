import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
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
					element={<Profile profileData={props.contentData.profileData} />}
				/>
				<Route
					path="/dialogs/*"
					element={<Dialogs dialogsData={props.contentData.dialogsData} />}
				/>
				<Route path="/news/*" element={<News />} />
				<Route path="/music/*" element={<Music />} />
				<Route path="/settings/*" element={<Settings />} />
			</Routes>
		</section>
	);
};

export default AppContent;
