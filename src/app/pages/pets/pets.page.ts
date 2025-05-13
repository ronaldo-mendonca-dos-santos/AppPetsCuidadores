import { Component, OnInit } from '@angular/core';
import { Pet, PetService } from 'src/app/services/pet.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.page.html',
  standalone: ​​false
})

export class PetsPage implements OnInit {
  pets: Pet[] = [];

  constructor(private petService: PetService, private navCtrl: NavController) {}

  ngOnInit() {
    this.petService.getPets().subscribe(res => {
      this.pets = res;
    });
  }

  novoPet() {
    this.navCtrl.navigateForward('/pet-form');
  }

  editarPet(pet: Pet) {
    this.navCtrl.navigateForward(['/pet-form', { id: pet.id }]);
  }

  excluirPet(id: string) {
    this.petService.deletePet(id);
  }
}
