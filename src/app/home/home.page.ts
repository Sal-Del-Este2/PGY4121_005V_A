import { Component, OnInit } from '@angular/core';
import { AnimationController, PopoverController } from '@ionic/angular'; // Importa PopoverController
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuarioLogueado: string | null = '';
  popoverOpen = false; // Controla el estado del popover
  popoverEvent: Event | undefined; // Guarda el evento del popover

  constructor(
    private router: Router, // Inyecta Router
    private animationCtrl: AnimationController,
    private popoverCtrl: PopoverController
  ) {} // Inyecta PopoverController
    

  ngOnInit() {
    this.usuarioLogueado = localStorage.getItem('usuarioLogueado');
    this.animateIcon();
  }

  async presentPopover(event: Event) {
    this.popoverEvent = event;
    this.popoverOpen = true;
    const popover = await this.popoverCtrl.create({
      component: null, // No se necesita un componente
      event: this.popoverEvent,
      translucent: true,
      // Define el contenido del popover directamente aquí
      cssClass: 'popover-custom'
    });
    await popover.present();
    
    popover.onDidDismiss().then(() => {
      this.popoverOpen = false;
    });
  }

  handleMenuAction(action: string) {
    console.log(`Acción seleccionada: ${action}`);
    this.popoverOpen = false;
    // Aquí puedes manejar las acciones del menú, como navegar a diferentes páginas.
    if (action === 'logout') {
      // Limpia la información del usuario logueado
      localStorage.removeItem('usuarioLogueado');
      
      // Redirige a la página de login
      this.router.navigate(['/login']);
    } else {
      // Maneja otras acciones del menú aquí
      console.log(`Acción ${action} no implementada.`);
    }
  }

  animateIcon() {
    const iconElement = document.querySelector('.bottom-icon');

    if (iconElement) {
      const animation = this.animationCtrl.create()
        .addElement(iconElement)
        .duration(1000)
        .fromTo('transform', 'scale(0)', 'scale(1)');

      animation.play();
    }
  }
}
