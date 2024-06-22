import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  title = 'AppChartJS';

  public chartData: ChartConfiguration<any>['data'] = {
    labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    ,
    datasets: [
      {
        data: [10, 500, 3, 4200, 15, 63, 27, 78, 890, 10, 1100, 12, 1300, 4, 15, 16, 17, 8, 19, 20, 2100, 22, 2365, 24, 25, 26],
        label: 'Data',
        backgroundColor: 'orange'
      }
    ],
  };
  public chartOptions: ChartOptions<any> = {
    aspectRatio:4,
    maintainAspectRatio: true,     
    }  
constructor(){

}
}
