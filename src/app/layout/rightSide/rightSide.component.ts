import { Component, DoCheck, OnInit } from '@angular/core';
import { layoutService } from '../layout.service';

@Component({
  selector: 'layout-rightSide',
  templateUrl: './rightSide.component.html',
  styleUrls: ['./rightSide.component.scss'],
})
export class rightSide implements OnInit, DoCheck {
  loadedPage: number = 1;
  constructor(private layoutService: layoutService) {
    // console.log(this.loadedPage);
  }

  ngOnInit(): void {
    this.loadedPage = this.layoutService.loadedPage;
  }

  //for change content of rightside layout
  ngDoCheck(): void {
    this.loadedPage = this.layoutService.loadedPage;
  }
}
