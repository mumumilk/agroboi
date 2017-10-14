import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController,ModalController } from 'ionic-angular';
import { CompraPage } from '../compra/compra';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario = {email:'', senha:''};

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  entrar(){
    if(this.usuario.email == 'mumumilk@mumumilk.com.br' && this.usuario.senha =='123456'){
      this.navCtrl.push(CompraPage);
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
