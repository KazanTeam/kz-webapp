import {Auth} from 'aws-amplify';
import {users} from "../resources/Data";
import API from './api'

class UserService {

  login({password, username}) {
    Auth.signIn(username, password)
      .then(user => console.log(user))
      .catch(err => console.log(err));
  };

  signup({username, password, attributes}) {
    Auth.signUp({
      username,
      password,
      attributes
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  getAccessToken = () => {
    return localStorage.getItem('access_token')
  };

  list = async () => {
    return await users
  };

  currentUser = async () => {
    try {
      // const cognitoUser = await Auth.currentAuthenticatedUser();
      const userInfo = await Auth.currentUserInfo();
      let user = userInfo.attributes;
      user.username = userInfo.username;
      return user
    } catch (err) {
      throw err;
    }
  }

  createUser = (payload) => {
    const {username, email, password, telegramUsername, phoneNumber, firstName, lastName} = payload;
    const user = {
      "email": email,
      "firstname": firstName,
      "lastname": lastName,
      "password": password,
      "phone": phoneNumber,
      "telegramId": telegramUsername,
      "username": username
    };
    try {
      API.post('/user/add', user);
    } catch (error) {
      throw new Error(error.response.data);
    }
  }
}

export default new UserService();
