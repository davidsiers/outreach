import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LovesPage } from './loves';

@NgModule({
  declarations: [
    LovesPage,
  ],
  imports: [
    IonicPageModule.forChild(LovesPage),
  ],
})
export class LovesPageModule {}
