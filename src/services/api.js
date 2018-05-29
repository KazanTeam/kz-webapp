import axios from 'axios';
import userService from './UserService'
// export default axios.create({
//   baseURL: 'http://123.31.12.102/kazan/api',
//   headers: {
//     'Access-Control-Allow-Origin': true,
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${userService.getAccessToken()}`
//   }
// })

// import { Auth } from 'aws-amplify';

// axios.interceptors.request.use(async (config) => {
//   const authenToken = await Auth.currentSession();
//   if (authenToken) {
//     config.headers.Authorization = authenToken.idToken.jwtToken;
//   }
//   config.baseURL = 'http://123.31.12.102/kazan/api';
//   config.headers.ContentType = 'application/json';
//   return config
// })
