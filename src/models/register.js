import { Auth } from 'aws-amplify';
import { dispatch } from '@rematch/core';
import { push } from 'react-router-redux';
import { SubmissionError } from 'redux-form';

export default {
    state: {
        username: '',
        email: '',
        password: '',
        telegramUsername: '',
        phoneNumber: '',
        firstName: '',
        lastName:'',
    },
    reducers: {
    },
    effects: {
      async registerAsync(payload) {
        try {
          const {username, email, password, telegramUsername, phoneNumber} = payload;
          await Auth.signUp({
            username,
            password,
            attributes: {
              'email': email,
              'phone_number': phoneNumber,
              'nickname': telegramUsername
            }
          });
          dispatch.verification.setCredential({
            username: username,
            password: password
          });

          dispatch(push('/pages/verification'));
        } catch (err) {
          if(err.message === undefined) {
            throw new SubmissionError({_error: err})
          }
          throw new SubmissionError({_error: err.message});
        }
      }
    }
}
