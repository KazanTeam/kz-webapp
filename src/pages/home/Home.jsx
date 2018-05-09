import React from 'react';
import axios from 'axios';

export default class Home extends React.PureComponent {  

  render() {
    axios.get('http://localhost:8090/api/');
    return (
      <span>Home Page</span>
    );
  }
}