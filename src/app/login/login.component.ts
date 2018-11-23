import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EPresentyComponent } from '../e-presenty/e-presenty.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
username: string;
password: string;
showHead: boolean = false;
  ngOnInit() {
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.showHead= true;
     this.router.navigate(["dashboard"]);
    }else {
      alert("Invalid credentials");
    }
  }
}