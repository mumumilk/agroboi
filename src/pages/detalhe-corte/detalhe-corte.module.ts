import { NgModule, ViewChild } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { DetalheCortePage } from './detalhe-corte';


@NgModule({
  declarations: [
    DetalheCortePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheCortePage),
  ],
})
export class DetalheCortePageModule {}
