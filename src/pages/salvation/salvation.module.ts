import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalvationPage } from './salvation';

@NgModule({
  declarations: [
    SalvationPage,
  ],
  imports: [
    IonicPageModule.forChild(SalvationPage),
  ],
})
export class SalvationPageModule {}
