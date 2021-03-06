import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CovidService } from './covid.service';

export interface covidFormSubmit {
  work: string;
  contact: string;
  contactWhen?: Date;
  vaccinated: string;
  lastVaccine?: Date;
}

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss'],
})
export class CovidComponent implements DoCheck, OnDestroy, OnInit {
  private localStorageForm: any = 'null';
  constructor(private fb: FormBuilder, private covidService: CovidService) {}
  public formCovid = this.fb.group({
    work: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    contactWhen: new FormControl('', [Validators.required]),
    vaccinated: new FormControl('', [Validators.required]),
    lastVaccine: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    // localstorage data for insight component fields
    this.localStorageForm = this.covidService.getLocalStorage()
      ? this.covidService.getLocalStorage()
      : 'null';
    this.localStorageForm = JSON.parse(this.localStorageForm);

    // store value
    if (localStorage.getItem('formCovid') !== null) {
      this.formCovid.patchValue({
        work: this.localStorageForm.work,
        contact: this.localStorageForm.contact,
        contactWhen: this.localStorageForm.contactWhen,
        vaccinated: this.localStorageForm.vaccinated,
        lastVaccine: this.localStorageForm.lastVaccine,
      });
    }
  }

  ngOnDestroy(): void {
    if (this.formCovid.valid) {
      this.covidService.covidFormValue = this.formCovid.value;
    }

    localStorage.setItem('formCovid', JSON.stringify(this.formCovid.value));
  }

  ngDoCheck(): void {
    //tu chans date inputebi validatorebs amagrebs tuarada ushlis
    if (this.formCovid.get('contact')?.value === 'No') {
      this.formCovid.get('contactWhen')?.reset();
      this.formCovid.get('contactWhen')?.removeValidators(Validators.required);
    } else {
      this.formCovid.get('contactWhen')?.addValidators(Validators.required);
    }

    if (this.formCovid.get('vaccinated')?.value === 'No') {
      this.formCovid.get('lastVaccine')?.reset();
      this.formCovid.get('lastVaccine')?.removeValidators(Validators.required);
    } else {
      this.formCovid.get('lastVaccine')?.addValidators(Validators.required);
    }
    // formis validuroba
    if (this.formCovid.valid) {
      this.covidService.covidFormValid = true;
    } else {
      this.covidService.covidFormValid = false;
    }

    // formis values shenaxva servisshi
    if (this.formCovid.valid && this.covidService.clicked) {
      this.covidService.covidFormValue = this.formCovid.value;
    }
  }
}
