import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Cuidador, CuidadorService } from 'src/app/services/cuidador.service';

@Component({
  selector: 'app-cuidador-form',
  templateUrl: './cuidador-form.page.html',
  standalone: ​​false
})
export class CuidadorFormPage implements OnInit {
  cuidador: Cuidador = {
    nome: '',
    telefone: '',
    experiencia: 0,
    especialidades: ''
  };
  id: string | null = null;

  constructor(
    private cuidadorService: CuidadorService,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.cuidadorService.getCuidadores().subscribe(cuidadores => {
        const found = cuidadores.find(c => c.id === this.id);
        if (found) this.cuidador = found;
      });
    }
  }

  salvarCuidador() {
    if (this.id) {
      this.cuidadorService.updateCuidador(this.id, this.cuidador).then(() => this.navCtrl.back());
    } else {
      this.cuidadorService.addCuidador(this.cuidador).then(() => this.navCtrl.back());
    }
  }
}
