import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  //page clicked
  clicked: boolean = false;
  covidFormValid: boolean = false;

  covidFormValue = [];
}
