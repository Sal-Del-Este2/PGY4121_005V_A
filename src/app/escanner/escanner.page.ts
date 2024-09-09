import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-escanner',
  templateUrl: './escanner.page.html',
  styleUrls: ['./escanner.page.scss'],
})
export class EscannerPage {
  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}
// alesta con mensaje
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Escaner de QR',
      subHeader: 'Esto escaneara',
      message: 'debe acercar un QR',
      buttons: ['escanear'],
    });

    await alert.present();
  }
//retorno a la pagina anterior
  navigateHome() {
    this.router.navigate(['/asistencia']);
  }
}