import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase-provider';
import { AlertController,ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { Http } from '@angular/http';



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
  public userF = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,  public firebase: FirebaseProvider, private fb: Facebook, public http: Http) {
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

  loginFacebook(){
    let permisoes = ['public_profile', 'email'];
    this.fb.login(permisoes).then( response =>{
      this.userF['token'] = response.authResponse.accessToken;
      this.userF['id'] = response.authResponse.userID;
      this.userF['status'] = 'connected';
    });
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
