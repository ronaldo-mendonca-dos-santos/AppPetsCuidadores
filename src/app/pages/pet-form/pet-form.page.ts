import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Pet, PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.page.html',
  standalone: ​​false
})
export class PetFormPage implements OnInit {
  pet: Pet = {
    nome: '',
    especie: '',
    raca: '',
    idade: 0,
    observacoes: ''
  };
  id: string | null = null;

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.petService.getPets().subscribe(pets => {
        const found = pets.find(p => p.id === this.id);
        if (found) this.pet = found;
      });
    }
  }

  salvarPet() {
    if (this.id) {
      this.petService.updatePet(this.id, this.pet).then(() => this.navCtrl.back());
    } else {
      this.petService.addPet(this.pet).then(() => this.navCtrl.back());
    }
  }
}
