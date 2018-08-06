import axios from 'axios';
import {listGroup} from "../resources/Data";
import API from './api'

class GroupService {
  createGroup = async group => {
    try {
      return await API.post('/group/create', group)
    } catch (error) {
      throw new Error(error.response.data);
    }
  };

  list = async () => {
    return await listGroup
  };

  findById = id => {
    return listGroup.filter(group => group.id === parseInt(id))[0]
  };

  editGroup = async group => {
    try {
     return await axios.put("/groups/" + group.id, group)
    }catch (error) {
      throw new Error(error.response)
    }
  };

  deleteGroup = async id => {
    return await Promise.resolve({message: '', status: 204})
  }
}

export default new GroupService();
