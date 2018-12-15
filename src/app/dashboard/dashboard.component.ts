import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { Router, NavigationStart } from "@angular/router";
import { Observable } from "rxjs";
import { EPresentyComponent } from "../e-presenty/e-presenty.component";
import { MatSidenav } from "@angular/material";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  private sidenav: MatSidenav;
  ngOnInit() {
    
    // this.sidenav.toggle();
    console.log(localStorage.getItem('isLoggedIn'));
    
    if(localStorage.getItem('isLoggedIn')== 'false'|| localStorage.getItem('isLoggedIn')== null){
      this.router.navigate(["./login" ]);
    }
  }
  isLoggedin$: Observable<boolean> = this.breakpointObserver.observe(localStorage.getItem('isLoggedIn'))
    .pipe(
      map(result1 => result1.matches)
    );
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      
      let role=localStorage.getItem('role')
      console.log(role);
      
      // if(role== 'superadmin'){
      return [
        { title: "Add Institute", name: "addinst"},
        { title: "Add Branch Admin", name: "addbradmin", cols: 1, rows: 1 },
        { title: "Add Lecturer", name: "addlecturer", cols: 1, rows: 1 },
        { title: "Add Subject", name: "addsubject", cols: 1, rows: 1 },
        { title: "Assign Subject to Lecturer", cols: 1, rows: 1 },
        { title: "Add Leave", cols: 1, rows: 1 },
        { title: "Reassign Lecture", cols: 1, rows: 1 },
        { title: "Add Timetable", cols: 1, rows: 1 },
        { title: "Add Attendance", cols: 1, rows: 1 },
        { title: "Report", cols: 1, rows: 1 },
        { title: "Add Batch", name: "addbatch", cols: 1, rows: 1 },
        { title: "Add Students", name: "addstudent", cols: 1, rows: 1 },
        { title: "Common View Timetable", cols: 1, rows: 1 },
        { title: "View Institute", name:"addtt",cols: 1, rows: 1 }

      ];
    // }
    // else if(role== 'admin'){
    //   return [
    //     { title: "Add Institute", name: "addinst"},
    //     { title: "Card 2", cols: 1, rows: 1 },
    //     { title: "Card 3", cols: 1, rows: 1 },
    //     { title: "Card 4", cols: 1, rows: 1 }
    //   ];
    // }
    // else if(role== 'lecturer'){
    //   return [
    //     { title: "Add Institute", name: "addinst"},
    //     { title: "Card 2", cols: 1, rows: 1 },
    //     { title: "Card 3", cols: 1, rows: 1 },
    //     { title: "Card 4", cols: 1, rows: 1 }
    //   ];
    // }
  })
  );
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private nav: EPresentyComponent
  ) {}
  
  redirect(pagename: string) {
    this.router.navigate(["./" + pagename]);
  }
}
