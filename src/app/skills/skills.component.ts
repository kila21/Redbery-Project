import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PersonalService } from '../personal/personal.service';

import { SkillsService } from './skills.service';
import { skill, newSkill } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class skillsComponent implements OnInit, DoCheck {
  skills: skill[] = [];
  newSkillsArray: newSkill[] = [];

  form = this.fb.group({
    skill: new FormControl(''),
    yearOfExperience: new FormControl('', [Validators.required]),
  });
  constructor(private skillsService: SkillsService, public fb: FormBuilder) {}

  ngOnInit() {
    this.skillsService.getSkills().subscribe((res: skill[]) => {
      this.skills = res;
    });
  }

  ngDoCheck(): void {
    if (this.newSkillsArray.length > 0) {
      this.skillsService.skillsFormValid = true;
    } else {
      this.skillsService.skillsFormValid = false;
    }
  }

  remove(skill: string) {
    // console.log(skill);
    this.skillsService.removeSkill(skill);
    this.newSkillsArray = this.skillsService.newSkillsArray;
    console.log(this.newSkillsArray);
  }

  onSubmit() {
    // tu carieli stringia html atans tuarada values

    for (let x of this.newSkillsArray) {
      if (this.form.get('skill')?.value === x.skill) {
        alert('this skill is already added');
        return;
      }
    }
    if (this.form.get('yearOfExperience')?.valid) {
      this.newSkillsArray.push({
        skill:
          this.form.get('skill')?.value === ''
            ? 'HTML'
            : this.form.get('skill')?.value,
        // skill: this.selected,
        yearOfExperience: this.form.get('yearOfExperience')?.value,
      });
    }

    this.skillsService.newSkillsArray = this.newSkillsArray;
    this.form.get('yearOfExperience')?.reset();
  }
}
