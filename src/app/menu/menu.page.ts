import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { } 

  ngOnInit() {
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Seguro quieres salir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // El usuario canceló la acción
            console.log('Salida cancelada');
          }
        },
        {
          text: 'Salir',
          handler: () => {
            // Redirigir al usuario a la página de inicio
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }

  goToProfile() {
    // Redirigir al usuario a la página del perfil
    this.router.navigate(['/perfil-user']);
  }
}
