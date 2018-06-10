import React, { Component } from 'react';
import './Dialog.css';
import {fire} from '../../fire';

// x = {
//   coord: {
//     longitude: 10.2,
//     altitude: 22.1
//   },
//   linha: "",
//   funcionario: 12121212
// }

// inspetor, operador, administrativo

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {open : false, checkins: [], funcionario: null, destino: null, prioridade: null};
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCheckIn = this.handleCheckIn.bind(this);

    this.checkinsRef = fire.database().ref('checkins');
  }

  updateFucionario(funcionarioInput, e) {
    this.setState({[funcionarioInput]: e.target.value})
  }

  updateDestino(destinoInput, e) {
    this.setState({[destinoInput]: e.target.value})
  }

  updatePrioridade(prioridadeInput, e) {
    this.setState({[prioridadeInput]: e.target.value})
  }

  handleOpenDialog() {
    this.setState({open : true});

  }

  handleClickCancel() {
    this.setState({open : false});
  }

  handleCheckIn(e) {
    e.preventDefault();

    var checkin = {};
    var self = this;
  
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position)
        checkin['coords'] = {
          latitude: position.coords.latitude,
          logitude: position.coords.longitude
        }
        checkin['linha'] = "teste";        
        checkin['funcionario'] = self.state.funcionario;
        checkin['destino'] = self.state.destino;
        checkin['prioridade'] = self.state.prioridade;
        self.checkinsRef.push({
          item: checkin, 
          completed: false     
        });
      }, 
      function (error) {
          console.log(error);
      }, {
        enableHighAccuracy: true,
        timeout: 60000,
        maximumAge: 0
      }
    );

    this.setState({open : false});
  }

  render() {
    return (
      <div>
        <a href="#" className="button-checkin" onClick={this.handleOpenDialog}>checkIn</a>

        {this.state.open ? <div className="background-dialog">
          <div className="content-dialog">
            <input type="text" name="funcionario" onChange={this.updateFucionario.bind(this,'funcionario')} placeholder={this.props.placeholder}/>
            <select class="form-control" id="exampleFormControlSelect1" onClick={this.updateDestino.bind(this,'destino')}>
              <option onClick={this.updateDestino.bind(this,'destino')} value="destino a">destino a</option>
              <option onClick={this.updateDestino.bind(this,'destino')} value="destino b">destino b</option>
              <option onClick={this.updateDestino.bind(this,'destino')} value="destino a">destino a</option>
              <option onClick={this.updateDestino.bind(this,'destino')} value="destino b">destino b</option>
              <option onClick={this.updateDestino.bind(this,'destino')} value="destino a">destino a</option>
              <option onClick={this.updateDestino.bind(this,'destino')} value="destino b">destino b</option>
            </select>

            {/* <div>
              <span style={{color: "#000"}}>prioridade</span>
              <br/>
              <input type="radio" id="contactChoice1"
              name="contact" value="baixa" onClick={this.updatePrioridade.bind(this,'prioridade')} />
              <label for="contactChoice1" style={{color:"#000"}}>Baixa</label>

              <input type="radio" id="contactChoice2"
              name="contact" value="media" onClick={this.updatePrioridade.bind(this,'prioridade')}/>
              <label for="contactChoice2" style={{color:"#000"}}>Media</label>

              <input type="radio" id="contactChoice3"
              name="contact" value="alta" onClick={this.updatePrioridade.bind(this,'prioridade')}/>
              <label for="contactChoice3" style={{color:"#000"}}>Alta</label>
            </div> */}

            <div className="dialog-buttons">
              <a href="#" className="dialog-cancel" onClick={this.handleClickCancel}>Cancelar</a>
              <a href="#" className="dialog-checkIn" onClick={this.handleCheckIn}>CheckIn</a>
            </div>
          </div>
        </div> : ""}
      </div>
    );
  }
}

export default Dialog;