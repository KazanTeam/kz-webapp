import axios from 'axios';
import { Auth } from 'aws-amplify';

axios.interceptors.request.use(async (config) => {
  // const authenToken = await Auth.currentSession();
  // if (authenToken) {
  //   config.headers.Authorization = authenToken.idToken.jwtToken;
  // }
  return config
})