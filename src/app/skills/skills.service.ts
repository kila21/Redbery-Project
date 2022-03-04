import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface skill {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skills: skill[] | undefined;
  public newSkillForUser = [];

  constructor(private http: HttpClient) {}

  url: string = 'https://bootcamp-2022.devtest.ge/api/skills';

  getSkills(): Observable<any> {
    return this.http.get(this.url);
    // return this.skills;
  }
}
