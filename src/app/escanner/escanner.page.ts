import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escanner',
  templateUrl: './escanner.page.html',
  styleUrls: ['./escanner.page.scss'],
})
export class EscannerPage {
  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/home']);
  }
}