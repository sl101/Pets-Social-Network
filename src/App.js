import './components/Reset.css';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import AppContent from './components/AppContent/AppContent';

const App = (props) => {
	return (
		<div className="container">
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar />
				<AppContent />
			</div>
		</div>
	);
};

export default App;
