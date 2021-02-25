import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MarkdownService } from '@app/services/markdown.service';

@Injectable({
    providedIn: 'root'
  })
export class MarkdownResolver implements Resolve<Observable<any>> {
  constructor(private markdownService: MarkdownService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
      let fileName = route.data['fileName']; 
      return this.markdownService.getMarkdownFromFile(fileName);
  }
}
