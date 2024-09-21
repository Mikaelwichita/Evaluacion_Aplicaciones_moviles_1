import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';  

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
    private router: Router  
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
    const storedPassword = localStorage.getItem('password');  // Obtener la contraseña almacenada
    const defaultPassword = 'contraseña123';  // Contraseña por defecto, si es que se olvida la contraseña ya creada
    const validPassword = storedPassword || defaultPassword;  // Usa la guardada o por defecto

    
    if (this.username === 'Migu7_e' && this.password === validPassword) {
      
      this.presentAlert('Éxito', `Inicio de sesión exitoso. ¡Bienvenido, ${this.username}!`);
      
      // Redirigir al menu
      this.router.navigate(['/menu']);
    } else {
      // Alerta de error
      this.presentAlert('Error', 'Credenciales incorrectas. Inténtalo nuevamente.');
    }
  }
}
