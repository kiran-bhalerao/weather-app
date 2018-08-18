import React from 'react';
import ReactDOM from 'react-dom';
import  {Provider} from 'react-redux';
// import ReduxPromise  from 'redux-promise';
import configStore from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configStore();
// console.log(store.getState())

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
