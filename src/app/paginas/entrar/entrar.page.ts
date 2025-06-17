import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
  standalone:false,
})
export class EntrarPage {

  email = '';
  senha = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  async login() {
    try {
      await this.authService.login(this.email, this.senha);
      this.router.navigateByUrl('/home');
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.presentToast('Erro ao logar: ' + error.message, 'danger');
      } else {
        this.presentToast('Erro desconhecido ao logar.', 'danger');
      }
    }
  }


  async loginGoogle() {
    try {
      await this.authService.loginWithGoogle();
      this.router.navigateByUrl('/home');
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.presentToast('Erro ao logar com Google: ' + error.message, 'danger');
      } else {
        this.presentToast('Erro desconhecido ao logar com Google.', 'danger');
      }
    }
  }


  async presentToast (mensagem: string, cor: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      color: cor,
      duration: 2000
    });
    toast.present();
  }


}





