import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { submitInterface } from '../submit/submit.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  constructor(private http: HttpClient) {}
  private url =
    'https://bootcamp-2022.devtest.ge/api/applications?token=89e6ca43-ad4b-477c-9e49-9ae6b473b03c#F1';

  getMethod() {
    return this.http.get(this.url);
  }
}
