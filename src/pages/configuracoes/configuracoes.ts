import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
  weather:any;

  public local : {
    cidade:string,
    estado:string
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public  weatherProvider : WeatherProvider, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }

  ionViewWillEnter(){
      this.local = {
        cidade: 'Londrina',
        estado: 'PR'
      }
      this.weatherProvider.getWeather(this.local.cidade, this.local.estado)
        .subscribe(weather => {
          this.weather = weather.current_observation;
          console.log(weather);
      });
  }

}
