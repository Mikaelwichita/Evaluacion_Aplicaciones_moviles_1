import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.page.html',
  styleUrls: ['./perfil-user.page.scss'],
})
export class PerfilUserPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMenu() {
    // Redirigir al menú
    this.router.navigate(['/menu']);
  }
}
