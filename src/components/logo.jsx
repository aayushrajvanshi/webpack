import React from 'react';
import qantasLogo from '../images/qantas-logo.png';

export default class Logo extends React.Component {
  render(){
    return <img className="logo" src={qantasLogo} />;
  }
}
