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
          if(err.message === undefined) {
            throw new SubmissionError({_error: err})
          }
          throw new SubmissionError({_error: err.message});
        }
      }
    }
  }
}
