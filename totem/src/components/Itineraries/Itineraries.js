import React, { Component } from 'react';
import './Itineraries.css';
import {fire} from '../../fire';

class Itineraries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      linha : {}
    }
    this.linhaRef = fire.database().ref('linha');
  }

  componentWillMount(){
    this.linhaRef.on('value', data=> {
      this.setState({
        linha: data.val()
      })
      console.log(this.getLinhaAzul());
    });
  }
  
  getLinhaAzul() {
    return Object.keys(this.state.linha).map((linha) => {
      if(this.state.linha[linha].linha == "azul");
        return this.state.linha[linha];
    })[0];
  }

  getLinhaAmarela() {
    return Object.keys(this.state.linha).map((linha) => {
      if(this.state.linha[linha].linha == "amarela");
        return this.state.linha[linha];
    })[0];
  }

  render () {
    return (      
      <div className="itineraries">
        {this.getLinhaAzul() != undefined ? <div className="alert alert-primary">
        
        <h3>Locais de embarque</h3>
        <ul>
          {
            this.getLinhaAzul().rotas.map((rota) => {
            return (<li> {rota.local} - {rota.horario}</li>);
            })
          }
        </ul>

        <h3>Destinos</h3>
        <ul>
          {
            this.getLinhaAzul().rotas.map((rota) => {
              return rota.destinos.map((destino) => (<li> {destino.destino}</li>))
            // return (<li> {rota.local} - {rota.horario}</li>);
            })
          }
        </ul>
        </div> : "" }

        {this.getLinhaAmarela() != undefined ? <div className="alert alert-warning">
        
        <h3>Locais de embarque</h3>
        <ul>
          {
            this.getLinhaAmarela().rotas.map((rota) => {
            return (<li> {rota.local} - {rota.horario}</li>);
            })
          }
        </ul>

        <h3>Destinos</h3>
        <ul>
          {
            this.getLinhaAmarela().rotas.map((rota) => {
              return rota.destinos.map((destino) => (<li> {destino.destino}</li>))
            // return (<li> {rota.local} - {rota.horario}</li>);
            })
          }
        </ul>
        </div> : "" }
      </div>
    );
  }
}

export default Itineraries;