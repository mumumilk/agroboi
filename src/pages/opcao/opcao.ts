import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the OpcaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opcao',
  templateUrl: 'opcao.html',
})
export class OpcaoPage {
public testCheckboxResult;
public testCheckboxOpen;
public structure: any = { lower: 1000, upper: 10000 };
public structureIdade: any = { lower: 18, upper: 30 };
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcaoPage');
  }

  showCheckboxRaca() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Qual a raça?');

    alert.addInput({
      type: 'checkbox',
      label: 'Braham',
      value: 'Braham',
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Camgam',
      value: 'Camgam'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Nelore',
      value: 'Nelore'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Tabapuã',
      value: 'Tabapuã'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Indus Brasil',
      value: 'Indus Brasil'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Angus',
      value: 'Angus'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Charolês',
      value: 'Charolês'
    });


    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Confirmar',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }

}
