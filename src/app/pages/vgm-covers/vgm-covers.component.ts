import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vgm-covers',
  templateUrl: './vgm-covers.component.html',
  styleUrls: ['./vgm-covers.component.css']
})
export class VgmCoversComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
