import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';//lets us use routes
import { HomeComponent } from './pages/home/home.component';//something we can route to
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CompositionsComponent } from './pages/compositions/compositions.component';
import { VgmCoversComponent } from './pages/vgm-covers/vgm-covers.component';

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

