import { Component, OnInit } from '@angular/core';
import { Cuidador, CuidadorService } from 'src/app/services/cuidador.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cuidadores',
  templateUrl: './cuidadores.page.html',
  standalone: ​​false
})
export class CuidadoresPage implements OnInit {
  cuidadores: Cuidador[] = [];

  constructor(private cuidadorService: CuidadorService, private navCtrl: NavController) {}

  ngOnInit() {
    this.cuidadorService.getCuidadores().subscribe(res => {
      this.cuidadores = res;
    });
  }

  novoCuidador() {
    this.navCtrl.navigateForward('/cuidador-form');
  }

  editarCuidador(cuidador: Cuidador) {
    this.navCtrl.navigateForward(['/cuidador-form', { id: cuidador.id }]);
  }

  excluirCuidador(id: string) {
    this.cuidadorService.deleteCuidador(id);
  }
}
