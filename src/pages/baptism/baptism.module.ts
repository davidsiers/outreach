import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BaptismPage } from './baptism';

@NgModule({
  declarations: [
    BaptismPage,
  ],
  imports: [
    IonicPageModule.forChild(BaptismPage),
  ],
})
export class BaptismPageModule {}
