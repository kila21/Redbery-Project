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

export interface skillsSubmitArray {
  id: number;
  experience: number;
}
@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  //clicked next page or not

  clicked: Boolean = false;
  skillsFormValid: boolean = false;

  newSkillsArray: newSkill[] = [];

  arrayForSubmit: skillsSubmitArray[] = [];

  constructor(private http: HttpClient) {}

  url: string = 'https://bootcamp-2022.devtest.ge/api/skills';

  //get skills from api
  getSkills(): Observable<any> {
    return this.http.get(this.url);
    // return this.skills;
  }

  //remove user skill
  removeSkill(name: string) {
    this.newSkillsArray.forEach((s, i) => {
      if (s.skill === name) {
        this.newSkillsArray.splice(i, 1);
      }
    });
  }

  getLocalStorage(): string | null {
    return localStorage.getItem('skillsForm');
  }

  //
  getSkillsNumber() {
    for (let x of this.newSkillsArray) {
      let count = 1;
      this.arrayForSubmit.push({ id: count, experience: +x.yearOfExperience });
    }
  }
}
