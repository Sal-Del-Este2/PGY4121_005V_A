import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.page.html',
  styleUrls: ['./progreso.page.scss'],
})
export class ProgresoPage implements OnInit {
  public asistencias: number = 0;
  public maxAsistencias = 10;
  public claseSeleccionada: string | null = ''; // Nueva propiedad para almacenar la clase seleccionada
  public pokemonImage: string | null = ''; // Declarar pokemonImage como propiedad de la clase

  constructor(private router: Router) {}

  ngOnInit() {
    // Recupera la clase seleccionada
    this.claseSeleccionada = localStorage.getItem('claseSeleccionada'); // Almacena la clase seleccionada

    // Recupera la clase seleccionada
    const claseSeleccionada = localStorage.getItem('claseSeleccionada');
    console.log('Clase seleccionada en progreso:', claseSeleccionada);
  
    // Recupera las asistencias de la clase específica
    if (claseSeleccionada) {
      const storedAsistencias = localStorage.getItem(`asistencias_${claseSeleccionada}`);
      this.asistencias = storedAsistencias ? parseInt(storedAsistencias) : 0;
      console.log(`Asistencias para ${claseSeleccionada}:`, this.asistencias);
    }
  }

  // Método para establecer y guardar la clase seleccionada y navegar a escáner
  establecerClaseSeleccionada(clase: string) {
    this.claseSeleccionada = clase;
    localStorage.setItem('claseSeleccionada', clase);
    this.router.navigate(['/escanner']);
  }

  navigateHome() {
    this.router.navigate(['/inicio']);
  }

  ionViewWillEnter() {
    this.pokemonImage = localStorage.getItem('pokemonImage'); // Obtiene la imagen
  }
}
