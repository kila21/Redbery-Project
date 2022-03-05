import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { SkillsService } from './skills.service';
import { skill, newSkill } from './skills.service';

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
    });
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

    this.newSkillsArray.push({
      skill:
        this.form.get('skill')?.value === ''
          ? 'HTML'
          : this.form.get('skill')?.value,
      // skill: this.selected,
      yearOfExperience: this.form.get('yearOfExperience')?.value,
    });

    this.skillsService.newSkillsArray = this.newSkillsArray;
    this.form.get('yearOfExperience')?.reset();
  }
}
