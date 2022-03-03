import { Component } from '@angular/core';

@Component({
  selector: 'layout-rightSide',
  templateUrl: './rightSide.component.html',
  styleUrls: ['./rightSide.component.scss'],
})
export class rightSide {
  loadedPage: number = 1;
  constructor() {}
}
