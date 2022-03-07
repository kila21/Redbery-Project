import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CovidService } from 'src/app/covid/covid.service';
import { PersonalService } from 'src/app/personal/personal.service';
import { SkillsService } from 'src/app/skills/skills.service';
import { layoutService } from '../layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class layoutComponent {
  constructor(
    private router: Router,
    private layoutService: layoutService,
    private personalService: PersonalService,
    private skillsService: SkillsService,
    private covidService: CovidService
  ) {}

  page(page: number, div: HTMLDivElement) {
    switch (page) {
      case 2:
        if (this.personalService.personalFormValid) {
          this.layoutService.loadedPage = page;
          this.personalService.clicked = true;
          div.classList.add('active');
          div.classList.remove('light');
          this.router.navigate(['quiz/skills']);
        }
        break;
      case 3:
        if (this.skillsService.skillsFormValid) {
          this.skillsService.clicked = true;
          this.layoutService.loadedPage = page;
          div.classList.add('active');
          div.classList.remove('light');
          this.router.navigate(['quiz/covid']);
        }
        break;
      case 4:
        if (this.covidService.covidFormValid) {
          this.covidService.clicked = true;
          this.layoutService.loadedPage = page;
          div.classList.add('active');
          div.classList.remove('light');
          this.router.navigate(['./quiz/insights']);
        }
        break;
      case 5:
        div.classList.add('active');
        div.classList.remove('light');
        break;
    }
  }
}
