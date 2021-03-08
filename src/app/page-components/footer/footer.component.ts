import { Component, OnInit } from '@angular/core';
import { Icon } from '@app/page-components/icon';
import { ICONS } from '@app/page-components/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  icons = ICONS;

  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}