import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthData } from '../login/login.component';
import { Router } from '@angular/router';
export interface Food {
  value: string;
  viewValue: string;
}
export interface instDetails{
  instName: stringClass;
  InstID: stringClass
}
export interface stringClass{
  S: string
}
@Component({
  selector: 'app-addbradmin',
  templateUrl: './addbradmin.component.html',
  styleUrls: ['./addbradmin.component.css']
})

export class AddbradminComponent implements OnInit {
  showSpinner= true;
  insts:instDetails[];
  constructor(private router: Router,private auth: AuthService) { }
  auData: AuthData;
  ngOnInit() {
    console.log(localStorage.getItem('isLoggedIn'));
    if(localStorage.getItem('isLoggedIn')== 'false'|| localStorage.getItem('isLoggedIn')== null){
      this.router.navigate(["./login" ]);
    }
    this.auth.getInstDetails().subscribe(data => {
      console.log(data);
      this.insts= data;
      this.showSpinner= false;
    });
  }
  
  addBrch(inst,brname,bradmnname,bradmnemail,bradmncontach): void {
    this.showSpinner= true;
    this.auth.addBrch(inst,brname,bradmnname,bradmnemail,bradmncontach).subscribe(data => {
      this.auData= data
      if(this.auData.statusCode==200)
      {
    this.showSpinner= false;
    alert("Branch added successfully.")
      }
      else{
    this.showSpinner= false;
    alert("Error Occurred!")

      }
      console.log(this.auData);
      
    });
  }
}
