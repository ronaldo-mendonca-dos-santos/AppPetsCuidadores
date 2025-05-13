import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  irParaPets() {
    this.navCtrl.navigateForward('/pets');
  }

  irParaCuidadores() {
    this.navCtrl.navigateForward('/cuidadores');
  }
}
