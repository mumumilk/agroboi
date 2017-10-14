import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController,ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario = {email:'mumumilk@mumumilk.com.br', senha:'123456'};

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }



  entrar(){
    if(this.usuario.email != '' && this.usuario.senha !=''){

    }else{
      this.alertaLoginFalha();
    }
  }



  alertaLoginFalha(){
    let alert = this.alertCtrl.create({
      title: 'Ops!',
      subTitle: 'Ocorreu um erro no momento do seu login. Confirme se os campos de usuário e senha estão corretos!',
      buttons: ['OK']
    });
    alert.present();
  }

  abrirCadastro(){
    this.navCtrl.push('Cadastro');
  }


}
