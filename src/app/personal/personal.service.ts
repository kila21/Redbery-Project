import { Injectable } from '@angular/core';

export interface personalInterface {
  first: string;
  last: string;
  email: string;
  phone?: string;
}

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
  personalForm: personalInterface;

  constructor() {}

  getLocalStorage(): string | null {
    return localStorage.getItem('formPersonal');
  }
}
