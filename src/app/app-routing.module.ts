import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { JobPagesComponent } from './pages/job-pages/job-pages.component';
import { NewsPagesComponent } from './pages/news-pages/news-pages.component';
import { ProjectsPagesComponent } from './pages/projects-pages/projects-pages.component';
import { ExpertisePagesComponent } from './pages/expertise-pages/expertise-pages.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  {
    path: 'about',
    component: AboutPagesComponent,
  },
  {
    path: 'job',
    component: JobPagesComponent,
  },
  {
    path: 'news',
    component: NewsPagesComponent,
  },
  {
    path: 'projects',
    component: ProjectsPagesComponent,
  },
  {
    path: 'expertise',
    component: ExpertisePagesComponent,
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
