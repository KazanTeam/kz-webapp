import {Auth} from 'aws-amplify';
import {dispatch} from '@rematch/core';
import {push} from "react-router-redux";

export default {
  state: {},
  reducers: {},
  effects: {
    async loginAsync(payload) {
      const {username, password} = payload;
      try {
        const user = await Auth.signIn(username, password);
        dispatch.app.set({username: user.username, isUserLoggedIn: true});
        const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
        dispatch.app.set({user: currentAuthenticatedUser});
        return dispatch(push('/dashboard'));
      } catch (err) {
        if (err.code === 'UserNotConfirmedException') {
          dispatch.verification.setCredential({
            username,
            password
          });
          await Auth.resendSignUp(username);
          return dispatch(push('/pages/verification'));
        }
        throw err;
      }
    }
  }
}
