import { Auth } from 'aws-amplify';
import { dispatch } from '@rematch/core';
import {push} from "react-router-redux";
import {SubmissionError} from "redux-form";

export default {
  state: {

  },
  reducers: {

  },
  effects: {
    async loginAsync(payload) {
      const {username, password} = payload;
      const {isUserLoggedIn, setUsername} = dispatch.app;
      try {
        await Auth.signIn(username, password).then(user => {
          isUserLoggedIn(true);
          setUsername(user.username);
          Auth.currentAuthenticatedUser().then(cognitoUser => {
            localStorage.setItem('access_token', cognitoUser.getSignInUserSession().getAccessToken().getJwtToken())
          });
          return dispatch(push('/dashboard'));
        });
      } catch(err) {
        if (err.code === 'UserNotConfirmedException') {
          dispatch.verification.setCredential({
            username,
            password
          });
          await Auth.resendSignUp(username);
          return dispatch(push('/pages/verification'));
        } else {
          throw new SubmissionError(err.message)
        }
      }
    }
  }
}
