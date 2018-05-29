import axios from 'axios';
import { Auth } from 'aws-amplify';

axios.interceptors.request.use(async (config) => {
  const authenToken = await Auth.currentSession();
  config.baseURL = 'http://123.31.12.102/kazan/api';
  console.log("interceptor");
  if (authenToken) {
    config.headers.Authorization = `Bearer ${authenToken.idToken.jwtToken}`;
  }
  config.headers.AccessControlAllowCors = "*";
  config.headers.contentType = 'Application/json';
  return config
});
