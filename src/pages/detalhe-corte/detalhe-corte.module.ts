import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
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
