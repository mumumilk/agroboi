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
public testCheckboxResultRaca;
public testCheckboxResultSangue;
public testCheckboxResultCategoria;
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
        this.testCheckboxResultRaca = data;
      }
    });
    alert.present();
  }

  showCheckboxCategoria() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Qual a categoria?');

    alert.addInput({
      type: 'checkbox',
      label: 'PO',
      value: 'PO',
    });

    alert.addInput({
      type: 'checkbox',
      label: 'POI',
      value: 'POI'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'PC',
      value: 'PC'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Confirmar',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResultCategoria = data;
      }
    });
    alert.present();
  }

  showCheckboxSangue() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Qual a categoria?');

    alert.addInput({
      type: 'checkbox',
      label: '1/4',
      value: '1/4',
    });

    alert.addInput({
      type: 'checkbox',
      label: '3/4',
      value: '3/4'
    });

    alert.addInput({
      type: 'checkbox',
      label: '4/8',
      value: '4/8'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Confirmar',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResultSangue = data;
      }
    });
    alert.present();
  }
}
