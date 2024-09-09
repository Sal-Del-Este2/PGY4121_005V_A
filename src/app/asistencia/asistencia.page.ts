import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    this.animateButtons();
  }

  animateButtons() {
    const buttons = document.querySelectorAll('.action-button ion-button');
    buttons.forEach((button, index) => {
      (button as HTMLElement).style.setProperty('--animation-delay', `${index * 0.5}s`);
    });
  }

  navigateEscanner() {
    this.router.navigate(['/escanner'])
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }
}
