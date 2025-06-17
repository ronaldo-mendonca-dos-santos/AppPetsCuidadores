import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuidadoresService, Cuidadores } from '../../services/cuidadores.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cuidadores-detalhes',
  templateUrl: './cuidadores-detalhes.page.html',
  styleUrls: ['./cuidadores-detalhes.page.scss'],
})
export class CuidadoresDetalhesPage implements OnInit {

  cuidadores: Cuidadores = {
    nome: '',
    telefone: '',
    experiencia: undefined,
    especialidades: ''
  };

  cuidadoresId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private cuidadoresService: CuidadoresService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.cuidadoresId = this.route.snapshot.queryParamMap.get('cuidadorId');
    if (this.cuidadoresId) {
      this.cuidadoresService.getCuidadores().subscribe(res => {
        const cuidadorEncontrado = res.find(a => a.id === this.cuidadoresId);
        if (cuidadorEncontrado) {
          this.cuidadores = cuidadorEncontrado;
        }
      });
    }
  }


  async salvar() {
    // Validação nome
    if (!this.cuidadores.nome || this.cuidadores.nome.trim().length === 0) {
      this.exibirMensagem('O nome do cuidador é obrigatório.');
      return;
    }

    // Validação telefone (opcional)
    if (this.cuidadores.telefone && !this.validarTelefone(this.cuidadores.telefone)) {
      this.exibirMensagem('Informe um telefone válido.');
      return;
    }

    // Validação experiência (obrigatório e >= 0)
    if (
      this.cuidadores.experiencia === null ||
      this.cuidadores.experiencia === undefined ||
      this.cuidadores.experiencia < 0
    ) {
      this.exibirMensagem('Informe uma experiência válida (anos, >= 0).');
      return;
    }

    // Validação especialidades
    if (!this.cuidadores.especialidades || this.cuidadores.especialidades.trim().length === 0) {
      this.exibirMensagem('Informe pelo menos uma especialidade.');
      return;
    }

    // Salvar ou atualizar
    if (this.cuidadoresId) {
      await this.cuidadoresService.atualizarCuidadores(this.cuidadoresId, this.cuidadores);
      this.exibirMensagem('Cuidador atualizado com sucesso!');
    } else {
      await this.cuidadoresService.adicionarCuidadores(this.cuidadores);
      this.exibirMensagem('Cuidador adicionado com sucesso!');
    }

    this.navCtrl.navigateBack('/cuidadores');
  }

  async remover() {
    if (this.cuidadoresId) {
      await this.cuidadoresService.removerCuidadores(this.cuidadoresId);
      this.exibirMensagem('Cuidador removido com sucesso!');
      this.navCtrl.navigateBack('/cuidadores');
    }
  }

  validarTelefone(telefone: string): boolean {
    const tel = telefone.replace(/\D/g, '');
    return tel.length === 10 || tel.length === 11;
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastCtrl.create({
      message: mensagem,
      duration: 2000
    });
    await toast.present();
  }

}
