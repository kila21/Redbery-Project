import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { layoutModule } from './layout/layout.module';
import { layoutComponent } from './layout/main/layout.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'quiz', component: layoutComponent },
  // {
  //   path: '',
  //   component: layoutComponent,
  //   children: [
  //     {
  //       path: 'aboutyou',
  //       component: aboutyouComponent,
  //     },
  //   ],
  // },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), layoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
