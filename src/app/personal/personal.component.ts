import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PersonalService } from './personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class personalComponent implements OnInit, OnDestroy, DoCheck {
  //regex for phone
  phoneRegex = new RegExp('^[+][9]{2}[5]{3}[0-9]{7}$');

  formPersonal = this.fb.group({
    first: new FormControl('', [Validators.required, Validators.minLength(2)]),
    last: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.pattern(this.phoneRegex)]),
  });

  constructor(
    public fb: FormBuilder,
    private personalService: PersonalService
  ) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    if (this.formPersonal.valid) {
      this.personalService.personalFormValid = true;
    }
  }

  ngOnDestroy(): void {
    if (this.personalService.clicked && this.formPersonal.valid) {
      this.personalService.personalForm = this.formPersonal.value;
    }
  }

  onSubmit() {
    if (this.formPersonal.valid) {
      console.log(this.formPersonal.value);
    }
  }
}
