import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  title: string = 'About Brendan';
  data: string;

  ngOnInit(): void {
    this.data = this.route.snapshot.data.markdownData;
  }

}
