import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Store from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

let store = Store();

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root'));
registerServiceWorker();
