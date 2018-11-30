import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { Router, NavigationStart } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: "Add Institute", name: "addinst", cols: 1, rows: 1 },
          { title: "Card 2", cols: 1, rows: 1 },
          { title: "Card 3", cols: 1, rows: 1 },
          { title: "Card 4", cols: 1, rows: 1 }
        ];
      }

      return [
        { title: "Add Institute", name: "addinst", cols: 1, rows: 1 },
        { title: "Card 2", cols: 1, rows: 1 },
        { title: "Card 3", cols: 1, rows: 1 },
        { title: "Card 4", cols: 1, rows: 1 }
      ];
    })
  );
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}
  redirect(pagename: string) {
    this.router.navigate(["./" + pagename]);
  }
}
