import {Auth, API} from 'aws-amplify';
import {users} from "../resources/Data";

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
  }
}

export default new UserService();
