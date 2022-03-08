import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InsightsService {
  clicked: boolean = false;

  formInsightsValid: boolean = false;
  formInsightsValue = [];

  getLocalStorage(): string | null {
    return localStorage.getItem('formInsights');
  }
}
