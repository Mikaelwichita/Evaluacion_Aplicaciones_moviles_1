import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';  // Importa el servicio Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = '';
  password: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router  // Inyecta el servicio Router
  ) {}

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  login() {
    // Validar las credenciales ingresadas
    if (this.username === 'Migu7_e' && this.password === 'contraseña123') {
      // Alerta de éxito
      this.presentAlert('Éxito', `Inicio de sesión exitoso. ¡Bienvenido, ${this.username}!`);
      
      // Redirigir al menú después de un inicio de sesión exitoso
      this.router.navigate(['/menu']);
    } else {
      // Alerta de error
      this.presentAlert('Error', 'Credenciales incorrectas. Inténtalo nuevamente.');
    }
  }
}
