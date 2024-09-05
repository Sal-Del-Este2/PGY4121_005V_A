import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  user = {
    correo: '',
    password: ''
  };

  errorMessage = ''; // Variable para almacenar el mensaje de error

  // Lista de usuarios válidos
  usuariosValidos = [
    { correo: 'estudiante@duoc.cl', password: 'estudiante123' },
    { correo: 'profesor@duoc.cl', password: 'profesor123' }
  ];

  constructor(private router: Router) {}

  login() {
    console.log('Correo ingresado:', this.user.correo); // Log para verificar el correo
    console.log('Contraseña ingresada:', this.user.password); // Log para verificar la contraseña

    // Verifica si las credenciales coinciden con alguno de los usuarios en la lista
    const usuarioValido = this.usuariosValidos.some(
      usuario => usuario.correo === this.user.correo && usuario.password === this.user.password
    );

    if (usuarioValido) {
      // Autenticación exitosa
      console.log('Autenticación exitosa');
      localStorage.setItem('usuarioLogueado', this.user.correo);
      this.router.navigate(['/home']);
    } else {
      // Autenticación fallida
      this.errorMessage = 'Usuario o contraseña incorrecta';
      console.log('Error en autenticación');
    }
  }
}
