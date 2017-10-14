import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhePage } from './detalhe';

@NgModule({
  declarations: [
    DetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhePage),
  ],
})
export class DetalhePageModule {}
