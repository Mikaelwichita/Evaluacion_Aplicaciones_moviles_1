import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.page.html',
  styleUrls: ['./perfil-user.page.scss'],
})
export class PerfilUserPage implements OnInit {
  user = {
    name: 'Miguel Leyton',
    email: 'migu.leytonr@duocuc.cl',
    phone: '+569 1234 5678',
    trips: 69,
    mostFrequentDestination: 'San Joaquin',
    lastTripDate: '2024-08-20',
    profilePhoto: 'assets/img/user-profile.jpg'
  };

  constructor() { }

  ngOnInit() {
  }
}
