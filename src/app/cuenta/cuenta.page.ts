import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  user = {
    name: '',
    nickname: '',
    email: '',
    phone: '',
  };

  newPassword: string = '';  // Nueva variable para la nueva contraseña
  confirmPassword: string = '';  // Nueva variable para la confirmación

  editing = false;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  toggleEdit() {
    if (this.editing) {
      console.log('Cambios guardados', this.user);
    }
    this.editing = !this.editing;
  }

  async confirmUnsubscribe() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas darte de baja?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Darse de baja cancelado');
          }
        },
        {
          text: 'Darse de Baja',
          handler: () => {
            console.log('Usuario dado de baja');
          }
        }
      ]
    });

    await alert.present();
  }

  // Nueva función para cambiar la contraseña
  async changePassword() {
    if (this.newPassword === this.confirmPassword) {
      // Guardar la nueva contraseña en localStorage
      localStorage.setItem('password', this.newPassword);
      console.log('Contraseña cambiada exitosamente');

      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Tu contraseña ha sido cambiada exitosamente.',
        buttons: ['OK'],
      });
      await alert.present();

      // Resetear los campos de contraseña
      this.newPassword = '';
      this.confirmPassword = '';
    } else {
      // Mostrar una alerta si las contraseñas no coinciden
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden. Inténtalo nuevamente.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
