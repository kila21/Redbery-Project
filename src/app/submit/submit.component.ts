import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'submit',
  styleUrls: ['./submit.component.scss'],
  templateUrl: './submit.component.html',
})
export class SubmitComponent {
  constructor(private router: Router) {}

  onClickSpan() {
    this.router.navigate(['./quiz/insights']);
  }
}
