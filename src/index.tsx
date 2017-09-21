import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import {  BrowserRouter as /*Router, Route*//*, Link*/} from 'react-router-dom';
import {  BrowserRouter } from 'react-router-dom';

import { store } from './reducers/store';

import App from './containers/app/app';
// import HomePage from './containers/pages/home/homePage'
import registerServiceWorker from './registerServiceWorker';

// <Route path="/" component={App} />

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
