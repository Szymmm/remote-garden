import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyPathService {
  elements = [
    {
      name: 'sałata',
      image: 'http://placehold.it/150x150/008000',
    },
    {
      name: 'pomidor',
      image: 'http://placehold.it/150x150/FF0000',
    },
    {
      name: 'fasolka',
      image: 'http://placehold.it/150x150/FFFFFF',
    },
    {
      name: 'pusto',
      image: 'http://placehold.it/150x150',
    },
    {
      name: 'pusto',
      image: 'http://placehold.it/150x150',
    },
  ];
  constructor() {}

  getElements() {
    return this.elements;
  }
}
