import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

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
    { correo: 'es@duoc.cl', password: 'es123' },
    { correo: 'pr@duoc.cl', password: 'pr123' }
  ];

  constructor(
    private router: Router,
    private animationCtrl: AnimationController
  ) {}

  // Función para animar el botón
  vibrateButton() {
    const buttonElement = document.querySelector('.forgot-password-button');
  
    if (buttonElement) {
      const animation = this.animationCtrl.create()
        .addElement(buttonElement) // selecciona el botón para animar
        .duration(2000) // Duración de la animación: 2 segundos
        .keyframes([
          { offset: 0, transform: 'translateX(0)' },
          { offset: 0.1, transform: 'translateX(-5px)' },
          { offset: 0.2, transform: 'translateX(5px)' },
          { offset: 0.3, transform: 'translateX(-5px)' },
          { offset: 0.4, transform: 'translateX(5px)' },
          { offset: 0.5, transform: 'translateX(-5px)' },
          { offset: 0.6, transform: 'translateX(5px)' },
          { offset: 0.7, transform: 'translateX(-5px)' },
          { offset: 0.8, transform: 'translateX(5px)' },
          { offset: 0.9, transform: 'translateX(-5px)' },
          { offset: 1, transform: 'translateX(0)' }
        ]);
  
      animation.play(); // Inicia la animación
    } else {
      console.error('No se encontró el botón con la clase .login-button');
    }
  }
  // Función de inicio de sesión
  login() {
    console.log('Correo ingresado:', this.user.correo); // verificar el correo
    console.log('Contraseña ingresada:', this.user.password); // verificar la contraseña

    // Verifica si las credenciales coinciden con alguno de los usuarios en la lista de usuarios validos
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

      this.vibrateButton(); // Llama a la función de vibración si falla la autenticación
    }
  } 
}