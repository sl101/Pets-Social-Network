import './components/Reset.css';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import AppContent from './components/AppContent/AppContent';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="container">
				<div className="app-wrapper">
					<Header headerData={props.state.headerData} />
					<Navbar />
					<AppContent contentData={props.state.contentData} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
