import API from './api';

class GroupService {
  createGroup = async group => {
    const {name, groupNotifyBot, groupAlertBot} = group;
    await API.post('/groups', {
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
    await API.get('/users/groups').then(resp => {
      console.log(resp)
    }).catch(error => {
      console.log(error)
    })
  }
}

export default new GroupService();
