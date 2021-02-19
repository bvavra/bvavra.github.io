import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  constructor(private http: HttpClient) { }

  getMarkdownFromFile(fileName): Observable<any> {
     //This currently assumes all MD files will live here, which I'm not 100% sure will always be true
     return this.http.get('assets/markdown/' + fileName, {responseType: 'text'});
  }
}
