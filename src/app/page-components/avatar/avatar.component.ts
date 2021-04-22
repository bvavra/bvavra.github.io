import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  imgUrl = 'assets/img/accordion2.jpg';
  url = 'http://bvavra.github.io';

  constructor() { }

  ngOnInit(): void {
    this.url = 'http://bvavra.github.io';
    this.imgUrl = 'assets/img/accordion2.jpg';
  }

}
