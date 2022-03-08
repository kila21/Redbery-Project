import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  //personal form valid
  personalFormValid: boolean = false;
  //if its true than store personal formvalue  in personalform array.
  // it means next page was clicked
  clicked: boolean = false;
  //personal page form value
  personalForm = [];

  constructor() {}

  getLocalStorage(): string | null {
    return localStorage.getItem('formPersonal');
  }
}
