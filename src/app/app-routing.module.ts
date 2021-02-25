import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';//lets us use routes
import { HomeComponent } from './pages/home/home.component';//something we can route to
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CompositionsComponent } from './pages/compositions/compositions.component';
import { VgmCoversComponent } from './pages/vgm-covers/vgm-covers.component';
import { MarkdownResolver } from './resolvers/markdown-resolver';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },//Default route when navigating to root URL
  { path: 'home', component: HomeComponent, resolve: { markdownData: MarkdownResolver }, data: { fileName: 'home.md'} },
  { path: 'about', component: AboutComponent, resolve: { markdownData: MarkdownResolver }, data: { fileName: 'about.md'} },
  { path: 'projects', component: ProjectsComponent, resolve: { markdownData: MarkdownResolver }, data: { fileName: 'projects.md'} },
  { path: 'compositions', component: CompositionsComponent, resolve: { markdownData: MarkdownResolver }, data: { fileName: 'compositions.md'} },
  { path: 'vgm-covers', component: VgmCoversComponent },
];

@NgModule({//Replaced from default
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],//makes the routes available throughout the app
  providers: [MarkdownResolver]
})
export class AppRoutingModule { }

