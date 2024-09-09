import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage {
  constructor(private router: Router) {}

  navigateEscanner() {
    this.router.navigate(['/escanner']);
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }

}
// escanner