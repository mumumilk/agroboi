import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from "chart.js";
/**
 * Generated class for the DetalheRacaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-raca',
  templateUrl: 'detalhe-raca.html',
})
export class DetalheRacaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  @ViewChild('barCanvas') barCanvas;
  
    barChart: any;
  
  
    ionViewDidLoad() {
  
      this.barChart = new Chart(this.barCanvas.nativeElement, {
  
        type: 'horizontalBar',
        data: {
          labels: ["DIPP", "D3P", "MP210", "DP210", "DPE365", "DPE450", "DAOL", "MGTe"],
          datasets: [{
            label: 'Índice Bioeconômico',
            data: [18, 45, 60, 80, 12, 9, 40, 5, 4, 10, 12],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
              
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          }
        }
  
      });
    }

}
