import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CovidService } from '../covid/covid.service';
import { InsightsService } from '../insights/insights.service';
import { PersonalService } from '../personal/personal.service';
import { SkillsService } from '../skills/skills.service';

//interface for post method
export interface submitInterface {
  token: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  skills: [
    {
      id: number;
      experience: number;
    }
  ];
  work_preference: string;
  had_covid: boolean;
  had_covid_at: Date;
  vaccinated: boolean;
  vaccinated_at: Date;
  will_organize_devtalk: boolean;
  devtalk_topic: string;
  something_special: string;
}

@Injectable({
  providedIn: 'root',
})
export class SubmitService {
  //token
  private token: string = '89e6ca43-ad4b-477c-9e49-9ae6b473b03c';
  private url: string = 'https://bootcamp-2022.devtest.ge/api/applications?';

  //formsFor Submit
  personalForm = {};
  skillsForm = {};
  covidForm = {};
  insightForm = {};

  constructor(
    private http: HttpClient,
    private personal: PersonalService,
    private skills: SkillsService,
    private covid: CovidService,
    private insights: InsightsService
  ) {}

  postData(data: submitInterface) {
    this.getPersonalForm();
    this.getCovidForm();
    this.getInsightsForm();
    this.getSkillsForm();
    console.log(this.covidForm);
    console.log(this.personalForm);
    console.log(this.insightForm);
    console.log(this.skillsForm);
    // this.http.post(this.url + this.token, data);
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
