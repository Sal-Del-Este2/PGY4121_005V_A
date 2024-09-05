import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recordar-cuenta',
  templateUrl: './recordar-cuenta.page.html',
  styleUrls: ['./recordar-cuenta.page.scss'],
})
export class RecordarCuentaPage {

  constructor(private router: Router) {}

  enviar() {
    // Aquí puedes agregar la lógica para enviar el formulario o realizar alguna acción

    // Redirigir al login después de enviar
    this.router.navigate(['/login']);
  }
}
