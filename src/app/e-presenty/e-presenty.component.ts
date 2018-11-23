import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-e-presenty',
  templateUrl: './e-presenty.component.html',
  styleUrls: ['./e-presenty.component.css'],
})
export class EPresentyComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  isLoggedIn= true;
  constructor(private breakpointObserver: BreakpointObserver,private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/dashboard') {
          this.isLoggedIn = false;
        } else {
          // console.log("NU")
          this.isLoggedIn = true;
        }
      }
    });
  }
  redirect(pagename: string) {
    this.router.navigate(['./'+pagename]);
  }

}
