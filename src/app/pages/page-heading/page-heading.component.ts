import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.css']
})
export class PageHeadingComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() subtitle: string;

  ngOnInit(): void {
  }

}