
import { Component } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage {

  constructor(private router: Router) {}

  // Ir al Home (Login)
  goToLogin() {
    this.router.navigate(['/home']);
  }

  // Ir a Registro
  goToSignup() {
    this.router.navigate(['/registro']);
  }
}
