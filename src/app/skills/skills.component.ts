import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PersonalService } from '../personal/personal.service';

import { SkillsService } from './skills.service';
import { skill, newSkill } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class skillsComponent implements OnInit, DoCheck, OnDestroy {
  skills: skill[] = [];
  newSkillsArray: newSkill[] = [];

  localStorageForm: any = 'null';

  form = this.fb.group({
    skill: new FormControl('HTML'),
    yearOfExperience: new FormControl('', [Validators.required]),
  });
  constructor(private skillsService: SkillsService, public fb: FormBuilder) {}

  ngOnInit() {
    this.skillsService.getSkills().subscribe((res: skill[]) => {
      this.skills = res;
    });

    this.localStorageForm = this.skillsService.getLocalStorage()
      ? this.skillsService.getLocalStorage()
      : 'null';
    this.localStorageForm = JSON.parse(this.localStorageForm);

    if (localStorage.getItem('skillsForm') !== null) {
      // console.log(this.localStorageForm.first);
      console.log(this.localStorageForm);
      this.newSkillsArray = this.localStorageForm;
    }
  }

  ngDoCheck(): void {
    if (this.newSkillsArray.length > 0) {
      this.skillsService.skillsFormValid = true;
    } else {
      this.skillsService.skillsFormValid = false;
    }
  }

  ngOnDestroy(): void {
    console.log('skills Form....');
    console.log(this.skillsService.newSkillsArray);

    localStorage.setItem('skillsForm', JSON.stringify(this.newSkillsArray));
  }

  remove(skill: string) {
    // console.log(skill);
    this.skillsService.removeSkill(skill);
    this.newSkillsArray = this.skillsService.newSkillsArray;
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
      this.skillsService.newSkillsArray.push({
        skill:
          this.form.get('skill')?.value === ''
            ? 'HTML'
            : this.form.get('skill')?.value,
        // skill: this.selected,
        yearOfExperience: this.form.get('yearOfExperience')?.value,
      });
    }

    // this.skillsService.newSkillsArray = this.newSkillsArray;
    this.newSkillsArray = this.skillsService.newSkillsArray;
    this.form.get('yearOfExperience')?.reset();
  }
}
