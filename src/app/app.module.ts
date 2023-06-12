import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { AboutComponent } from './components/about/about.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { NewsPagesComponent } from './pages/news-pages/news-pages.component';
import { JobPagesComponent } from './pages/job-pages/job-pages.component';
import { ProjectsPagesComponent } from './pages/projects-pages/projects-pages.component';
import { ExpertisePagesComponent } from './pages/expertise-pages/expertise-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutHeaderComponent,
    AboutComponent,
    MainPageComponent,
    AboutPagesComponent,
    NewsPagesComponent,
    JobPagesComponent,
    ProjectsPagesComponent,
    ExpertisePagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
