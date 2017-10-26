import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CompraPage } from '../pages/compra/compra';
import { VendaPage } from '../pages/venda/venda';
import { LeilaoPage } from '../pages/leilao/leilao';
import { TrocaPage } from '../pages/troca/troca';
import { HomePage } from '../pages/home/home';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import{ IonicStorageModule } from '@ionic/storage' ;

import { OpcaoPage } from '../pages/opcao/opcao';
import { OpcaoLeilaoPage } from '../pages/opcao-leilao/opcao-leilao';
import { DetalheRacaPage } from '../pages/detalhe-raca/detalhe-raca';
import { DetalheLeitePage } from '../pages/detalhe-leite/detalhe-leite';
import { DetalheCortePage } from '../pages/detalhe-corte/detalhe-corte';
import { FirebaseProvider } from '../providers/firebase-provider';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { WeatherProvider } from '../providers/weather';
import { Facebook} from '@ionic-native/facebook';
import { Http } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    CompraPage,
    HomePage,
    OpcaoPage,
    OpcaoLeilaoPage,
    VendaPage,
    LeilaoPage,
    TrocaPage,
    DetalhePage,
    DetalheRacaPage,
    DetalheLeitePage,
    DetalheCortePage,
    LoginPage,
    ConfiguracoesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FlexLayoutModule,
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CompraPage,
    HomePage,
    OpcaoPage,
    OpcaoLeilaoPage,
    VendaPage,
    LeilaoPage,
    TrocaPage,
    DetalhePage,
    DetalheRacaPage,
    DetalheLeitePage,
    DetalheCortePage,
    LoginPage,
    ConfiguracoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    Camera,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider
  ]
})
export class AppModule {}
