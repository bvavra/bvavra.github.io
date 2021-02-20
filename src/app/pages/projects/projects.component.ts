import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  title: string = 'Brendan\'s Projects';
  //subtitle: string = '';

  fileName: string = 'projects.md';

  ngOnInit(): void {
  }

}
