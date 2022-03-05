import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidComponent } from '../covid/covid.component';

import { insightsComponent } from '../insights/insights.component';
import { personalComponent } from '../personal/personal.component';
import { skillsComponent } from '../skills/skills.component';

import { layoutComponent } from './main/layout.component';
import { rightSide } from './rightSide/rightSide.component';

const routes: Routes = [
  {
    path: 'quiz',
    component: layoutComponent,
    children: [
      { path: '', redirectTo: 'personal', pathMatch: 'full' },
      { path: 'personal', component: personalComponent },
      { path: 'skills', component: skillsComponent },
      { path: 'covid', component: CovidComponent },
      {
        path: 'insights',
        component: insightsComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [rightSide, layoutComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [rightSide, RouterModule, layoutComponent],
})
export class layoutModule {}
