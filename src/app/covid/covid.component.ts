import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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
export class CovidComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  public formCovid = this.fb.group({
    work: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    contactWhen: new FormControl(''),
    vaccinated: new FormControl('', [Validators.required]),
    lastVaccine: new FormControl(''),
  });

  ngOnInit(): void {}

  submit() {
    console.log(this.formCovid.value);
  }
}
