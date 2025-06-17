import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService, Pets } from '../../services/pets.service';
import { CuidadoresService, Cuidadores } from '../../services/cuidadores.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pets-detalhes',
  templateUrl: './pets-detalhes.page.html',
  styleUrls: ['./pets-detalhes.page.scss'],
})
export class PetsDetalhesPage implements OnInit {

  pets: Pets = {
    titulo: '',
    nome: '',
    especie: '',
    raca: '',
    idade: undefined,
    observacoes: '',
    cuidadores: []
  };

  cuidadores: Cuidadores[] = [];
  petsId: string | null = null;
  cuidadoresSelecionados: { id: string, nome: string }[] = [];

  constructor(
    private route: ActivatedRoute,
    private petsService: PetsService,
    private cuidadoresService: CuidadoresService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.petsId = this.route.snapshot.queryParamMap.get('petsId');

    // Carregar lista de cuidadores para seleção
    this.cuidadoresService.getCuidadores().subscribe(res => {
      this.cuidadores = res;
    });

    // Se estiver editando, carregar pet existente
    if (this.petsId) {
      this.petsService.getPets().subscribe(res => {
        const petEncontrado = res.find(p => p.id === this.petsId);
        if (petEncontrado) {
          this.pets = petEncontrado;
          this.cuidadoresSelecionados = petEncontrado.cuidadores || [];
        }
      });
    }
  }

  async salvar() {
    this.pets.cuidadores = this.cuidadoresSelecionados;

    if (this.petsId) {
      await this.petsService.atualizarPets(this.petsId, this.pets);
      this.exibirMensagem('Pet atualizado com sucesso!');
    } else {
      await this.petsService.adicionarPets(this.pets);
      this.exibirMensagem('Pet adicionado com sucesso!');
    }

    this.navCtrl.navigateBack('/pets');
  }

  async remover() {
    if (this.petsId) {
      await this.petsService.removerPets(this.petsId);
      this.exibirMensagem('Pet removido com sucesso!');
      this.navCtrl.navigateBack('/pets');
    }
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastCtrl.create({
      message: mensagem,
      duration: 2000
    });
    await toast.present();
  }

  selecionarCuidadores(event: any) {
    const selecionado: string[] = event.detail.value;
    this.cuidadoresSelecionados = this.cuidadores
      .filter(c => c.id && selecionado.includes(c.id))
      .map(c => ({ id: c.id as string, nome: c.nome }));
  }

}
