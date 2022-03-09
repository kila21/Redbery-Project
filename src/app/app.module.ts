import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { layoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { skillsComponent } from './skills/skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CovidComponent } from './covid/covid.component';
import { personalComponent } from './personal/personal.component';
import { insightsComponent } from './insights/insights.component';
import { SubmitComponent } from './submit/submit.component';
import { ThanksComponent } from './thanks/thanks.component';
import { ApplicationsComponent } from './applications/applications.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    skillsComponent,
    CovidComponent,
    personalComponent,
    insightsComponent,
    SubmitComponent,
    ThanksComponent,
    ApplicationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    layoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
