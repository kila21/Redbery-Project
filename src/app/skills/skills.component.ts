import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { async } from 'rxjs';
import { SkillsService } from './skills.service';
import { skill } from './skills.service';

interface newSkill {
  skill: string;
  yearOfExperience: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class skillsComponent implements OnInit {
  skills: skill[] = [];

  newSkillsArray: newSkill[] = [];

  form = this.fb.group({
    skill: new FormControl(''),
    yearOfExperience: new FormControl(''),
  });
  constructor(private skillsService: SkillsService, public fb: FormBuilder) {}

  ngOnInit() {
    this.skillsService.getSkills().subscribe((res: skill[]) => {
      this.skills = res;
      console.log(res);
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.newSkillsArray.push({
      skill: this.form.get('skill')?.value,
      yearOfExperience: this.form.get('yearOfExperience')?.value,
    });
  }
}
