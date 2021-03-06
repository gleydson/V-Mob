import React, { Component } from 'react';
import Chart from 'chart.js';

class ChartBar extends Component {

    componentDidMount() {
        new Chart(document.getElementById("ChartBar"), {
            type: 'bar',
            data: {
                labels: ["Valer", "Rodoviária Oficina", "Pier IV", "Canteiro", "Pelotização"],
                datasets: [{
                    label: 'Número de passageios por paradas (Mês)',
                    data: [1201, 590, 357, 910, 800],
                    backgroundColor: [
                        '#ebac12a2',
                        '#ebac12a2',
                        '#ebac12a2',
                        '#ebac12a2',
                        '#ebac12a2'
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

    render() {
        return (
            <canvas id="ChartBar" width="420" height="300"></canvas>
        );
    }
}

export default ChartBar;