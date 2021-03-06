import axios from 'axios';
import { Cache } from 'aws-amplify';
let API = axios.create({
  baseURL: 'http://123.31.12.102/kazan',
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Content-type': 'Application/json',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  }
});
API.defaults.headers.common['Authorization'] = async () => {
  const authenToken = await Cache.getItem('federatedInfo');
  if (authenToken.token) {
    return `Bearer ${authenToken.token}`;
  }
  // config.headers.Authorization = `Bearer eyJraWQiOiJTRU93ZGFoOWNmTGc1MnhRY1FJbTdYc2c5Y2paSkl3TjNrSmE1d2xMa1wvND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1OTYyMWFiZS0zNjE5LTRkNjEtYmQyZC0wY2ZkYzg5NTNhYzUiLCJldmVudF9pZCI6IjFlNTg1ZmJjLTk2YzItMTFlOC05MWQ3LTZkN2EzODg0YWM1YiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1MzMyNjIxMTEsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtd2VzdC0yXzJ0OURPakNNdiIsImV4cCI6MTUzMzQzOTcxMiwiaWF0IjoxNTMzNDM2MTEyLCJqdGkiOiJlZTUwYTVjMy04OTkyLTRlOWQtOGNiZS1iMmJhNTQ5OGMwNmEiLCJjbGllbnRfaWQiOiIyYnJmaHQ3cXJoNThpdDJmbzR2ODNvc2JyaCIsInVzZXJuYW1lIjoibmFtaG9hbmcifQ.Po_MINNBgbSE9-fD903n17uDaYT0QlzQsx11f47rr776bw-g5e1uMYnqjn0mnLDC06ryxaN2JCXoMGbfkvm3cLmTmzIumpkFbtM8-To3D04zEwF3aj_6bsgD1DPjszyx5DsiJqiz6zerQ99SS_xqBDuXDVWoFG27vdA2k7CzVLKAZoDsGVjwJCsUP5OX3AmTeuE1VmZqOMxpzuxuRU3aek_HCPcFiQ8GUBH8nHKcrTqypICBnTM_xXzuu-nS1r3Y2hlXsN4XMbZo3eZkOChKflcZ2Pq3qo88p98ds_PBlcuJZwe_TfUJoawfd4coFRa7KZjdaNyZmbkUGuY9W8Mwlw`;
  // return `Bearer eyJraWQiOiJTRU93ZGFoOWNmTGc1MnhRY1FJbTdYc2c5Y2paSkl3TjNrSmE1d2xMa1wvND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1OTYyMWFiZS0zNjE5LTRkNjEtYmQyZC0wY2ZkYzg5NTNhYzUiLCJldmVudF9pZCI6IjFlNTg1ZmJjLTk2YzItMTFlOC05MWQ3LTZkN2EzODg0YWM1YiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1MzMyNjIxMTEsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtd2VzdC0yXzJ0OURPakNNdiIsImV4cCI6MTUzMzQzOTcxMiwiaWF0IjoxNTMzNDM2MTEyLCJqdGkiOiJlZTUwYTVjMy04OTkyLTRlOWQtOGNiZS1iMmJhNTQ5OGMwNmEiLCJjbGllbnRfaWQiOiIyYnJmaHQ3cXJoNThpdDJmbzR2ODNvc2JyaCIsInVzZXJuYW1lIjoibmFtaG9hbmcifQ.Po_MINNBgbSE9-fD903n17uDaYT0QlzQsx11f47rr776bw-g5e1uMYnqjn0mnLDC06ryxaN2JCXoMGbfkvm3cLmTmzIumpkFbtM8-To3D04zEwF3aj_6bsgD1DPjszyx5DsiJqiz6zerQ99SS_xqBDuXDVWoFG27vdA2k7CzVLKAZoDsGVjwJCsUP5OX3AmTeuE1VmZqOMxpzuxuRU3aek_HCPcFiQ8GUBH8nHKcrTqypICBnTM_xXzuu-nS1r3Y2hlXsN4XMbZo3eZkOChKflcZ2Pq3qo88p98ds_PBlcuJZwe_TfUJoawfd4coFRa7KZjdaNyZmbkUGuY9W8Mwlw`;
};

export default API;
