import { Component, Input, OnInit } from '@angular/core';
import { MarkdownService } from '@app/services/markdown.service';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {

  constructor(private markdownService: MarkdownService) { }

  //Can pass in one or the other
  @Input() fileName: string;
  @Input() data: string;

  ngOnInit(): void {
    if(this.data === undefined){//If data not provided, get data by fileName instead
      this.getMarkdown(this.fileName);
    }
  }

  onReady(): void {
    //Null Op for now
  }

  getMarkdown(fileName): void {
    this.markdownService
    .getMarkdownFromFile(fileName)
    .subscribe(
      data => this.data=data,
      error => console.log(error)
    );
  }
}
