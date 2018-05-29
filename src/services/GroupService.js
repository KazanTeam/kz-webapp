import axios from 'axios';
import { Auth } from 'aws-amplify';

axios.interceptors.request.use(async (config) => {
  const authenToken = await Auth.currentSession();
  config.baseURL = 'http://123.31.12.102/kazan/api';
  console.log("interceptor");
  config.headers = {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Content-type': 'Application/json',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  };
  if (authenToken) {
    config.headers.Authorization = `Bearer ${authenToken.idToken.jwtToken}`;
  }

  console.log(config);
  return config
});

class GroupService {
  createGroup = async group => {
    const {name, groupNotifyBot, groupAlertBot} = group;
    await axios.post('/groups', {
      name: name,
      groupNotifyBot: groupNotifyBot,
      groupAlertBot: groupAlertBot
    }).then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  };

  list = async () => {
    await axios.get('/users/groups').then(resp => {
      console.log(resp)
    }).catch(error => {
      console.log(error)
    })
  }
}

export default new GroupService();
