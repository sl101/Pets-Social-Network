import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const rerenderEntireTree = (state) => {
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App state={store.getState()} dispatch={store.dispatch.bind(store)} />
		</Provider>
	</BrowserRouter>
);
// };

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
// 	const newLocal = store.getState();
// 	rerenderEntireTree(newLocal);
// });
