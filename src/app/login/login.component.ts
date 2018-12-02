import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
export class AuthData {
  statusCode: number;
  name: string;
  role: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  auData: AuthData;
  showSpinner= false; 
  isCorrectUser = false; 
  constructor(private router: Router, private auth: AuthService) {
    
  }
  ngOnInit() {
    localStorage.setItem('isLoggedIn', 'false');
    
  }
  login(uname, password): void {
    this.showSpinner= true;
    console.log(uname+ password);
    
    this.auth.getAuth(uname, password).subscribe(data => {
      this.auData= data
      if(this.auData.statusCode==200)
      {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('role', this.auData.role);

        this.router.navigate(['./dashboard']);
    this.showSpinner= false;

      }
      else{
        this.isCorrectUser= true;
    this.showSpinner= false;

      }
      console.log(this.auData);
      
    });
  }
}
