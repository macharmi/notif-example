import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EtaNofif from './components/etaNotif'
import StateNofif from './components/stateNotif'
import Notifications from './components/notifications'

class App extends Component {
  componentDidMount(){
    this.notifEvent = 1
  }
  changeProp = () => {
    this.getNotifDispatcher().dispatch('add', {logo: 1, header:"kkk"})
  }

  getDispatcher = (dispatcher) => {
    this.notifDispatcher = dispatcher;
  }

  getNotifDispatcher = () =>
  {return this.notifDispatcher}

  render() {
    return (
      <div className="App">
      <Notifications onLoad={this.getDispatcher}></Notifications>
      <div><button onClick={this.changeProp}>Change</button></div>
      </div>
    );
  }
}

export default App;
