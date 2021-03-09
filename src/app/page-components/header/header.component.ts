import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Brendan Vavra';
  url = '/';//'http://bvavra.github.io'

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.title = 'Brendan Vavra';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) > 50) {
      document.getElementById('navbar').classList.add('top-nav-short');
    } else {
      document.getElementById('navbar').classList.remove('top-nav-short');
    }
  }

}
