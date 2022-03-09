import { Injectable } from '@angular/core';

export interface CovidFormInterface {
  work: string;
  contact: string;
  contactWhen?: string;
  vaccinated: string;
  lastVaccine?: string;
}
@Injectable({
  providedIn: 'root',
})
export class CovidService {
  //page clicked
  clicked: boolean = false;
  covidFormValid: boolean = false;

  covidFormValue: CovidFormInterface;

  getLocalStorage(): string | null {
    return localStorage.getItem('formCovid');
  }
}
