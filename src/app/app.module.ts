import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './page-components/header/header.component';
import { NavComponent } from './page-components/nav/nav.component';
import { FooterComponent } from './page-components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CompositionsComponent } from './pages/compositions/compositions.component';
import { VgmCoversComponent } from './pages/vgm-covers/vgm-covers.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PageHeadingComponent } from './pages/page-heading/page-heading.component';
import { AvatarComponent } from './page-components/avatar/avatar.component';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CompositionsComponent,
    VgmCoversComponent,
    ProjectsComponent,
    PageHeadingComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
