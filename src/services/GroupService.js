import axios from 'axios';
import { Auth } from 'aws-amplify';
import {listGroup} from "../resources/Data";

axios.interceptors.request.use(async (config) => {
  const authenToken = await Auth.currentSession();
  config.baseURL = 'http://123.31.12.102/kazan/api';
  config.headers = {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Content-type': 'Application/json',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  };
  if (authenToken) {
    config.headers.Authorization = `Bearer ${authenToken.idToken.jwtToken}`;
  }

  return config
});

class GroupService {
  createGroup = async group => {
    try {
      let response = await axios.post('/groups', group);
      return response;
    } catch (error) {
      throw new Error(error.response.data);
    }

    // const response = await axios.post('/groups', group).then(resp => {
    //   return resp
    // }).catch(error => {
    //   throw Error(error.response)
    // })
  };

  list = async () => {
    //
    // await axios.get('/users/groups').then(resp => {
    //   return resp;
    // }).catch(error => {
    //   return Promise.reject(error.response);
    // })
    return await listGroup
  };

  findById = id => {
    return listGroup.filter(group => group.id === parseInt(id))[0];
  };

  editGroup = async group => {
    await axios.put("/groups/" + group.id, group)
      .then(resp => {
        return resp
    }).catch(error => {
      throw new Error(error.response)
    })
  };

  deleteGroup = async id => {
    return await Promise.resolve({message: '', status: 204})
  }
}

export default new GroupService();
