import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubmitService } from './submit.service';

@Component({
  selector: 'submit',
  styleUrls: ['./submit.component.scss'],
  templateUrl: './submit.component.html',
})
export class SubmitComponent {
  constructor(private router: Router, private submit: SubmitService) {}

  onClickSpan() {
    this.router.navigate(['./quiz/insights']);
  }

  onSubmitForms() {
    this.submit.getPersonalForm();
  }
}
