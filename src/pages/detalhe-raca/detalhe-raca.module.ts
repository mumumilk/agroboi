import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheRacaPage } from './detalhe-raca';

@NgModule({
  declarations: [
    DetalheRacaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheRacaPage),
  ],
})
export class DetalheRacaPageModule {}
