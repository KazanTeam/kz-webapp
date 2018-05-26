import {Auth} from 'aws-amplify';

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
  }
}

export default new UserService();
