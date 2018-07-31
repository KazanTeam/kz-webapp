import {Auth} from 'aws-amplify';
import {dispatch} from '@rematch/core';
import {push} from 'react-router-redux';

export default {
  state: {
    username: '',
    email: '',
    password: '',
    telegramUsername: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
  },
  reducers: {},
  effects: {
    async registerAsync(payload) {
      try {
        const {username, email, password, telegramUsername, phoneNumber, firstName, lastName} = payload;
        await Auth.signUp({
          username,
          password,
          attributes: {
            'email': email,
            'phone_number': phoneNumber,
            'nickname': telegramUsername,
            'given_name': lastName,
            'name': firstName
          }
        });
        dispatch.verification.setCredential({
          username: username,
          password: password
        });

        dispatch(push('/pages/verification'));
      } catch (err) {
        throw err;
      }
    }
  }
}
