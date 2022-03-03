import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { layoutModule } from './layout/layout.module';

import { aboutyouComponent } from './aboutYou/aboutyou.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { layoutComponent } from './layout/main/layout.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, aboutyouComponent],
  imports: [BrowserModule, AppRoutingModule, layoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
