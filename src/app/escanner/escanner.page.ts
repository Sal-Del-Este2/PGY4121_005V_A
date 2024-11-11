import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-escanner',
  templateUrl: './escanner.page.html',
  styleUrls: ['./escanner.page.scss'],
})
export class EscannerPage {
  public pokemonImage: string | null = ''; // Declarar pokemonImage como propiedad de la clase
  public claseSeleccionada: string | null = ''; // Agregar claseSeleccionada como propiedad
  private maxAsistencias = 10; // Máximo de asistencias permitidas
  public asistencias: number = 0; // Contador de asistencias


  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}
// alesta con mensaje
  async presentAlert() {
    if (this.asistencias < this.maxAsistencias) {
      this.asistencias++;

      // Almacenar asistencias de la clase seleccionada en localStorage
      if (this.claseSeleccionada) {
      localStorage.setItem(`asistencias_${this.claseSeleccionada}`, this.asistencias.toString());
      }
  
      const alert = await this.alertController.create({
        header: 'Escaner de QR',
        subHeader: `Clase: ${this.claseSeleccionada}`, // Mostrar la clase seleccionada en la alerta
        message: `Asistencia registrada: ${this.asistencias} de ${this.maxAsistencias}`,
        buttons: ['Escanear'],
      });

      await alert.present();
    
    // Redirigir a la página de progreso después de cada escaneo
    this.router.navigate(['/progreso']);
  } else {
    // Si ya alcanzó el máximo de asistencias, redirigir directamente a la página de progreso
    this.router.navigate(['/progreso']);
  }
}

ionViewWillEnter() {
  this.pokemonImage = localStorage.getItem('pokemonImage'); // Obtiene la imagen
  this.claseSeleccionada = localStorage.getItem('claseSeleccionada'); // Recupera la clase seleccionada
  
  // Recuperar las asistencias específicas de la clase seleccionada desde localStorage
  const storedAsistencias = localStorage.getItem(`asistencias_${this.claseSeleccionada}`);
  this.asistencias = storedAsistencias ? parseInt(storedAsistencias) : 0;
}
navigateHome() {
  this.router.navigate(['/asistencia']);
}


}