import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuarioLogueado: string | null = '';

  constructor() {}

  ngOnInit() {
    // Obtener el correo del usuario desde localStorage
    this.usuarioLogueado = localStorage.getItem('usuarioLogueado');
  }
}
