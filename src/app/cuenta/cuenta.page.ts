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
}
