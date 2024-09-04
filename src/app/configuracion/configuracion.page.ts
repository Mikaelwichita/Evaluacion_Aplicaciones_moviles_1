import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
  darkMode: boolean = false;
  notificationsEnabled: boolean = true;
  fontSize: string = 'medium';

  constructor(private platform: Platform) { }

  ngOnInit() {
    // Cargar configuraciones guardadas si existen
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedFontSize = localStorage.getItem('fontSize');
    const savedNotifications = localStorage.getItem('notificationsEnabled');

    this.darkMode = savedDarkMode === 'true';
    this.fontSize = savedFontSize || 'medium';
    this.notificationsEnabled = savedNotifications !== 'false'; // Por defecto está activado
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark', this.darkMode);
    localStorage.setItem('darkMode', this.darkMode.toString());
  }

  toggleNotifications() {
    localStorage.setItem('notificationsEnabled', this.notificationsEnabled.toString());
  }

  changeFontSize(event: any) {
    const root = document.documentElement;
    switch (event.detail.value) {
      case 'small':
        root.style.setProperty('--ion-font-size', '12px');
        break;
      case 'medium':
        root.style.setProperty('--ion-font-size', '16px');
        break;
      case 'large':
        root.style.setProperty('--ion-font-size', '20px');
        break;
    }
    localStorage.setItem('fontSize', event.detail.value);
  }
}
