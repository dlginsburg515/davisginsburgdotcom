import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [

    {
        path: '',
        component: HomePageComponent,
        title: 'Home',
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Projects',
      },
];
