import { Component, OnInit } from '@angular/core';

import { CuidadoresService, Cuidadores } from '../../services/cuidadores.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cuidadores',
  templateUrl: './cuidadores.page.html',
  styleUrls: ['./cuidadores.page.scss'],
})
export class CuidadoresPage implements OnInit {
  cuidadores: Cuidadores[] = [];  // Array para armazenar a lista de Cuidadores

  constructor(
    private navCtrl: NavController,  // Serviço de navegação
    private cuidadoresService: CuidadoresService  // Serviço para lidar com os Cuidadores
  ) {}

  ngOnInit() {
    this.buscarCuidadores();  // Carregar a lista de Cuidadores ao iniciar a página
  }

  // Método para buscar todos os Cuidadores
  buscarCuidadores() {
    this.cuidadoresService.getCuidadores().subscribe(res => {
      this.cuidadores = res;
    });
  }

  // Método para ir para a tela de detalhes do Cuidadores
  irParaDetalhes(cuidadorId?: string) {
    this.navCtrl.navigateForward(`/cuidadores-detalhes`, { queryParams: { cuidadorId } });
  }

  // Método para ir para a tela de adicionar um novo Cuidadores
  irParaAdicionarCuidadores() {
    this.navCtrl.navigateForward(`/cuidadores-detalhes`, { queryParams: { novo: true } });
  }

  // Método para remover um Cuidadores
  removerCuidadores(id?: string) {
    if (!id) {
      console.error('ID do cuidador é indefinido e não pode ser removido.');
      return;
    }

    this.cuidadoresService.removerCuidadores(id).then(() => {
      this.buscarCuidadores();  // Atualiza a lista de Cuidadores após a exclusão
    });
  }


}
