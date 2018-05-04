import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalvationPage } from '../salvation/salvation';
import { BaptismPage } from '../baptism/baptism';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  salvationLink: any;
  baptismLink: any;

  constructor(public navCtrl: NavController) {
    this.salvationLink = SalvationPage;
    this.baptismLink = BaptismPage;

  }

}