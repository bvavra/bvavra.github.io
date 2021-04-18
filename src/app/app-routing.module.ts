import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';//lets us use routes
import { ContentTemplateComponent } from './page-components/content-template/content-template.component'
import { HomeComponent } from './pages/home/home.component';//something we can route to
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CompositionsComponent } from './pages/compositions/compositions.component';
import { VgmCoversComponent } from './pages/vgm-covers/vgm-covers.component';
import { MarkdownResolver } from './resolvers/markdown-resolver';
import { SafeHtml } from './pipes/safehtml-pipe';
import { SafeResourceURL } from './pipes/saferesourceurl-pipe';

const routes: Routes = [
  { 
    path: '', 
    component: ContentTemplateComponent,
    children: [
      { 
        path: '', component: HomeComponent, pathMatch: 'full', 
        resolve: { markdownData: MarkdownResolver }, 
        data: { fileName: 'home.md', title: 'Brendan Vavra', subtitle: 'Developer, Composer, Accordionist'} 
      },
      { 
        path: 'about', component: AboutComponent, 
        resolve: { markdownData: MarkdownResolver }, 
        data: { fileName: 'about.md', title: 'About Brendan'} 
      },
      { 
        path: 'projects', component: ProjectsComponent, 
        resolve: { markdownData: MarkdownResolver }, 
        data: { fileName: 'projects.md', title: 'Brendan\'s Projects'} 
      },
      { 
        path: 'compositions', component: CompositionsComponent, 
        resolve: { markdownData: MarkdownResolver }, 
        data: { fileName: 'compositions.md', title: 'Brendan\'s Music', wideLayout: true } 
      },
      { 
        path: 'vgm-covers', component: VgmCoversComponent,
        data: { title: 'Brendan\'s Covers', subtitle: 'Mostly Video Game Music', wideLayout: true, bigImg: 'assets/img/vgm-covers.jpg' } 
      }
    ]
  },
  { path: 'home', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({//Replaced from default
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],//makes the routes available throughout the app
  providers: [MarkdownResolver, SafeHtml, SafeResourceURL]
})
export class AppRoutingModule { }

