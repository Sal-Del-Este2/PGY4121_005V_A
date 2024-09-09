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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Escaner de QR',
      subHeader: 'Estoescanea',
      message: 'muestre un QR',
      buttons: ['Action'],
    });

    await alert.present();
  }

  navigateHome() {
    this.router.navigate(['/asistencia']);
  }
}