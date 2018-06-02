import React from 'react';
import { reducer as form } from 'redux-form';
import ReactDOM from 'react-dom';

import "assets/scss/material-dashboard-pro-react.css?v=1.1.0";

import App from './App';
import { Provider } from 'react-redux';
import { init, dispatch } from '@rematch/core';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import awsmobile from './aws-exports';
import Amplify, { Auth } from 'aws-amplify';

import * as models from './models';
import selectorsPlugin from '@rematch/select';

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

async function startApp() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    dispatch.app.isUserLoggedIn(true);
    dispatch.app.setUsername(user.username);
    
  } catch(err) {
    console.log(err);
  }

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
}

startApp();

registerServiceWorker();
