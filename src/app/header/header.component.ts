import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Brendan Vavra';
  url = 'http://bvavra.github.io';

  constructor() { }

  ngOnInit(): void {
    this.title = 'Brendan Vavra';
  }

}
