import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { InsightsService } from './insights.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss'],
})
export class insightsComponent implements DoCheck, OnDestroy, OnInit {
  private localStorageForm: any = 'null';

  constructor(
    public fb: FormBuilder,
    private insightsService: InsightsService
  ) {}
  formInsights = this.fb.group({
    devTalk: new FormControl('', [Validators.required]),
    devTalkSpeak: new FormControl('', [Validators.required]),
    special: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    // localstorage data for insight component fields
    this.localStorageForm = this.insightsService.getLocalStorage()
      ? this.insightsService.getLocalStorage()
      : 'null';
    this.localStorageForm = JSON.parse(this.localStorageForm);

    // store value
    if (localStorage.getItem('formPersonal') !== null) {
      this.formInsights.patchValue({
        devTalk: this.localStorageForm.devTalk,
        devTalkSpeak: this.localStorageForm.devTalkSpeak,
        special: this.localStorageForm.special,
      });
    }
  }

  ngDoCheck(): void {
    if (this.formInsights.get('devTalk')?.value === 'Yes') {
      this.formInsights.get('devTalkSpeak')?.addValidators(Validators.required);
    } else {
      this.formInsights
        .get('devTalkSpeak')
        ?.removeValidators(Validators.required);
    }

    if (this.formInsights.valid) {
      this.insightsService.formInsightsValid = true;
    } else {
      this.insightsService.formInsightsValid = false;
    }
  }

  ngOnDestroy(): void {
    if (this.formInsights.valid) {
      this.insightsService.formInsightsValue = this.formInsights.value;
    }

    localStorage.setItem(
      'formInsights',
      JSON.stringify(this.formInsights.value)
    );
  }
}
