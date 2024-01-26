import { AfterViewInit, Component } from '@angular/core';
import { Chart, ChartOptions  } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent  implements AfterViewInit {
  ngAfterViewInit() {
    const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yValues = [55, 49, 44, 24, 15];
    const barColors = ["red", "green", "blue", "orange", "brown"];

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { // You might need to adjust the x-axis scale configuration
            beginAtZero: true
          },
          y: { // You might need to adjust the y-axis scale configuration
            beginAtZero: true
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "World Wine Production 2018"
        }
      } as ChartOptions<'bar'> // Add ChartOptions type to make TypeScript happy
    });
  }
  }



