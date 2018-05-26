import axios from 'axios';
import userService from './UserService'
export default axios.create({
  baseURL: 'http://localhost/kazan/api',
  headers: {
    'Access-Control-Allow-Origin': true,
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${userService.getAccessToken()}`
  }
})
