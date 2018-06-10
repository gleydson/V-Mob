import React, { Component } from 'react';
import Chart from 'chart.js';
import { fire } from '../fire';

class ChartLine extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeers: {},
            inspetor: 0,
            operador: 0,
            administrativo: 0
        }
    }
    
    drawChart() {
        new Chart(document.getElementById("ChartLine"), {
            type: 'line',
            data: {
                labels: ["Inspetor", "Operador", "Administrativo"],
                datasets: [{
                    label: 'Demanda de passageios por setor (Mês)',
                    data: [this.state.inspetor, 16, 11],
                    backgroundColor: [
                        '#19bc9da2',
                    ]
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }
    
    componentWillMount() {
        this.employeeRef = fire.database().ref('funcionarios');
        this.employeeRef.on("value", data => {
            var employeers = data.val();
            this.setState({
                employeers: employeers,
                inspetor: Object.keys(employeers).reduce((qtd, func) => (employeers[func].cargo === 'Inspetor' ? (qtd + 1) : qtd), 0),
                operador: Object.keys(employeers).reduce((qtd, func) => (employeers[func].cargo === 'Operador' ? (qtd + 1) : qtd), 0),
                administrativo: Object.keys(employeers).reduce((qtd, func) => (employeers[func].cargo === 'Administrativo' ? (qtd + 1) : qtd), 0)
            });
            this.drawChart()
            console.log(this.state.inspetor)
        });
        
    }
    componentDidMount() {
        this.drawChart();
    }

    render() {
        return (
            <canvas id="ChartLine" width="420" height="300"></canvas>
        );
    }
}

export default ChartLine;