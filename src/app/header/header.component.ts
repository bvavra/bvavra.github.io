import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Brendan Vavra';
  url = 'http://bvavra.github.io';//TODO - do I want to link directly to the URL 'http://bvavra.github.io', or do I want it to smart nav to Home like the nav menu? 

  constructor() { }

  ngOnInit(): void {
    this.title = 'Brendan Vavra';
  }

}
