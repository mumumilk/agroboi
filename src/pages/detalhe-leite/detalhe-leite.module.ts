import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheLeitePage } from './detalhe-leite';

@NgModule({
  declarations: [
    DetalheLeitePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheLeitePage),
  ],
})
export class DetalheLeitePageModule {}
