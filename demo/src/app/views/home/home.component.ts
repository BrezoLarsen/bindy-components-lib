import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home-component',
  templateUrl: './home.template.html',
  styleUrls: ['./home.style.scss'],
})
export class HomeComponent implements OnInit {
  public testAnimal = {
    id: '1',
    name: 'Kobi',
    gender: 'Hembra',
    birthDate: '01/07/2021',
    imageUrl: '',
  };

  public urlImage = 'https://orcaapp.org/content/images/animals/';

  constructor() {}

  ngOnInit(): void {}
}
