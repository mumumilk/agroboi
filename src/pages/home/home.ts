import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController,ModalController } from 'ionic-angular';
import { CompraPage } from '../compra/compra';
import { TabsPage } from '../tabs/tabs';
import { FirebaseProvider } from '../../providers/firebase-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario = {email:'henrique@gmail.com', senha:'12345'};

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,  public firebase: FirebaseProvider) {

  }

  entrar(){
  if(this.usuario.email !='' && this.usuario.senha !='' && this.usuario.senha.length >= 6){
    this.firebase.auth().signInWithEmailAndPassword(this.usuario.email, this.usuario.senha)
    .catch((error) => {console.log(error.message)});
    this.navCtrl.push('TabsPage');
  }else{
    this.alertaLoginFalha();
  }

}

  sair(){

  this.firebase.auth().signOut().then(() => this.navCtrl.setRoot(HomePage));
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
