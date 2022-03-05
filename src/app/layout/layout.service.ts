import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class layoutService {
  loadedPage: number = 1;
  constructor() {}
}
