import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CovidFormInterface, CovidService } from '../covid/covid.service';
import {
  insightFormInterface,
  InsightsService,
} from '../insights/insights.service';
import { PersonalService } from '../personal/personal.service';
import { SkillsService } from '../skills/skills.service';

import { skillsSubmitArray } from '../skills/skills.service';
import { personalInterface } from '../personal/personal.service';
//interface for post method
export interface submitInterface {
  token: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  skills: skillsSubmitArray[];
  work_preference: string;
  had_covid: boolean;
  had_covid_at: string;
  vaccinated: boolean;
  vaccinated_at: string;
  will_organize_devtalk: boolean;
  devtalk_topic: string;
  something_special: string;
}

@Injectable({
  providedIn: 'root',
})
export class SubmitService {
  //token
  private token: string = 'token=89e6ca43-ad4b-477c-9e49-9ae6b473b03c';
  private url: string = 'https://bootcamp-2022.devtest.ge/api/application?';

  //formsFor Submit
  personalForm: personalInterface;
  skillsForm: skillsSubmitArray[];
  covidForm: CovidFormInterface;
  insightForm: insightFormInterface;

  constructor(
    private http: HttpClient,
    private personal: PersonalService,
    private skills: SkillsService,
    private covid: CovidService,
    private insights: InsightsService
  ) {}

  postData() {
    this.getPersonalForm();
    this.getCovidForm();
    this.getInsightsForm();
    this.getSkillsForm();
    const data: submitInterface = {
      token: this.token,
      first_name: this.personalForm.first,
      last_name: this.personalForm.last,
      email: this.personalForm.email,
      phone: this.personalForm.phone ? this.personalForm.phone : 'null',
      skills: this.skillsForm,
      work_preference: this.covidForm.work,
      had_covid: this.covidForm.contact === 'No' ? false : true,
      had_covid_at: this.covidForm.contactWhen
        ? this.covidForm.contactWhen
        : undefined,
      vaccinated: this.covidForm.vaccinated === 'No' ? false : true,
      vaccinated_at: this.covidForm.lastVaccine
        ? this.covidForm.lastVaccine
        : undefined,
      will_organize_devtalk: this.insightForm.devTalk === 'No' ? false : true,
      devtalk_topic: this.insightForm.devTalkSpeak
        ? this.insightForm.devTalkSpeak
        : 'NAN',
      something_special: this.insightForm.special,
    };
    console.log(data);

    const header = new HttpHeaders({
      'content-type': 'application/json',
      Accept: 'application/json',
    });

    let options = { headers: header };
    this.http.post(this.url + this.token, data, options).subscribe((d) => {
      console.log(d);
    });
  }

  getPersonalForm() {
    this.personalForm = this.personal.personalForm;
  }

  getCovidForm() {
    this.covidForm = this.covid.covidFormValue;
  }

  getSkillsForm() {
    this.skillsForm = this.skills.arrayForSubmit;
  }

  getInsightsForm() {
    this.insightForm = this.insights.formInsightsValue;
  }
}
