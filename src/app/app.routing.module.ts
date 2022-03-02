import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { aboutyouComponent } from './aboutYou/aboutyou.component';
import { HomepageComponent } from './homepage/homepage.component';
import { layoutComponent } from './layout/main/layout.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  {
    path: 'main',
    component: layoutComponent,
    children: [
      {
        path: 'aboutyou',
        component: aboutyouComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
