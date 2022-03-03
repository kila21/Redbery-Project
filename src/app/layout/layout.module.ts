import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { aboutyouComponent } from '../aboutYou/aboutyou.component';
import { personalComponent } from '../personal/personal.component';

import { layoutComponent } from './main/layout.component';

import { rightSide } from './rightSide/rightSide.component';

const routes: Routes = [
  {
    path: '',
    component: layoutComponent,
    children: [
      { path: '', redirectTo: 'aboutyou', pathMatch: 'full' },
      {
        path: 'aboutyou',
        component: aboutyouComponent,
      },
      { path: 'personal', component: personalComponent },
    ],
  },
];
@NgModule({
  declarations: [rightSide, layoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [rightSide, RouterModule, layoutComponent],
})
export class layoutModule {}
