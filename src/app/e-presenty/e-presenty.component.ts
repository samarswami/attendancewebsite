import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationStart } from '@angular/router';
import { Globals } from '../global';
import { Auth0serviceService } from '../auth0service.service';

@Component({
  selector: 'app-e-presenty',
  templateUrl: './e-presenty.component.html',
  styleUrls: ['./e-presenty.component.css'],
  providers: [ Globals ]
})
export class EPresentyComponent {
  isLoggedin= false;
  ngOnInit() {
    // this.isLoggedIn= (localStorage.getItem('isLoggedIn')== 'false'|| localStorage.getItem('isLoggedIn')== null)?'false':'true';
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    // isLoggedin$: Observable<boolean> = this.breakpointObserver.observe(localStorage.getItem('isLoggedIn'))
    // .pipe(
    //   map(result1 => result1.matches)
    // );
    // .pipe(
    //   map(result => result.matches)
    // );
  constructor(private breakpointObserver: BreakpointObserver,private router: Router, private authservice : Auth0serviceService) {
    // router.events.forEach((event) => {
    //   if (event instanceof NavigationStart) {
    //     if (event['url'] == '/dashboard') {
    //     } else {
    //       // console.log("NU")
    //     }
    //   }
    // });
    
    console.log((localStorage.getItem('isLoggedIn')));
    
    // this.isLoggedIn= globals.isLoggedIn;

  }
  redirect(pagename: string) {
    this.router.navigate(['./'+pagename]);
  }

  login(){
    this.authservice.login();
   // this.auth0ser.login();
  }

  logout(){
    this.authservice.logout();
  }

  isAuthenticated(){
   return this.authservice.isAuthenticated();
  }

}
