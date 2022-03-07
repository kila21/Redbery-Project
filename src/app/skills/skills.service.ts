import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface skill {
  id: number;
  title: string;
}

// user new skills interface
export interface newSkill {
  skill: string;
  yearOfExperience: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  //clicked next page or not
  clicked: Boolean = false;
  skillsFormValid: boolean = false;
  skillsForm = [];

  private skills: skill[] | undefined;

  newSkillsArray: newSkill[] = [];

  constructor(private http: HttpClient) {}

  url: string = 'https://bootcamp-2022.devtest.ge/api/skills';

  getSkills(): Observable<any> {
    return this.http.get(this.url);
    // return this.skills;
  }

  removeSkill(name: string) {
    this.newSkillsArray.forEach((s, i) => {
      if (s.skill === name) {
        this.newSkillsArray.splice(i, 1);
      }
    });
  }
}
