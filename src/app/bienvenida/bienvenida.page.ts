// bienvenida.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa el Router

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage {

  constructor(private router: Router) {}

  // Navega al Home (Login)
  goToLogin() {
    this.router.navigate(['/home']);
  }

  // Navega al Registro
  goToSignup() {
    this.router.navigate(['/registro']);
  }
}
