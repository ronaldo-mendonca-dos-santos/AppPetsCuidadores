import { Component, OnInit } from '@angular/core';
import { PetsService, Pets } from '../../services/pets.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.page.html',
  styleUrls: ['./pets.page.scss'],
})
export class PetsPage implements OnInit {

  pets: Pets[] = [];

  constructor(private petsService: PetsService, private navCtrl: NavController) {}

  ngOnInit() {
    this.petsService.getPets().subscribe(res => {
      this.pets = res;
    });
  }

  irParaDetalhes(pets: Pets) {
    this.navCtrl.navigateForward(`/pets-detalhes`, { queryParams: { petsId: pets.id } });
  }

  getCuidadoresFormatados(pets: Pets): string {
    return pets.cuidadores && pets.cuidadores.length > 0
      ? pets.cuidadores.map(a => a.nome).join(', ')
      : 'Nenhum cuidador';
  }

}
