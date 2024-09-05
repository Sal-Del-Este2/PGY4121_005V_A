import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-construccion',
  templateUrl: './construccion.page.html',
  styleUrls: ['./construccion.page.scss'],
})
export class ConstruccionPage {
  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/home']);
  }
}

