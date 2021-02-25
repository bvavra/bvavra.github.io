import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compositions',
  templateUrl: './compositions.component.html',
  styleUrls: ['./compositions.component.css']
})
export class CompositionsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  title: string = 'Brendan\'s Music';
  data: string;

  ngOnInit(): void {
    this.data = this.route.snapshot.data.markdownData;
  }

}
