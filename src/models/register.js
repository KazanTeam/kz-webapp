import {Auth} from 'aws-amplify';
import {dispatch} from '@rematch/core';
import {push} from 'react-router-redux';
import UserService from "../services/UserService";
export default {
  state: {
    username: '',
    email: '',
    password: '',
    telegramUsername: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    name: '',
  },
  reducers: {},
  effects: {
    async registerAsync(payload) {
      try {
        const {username, email, password, telegramUsername, phoneNumber, firstName, lastName} = payload;
        const response = await Auth.signUp({
          username,
          password,
          attributes: {
            'email': email,
            'phone_number': phoneNumber,
            'nickname': telegramUsername,
            'given_name': lastName,
            'family_name': firstName,
            'name': firstName + ' ' + lastName
          }
        });

        payload.userId = response.userSub;
        UserService.createUser(payload);
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
