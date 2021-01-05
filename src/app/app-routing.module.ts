import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';//lets us use routes
import { HomeComponent } from './home/home.component';//something we can route to
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { CompositionsComponent } from './compositions/compositions.component';
import { VgmCoversComponent } from './vgm-covers/vgm-covers.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },//Default route when navigating to root URL
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'compositions', component: CompositionsComponent },
  { path: 'vgm-covers', component: VgmCoversComponent },
];

@NgModule({//Replaced from default
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]//makes the routes available throughout the app
})
export class AppRoutingModule { }

