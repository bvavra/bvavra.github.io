import { Component, Input, OnInit } from '@angular/core';
import { MarkdownService } from '@app/services/markdown.service';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {

  constructor(private markdownService: MarkdownService) { }

  @Input() fileName: string;
  data: string;

  ngOnInit(): void {
    this.getMarkdown(this.fileName);
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
