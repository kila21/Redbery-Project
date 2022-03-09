import { Injectable } from '@angular/core';

export interface insightFormInterface {
  devTalk: string;
  devTalkSpeak: string;
  special: string;
}
@Injectable({
  providedIn: 'root',
})
export class InsightsService {
  clicked: boolean = false;

  formInsightsValid: boolean = false;
  formInsightsValue: insightFormInterface;

  getLocalStorage(): string | null {
    return localStorage.getItem('formInsights');
  }
}
