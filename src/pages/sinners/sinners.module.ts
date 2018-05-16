import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SinnersPage } from './sinners';

@NgModule({
  declarations: [
    SinnersPage,
  ],
  imports: [
    IonicPageModule.forChild(SinnersPage),
  ],
})
export class SinnersPageModule {}
