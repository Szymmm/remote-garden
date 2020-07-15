import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'path-list',
  template: `
    <h4>Twoja Grządka</h4>
    <div class="card-deck">
      <path-element
        [element]="element"
        class="card"
        *ngFor="let element of elements"
      ></path-element>
    </div>
  `,
  styles: [
    `
      .card-deck .card {
        margin-right: 0px;
        margin-left: 0px;
      }
    `,
  ],
})
export class PathListComponent implements OnInit {
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

  ngOnInit() {}
}
