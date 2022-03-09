import { Component, DoCheck, OnInit } from '@angular/core';
import { submitInterface } from '../submit/submit.service';
import { ApplicationsService } from './applications.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  data = [];
  clicked = {};
  // clicked = false;
  constructor(public appsService: ApplicationsService) {}

  ngOnInit(): void {
    this.appsService.getMethod().subscribe((res: submitInterface[]) => {
      let count = 1;
      this.data = res;
      for (let x of this.data) {
        this.clicked[count] = false;
        count++;
      }
    });
  }

  onClick(div: HTMLDivElement, index: number) {
    // for (let x = 0; x <= this.data.length; x++) {
    //   if (x === index) {
    //     // div.style.height = '70%'
    //     // div.children.item(2).removeAttribute('display');
    //     // div.children.item(2). ('display', 'block');
    //   }
    // }

    this.clicked[index] = !this.clicked[index];
    console.log(this.data[1].work_preference);
  }
}
