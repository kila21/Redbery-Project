import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
      {
        path: 'insights',
        component: insightsComponent,
      },
      { path: 'personal', component: personalComponent },
      { path: 'skills', component: skillsComponent },
    ],
  },
];
@NgModule({
  declarations: [rightSide, layoutComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [rightSide, RouterModule, layoutComponent],
})
export class layoutModule {}
