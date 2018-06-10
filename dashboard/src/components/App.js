import React, { Component } from 'react';
import './App.css';
import ChartBar from './ChartBar';
import ChartLine from './ChartLine';

export default class App extends Component {

  render() {
    return (  
      <div className="App">
        <header className="App-header">
          <h2>Dashboard</h2>
          <button className="relatorio">Gerar Relatório</button>
        </header>
        <div className="cards-layout">
          <div className="cards">
            <p>Bloqueios de Estradas (Mês)</p>
            <span>8</span>
          </div>
          <div className="cards">
            <p>Movimentação de objetos (Mês)</p>
            <span>57</span>
          </div>
          <div className="cards">
            <p>Movimentação de pessoas (Mês)</p>
            <span>107</span>
          </div>
        </div>
        <div className="charts-layout">
          <div className="charts">
            <ChartBar/>
          </div>
          <div className="charts">
            <ChartLine/>
          </div>
        </div>
      </div>
    );
  }
};