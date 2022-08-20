import './components/Reset.css';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import AppContent from './components/AppContent/AppContent';

const App = (props) => {
	return (
		<div className="container">
			<div className="app-wrapper">
				<Header headerData={props.state.headerData} />
				<Navbar />
				<AppContent
					profileData={props.state.profileData}
					dialogsData={props.state.dialogsData}
					dispatch={props.dispatch}
				/>
			</div>
		</div>
	);
};

export default App;
