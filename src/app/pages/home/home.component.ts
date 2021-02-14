import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//TODO - seems weird I have to include these once I moved /home into /pages - figure out the proper way to do this
// for markdown I think we should consider writing a Service class
// here's one option: https://medium.com/@balramchavan/smarter-way-to-organize-import-statements-using-index-ts-file-s-in-angular-c685e9d645b7 
// and in general I like the idea of defining absolute paths for components: 
//   https://scotch.io/tutorials/reference-angular-imports-absolutely-for-easier-development
// somewhat unrelated, but an interesting resource on best practices for reusing different layout templates:
//   https://medium.com/angular-in-depth/angular-routing-reusing-common-layout-for-pages-from-different-modules-440a23f86b57 

import { MarkdownModule } from 'ngx-markdown';
import { PageHeadingComponent } from '../page-heading/page-heading.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  //TODO: replace with .md files from server using HttpClient
  markdown = `## Markdown __rulez__!
---

### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`

### Lists
1. Ordered list
2. Another bullet point
  - Unordered list
  - Another unordered bullet point

### Blockquote
> Blockquote to the max`;

  ngOnInit(): void {
  }

}
