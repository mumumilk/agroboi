import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeilaoPage } from './leilao';

@NgModule({
  declarations: [
    LeilaoPage,
  ],
  imports: [
    IonicPageModule.forChild(LeilaoPage),
  ],
})
export class LeilaoPageModule {}
