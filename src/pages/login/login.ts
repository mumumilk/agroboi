import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase-provider';
import { AlertController,ModalController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public usuario = {email:'', senha:''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,  public firebase: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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
