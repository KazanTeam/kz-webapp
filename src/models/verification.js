import { dispatch } from '@rematch/core'
import { Auth } from 'aws-amplify';
import {push} from "react-router-redux";
import {SubmissionError} from "redux-form";

export const selectors = {
  getCredential: state => state.verification.credential
};

export default {
  state: {
    credential: {}
  },
  reducers: {
    setCredential(state, payload) {
      return {
        ...state,
        credential: payload
      }
    }
  },
  effects: {
    async confirmSignUpAsync({code}, rootState) {
      try {
        const {username} = selectors.getCredential(rootState);
        await Auth.confirmSignUp(username, code);
        dispatch(push("/pages/login-page"))
      } catch(err) {
        throw new SubmissionError({error: err.message});
      }
    },
    async resendSignUpAsync(payload, rootState) {
      try {
        const {username} = selectors.getCredential(rootState);
        await Auth.resendSignUp(username);
      } catch(err) {
        console.log(err);
      }
    }
  }
}
