import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'path-element',
  template: `
    <img class="card-img-top img-fluid" [src]="element.image" />
    <div class="card-img-overlay">
      <h5 class="card-title">{{ element.name }}</h5>
    </div>
  `,
  styles: [
    `
      :host() {
        flex: 0 0;
        overflow: hidden;
      }
      :host():hover .card-img-overlay {
        top: 100%;
      }
      .card-img-top {
        padding: 0px;
        margin: 0px;
      }
      .card-img-overlay {
        background: rgba(0, 0, 0, 0.8);
        top: 70%;
        color: #45970e;
        font-size: 1em !important;
        transition: 0.2s top ease-out;
      }
    `,
  ],
})
export class PathElementComponent implements OnInit {
  @Input()
  element;

  constructor() {}

  ngOnInit(): void {}
}
