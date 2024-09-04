import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.page.html',
  styleUrls: ['./metodo-pago.page.scss'],
})
export class MetodoPagoPage implements OnInit {
  paymentMethods: string[] = [];
  currentPaymentMethod: string = '';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async addPaymentMethod() {
    const alert = await this.alertController.create({
      header: 'Agregar Método de Pago',
      inputs: [
        {
          name: 'cardNumber',
          type: 'text',
          placeholder: 'Número de tarjeta'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Agregar',
          handler: (data) => {
            this.paymentMethods.push(data.cardNumber);
            if (this.paymentMethods.length === 1) {
              this.currentPaymentMethod = data.cardNumber;
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async deletePaymentMethod(paymentMethod: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas eliminar este método de pago?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.paymentMethods = this.paymentMethods.filter(pm => pm !== paymentMethod);
            if (this.currentPaymentMethod === paymentMethod) {
              this.currentPaymentMethod = this.paymentMethods.length > 0 ? this.paymentMethods[0] : '';
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
