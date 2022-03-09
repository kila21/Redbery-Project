import { JsonpClientBackend } from '@angular/common/http';
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
  private localStorageForm: any = '';

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

  ngOnInit(): void {
    this.localStorageForm = this.personalService.getLocalStorage()
      ? this.personalService.getLocalStorage()
      : 'null';
    this.localStorageForm = JSON.parse(this.localStorageForm);

    if (localStorage.getItem('formPersonal') !== null) {
      // console.log(this.localStorageForm.first);
      this.formPersonal.patchValue({
        first: this.localStorageForm.first,
        last: this.localStorageForm.last,
        email: this.localStorageForm.email,
        phone: this.localStorageForm.phone,
      });

      this.personalService.personalForm = this.formPersonal.value;
    }
  }

  ngDoCheck(): void {
    if (this.formPersonal.valid) {
      this.personalService.personalFormValid = true;
    } else {
      this.personalService.personalFormValid = false;
    }
  }

  ngOnDestroy(): void {
    if (this.formPersonal.valid) {
      this.personalService.personalForm = this.formPersonal.value;
    }

    console.log('Personal Form....');
    console.log(this.personalService.personalForm);

    localStorage.setItem(
      'formPersonal',
      JSON.stringify(this.formPersonal.value)
    );
  }

  onSubmit() {
    if (this.formPersonal.valid) {
      console.log(this.formPersonal.value);
    }
  }
}
