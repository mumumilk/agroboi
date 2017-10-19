import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ActionSheetController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase-provider';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the Cadastro page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class Cadastro {
  public options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  public imagem = 'assets/img/henrique.jpg';
  public usuario = {nome: '', email:'', senha:'', telefone: '', celular: '', documento: ''};
  public user = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl : ActionSheetController, private view: ViewController, public firebase: FirebaseProvider,  public camera : Camera, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cadastro');
  }

  fechar() {
  this.navCtrl.push(HomePage);
  }

  pressEvent(e){
    this.presentActionSheet();
  }

  presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Foto',
     buttons: [
       {
         text: 'Camera',
         role: 'Camera',
         handler: () => {
           console.log('Camera clicked');
         }
       },{
         text: 'Galeria',
         role: 'Galeria',
         handler: () => {
           console.log('Galeria clicked');
         }
       },{
         text: 'Cancelar',
         role: 'Cancelar',
         handler: () => {
           console.log('Cancelar clicked');
         }
       }
     ]
   });
   actionSheet.present();
 }
 capturar(){
     this.camera.getPicture(this.options).then(
       (imageData) => this.imagem = 'data:image/jpeg;base64,' + imageData,
       (err) => console.log(err)
     );
   }

   salvar(){
     if (this.usuario.email!='' && this.usuario.senha!='' && this.usuario.senha.length > 5){
       this.firebase.auth().createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha).then((parameter) => {
           console.log(parameter.uid);
           this.user = parameter.uid;
           this.Alerta1();
           this.salvarDB();
           this.fechar();
       })
       .catch((error) => {console.log(error.message)});

     }else{
       this.showAlert();
     }
   }

   Alerta1() {
  let alert = this.alertCtrl.create({
    title: 'Sucesso!',
    subTitle: 'Usuário cadastrado, agora é só aproveitar!',
    buttons: ['OK']
  });
  alert.present();
}

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alerta!',
      subTitle: 'Por favor, digite um usuario e senha validos!',
      buttons: ['OK']
    });
    alert.present();
}

  salvarDB(){
    let caminho = 'usuarios/' + this.user;
    let objeto ={
      nome : this.usuario.nome,
      email: this.usuario.email,
      senha : this.usuario.senha,
      telefone : this.usuario.telefone,
      celular : this.usuario.celular,
      documento : this.usuario.documento,
      imagem: this.imagem
    }
    this.firebase.database().ref(caminho).set(objeto);
  }

}
