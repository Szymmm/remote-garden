import { Component, OnInit } from '@angular/core';
import { MyPathService } from './my-path.service';

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
  elements = [];

  constructor(private myPath: MyPathService) {}

  ngOnInit() {
    this.elements = this.myPath.getElements();
  }
}
