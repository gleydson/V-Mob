import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Itineraries from './components/Itineraries/Itineraries';
import Dialog from './components/Dialog/Dialog';

class App extends Component {
  

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <div className="time">
          <h1>{new Date().getHours() < 10 ? 0 : ""}{new Date().getHours()} : {new Date().getMinutes()}</h1>
        </div>

        <div className="content">
          <Itineraries/>
        </div>

        <div className="footer">
          <h3>Toque com seu cartão de identificação para iniciar o checkin  </h3>
          <Dialog placeholder="Digite seu identificador"/>
        </div>
      </div>
    );
  }
}

export default App;
