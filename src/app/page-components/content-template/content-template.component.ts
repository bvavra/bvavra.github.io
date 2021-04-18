import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-content-template',
  templateUrl: './content-template.component.html',
  styleUrls: ['./content-template.component.css']
})
export class ContentTemplateComponent implements OnInit {

  title: string;
  subtitle: string;
  wideLayout: boolean;
  bigImg: string;
  sub: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    //See https://stackoverflow.com/questions/43806188/how-can-i-access-an-activated-child-routes-data-from-the-parent-routes-compone
    //In short, it looks like, on NavigationEnd, we map this.route.snapshot.firstChild as "route" and can then subscribe
    this.sub = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.route.snapshot),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .subscribe((route: ActivatedRouteSnapshot) => {
        //console.log(route.data);
        this.title = route.data.title;
        this.subtitle = route.data.subtitle;
        this.wideLayout = route.data.wideLayout;
        this.bigImg = route.data.bigImg;
      });
  }

  ngOnInit(): void {
    //This didn't work because it only executed the first time the route was activated.
    //To make it work every time, we need to hook into the NavigationEnd event (see above)
    // this.route.url.subscribe(() => {
    //   console.log(this.route.snapshot.firstChild.data);
    //   this.title = this.route.snapshot.firstChild.data.title;
    //   this.subtitle = this.route.snapshot.firstChild.data.subtitle;
    // });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
