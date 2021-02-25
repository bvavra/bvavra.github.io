import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  title: string = 'Brendan Vavra';
  subtitle: string = 'Developer, Composer, Accordionist';

  data: string;

  ngOnInit(): void {
    this.data = this.route.snapshot.data.markdownData;
  }

}
