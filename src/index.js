import React from 'react';
import { reducer as form } from 'redux-form';
import ReactDOM from 'react-dom';

import "assets/scss/material-dashboard-pro-react.css?v=1.1.0";

import App from './App';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import awsmobile from './aws-exports';
import Amplify from 'aws-amplify';

import * as models from './models';
import selectorsPlugin from '@rematch/select'

// export {default as config }  from './config';

Amplify.configure(awsmobile);

const history = createHistory();

const store = init({
  models,
  redux: {
    middlewares:[routerMiddleware(history)],
    reducers: {
      form
    }
  },
  plugins: [selectorsPlugin()]
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
