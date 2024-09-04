import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  sedes: string[] = ['Sede San Joaquin', 'Sede Antonio Varas', 'Casa de Miguel Leyton Rios'];
  selectedSede: string = '';
  estimatedTime: string = '0 minutos'; 

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
    this.router.navigate(['/perfil-user']);
  }
  goToConfig() {
    this.router.navigate(['/configuracion']);
  }
  goToHistory() {
    this.router.navigate(['/historial']);
  }
  goToAccount() {
    this.router.navigate(['/cuenta']);
  }
  goToPaymentMethod() {
    this.router.navigate(['/metodo-pago']);
  }

  updateEstimatedTime() {
    if (this.selectedSede === 'Sede San Joaquin') {
      this.estimatedTime = '15 minutos';
    } else if (this.selectedSede === 'Sede Antonio Varas') {
      this.estimatedTime = '20 minutos';
    } else if (this.selectedSede === 'Casa de Miguel Leyton Rios') {
      this.estimatedTime = '69 minutos';
    } else {
      this.estimatedTime = '0 minutos';
    }
  }
}