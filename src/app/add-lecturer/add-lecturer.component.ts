import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthData } from '../login/login.component';
import { Router } from '@angular/router';
export interface Food {
  value: string;
  viewValue: string;
}
export interface instDetails {
  instName: stringClass;
  InstID: stringClass;
}
export interface stringClass {
  S: string;
}

export interface BranchDetails {
  brname: stringClass;
  BranchID: stringClass;
}
@Component({
  selector: 'app-add-lecturer',
  templateUrl: './add-lecturer.component.html',
  styleUrls: ['./add-lecturer.component.css']
})

export class AddLecturerComponent implements OnInit {
  showSpinner = true;
  insts: instDetails[];
  branches: BranchDetails[];
  constructor(private router: Router, private auth: AuthService) { }
  auData: AuthData;
  ngOnInit() {
    console.log(localStorage.getItem('isLoggedIn'));
    if (localStorage.getItem('isLoggedIn') == 'false' || localStorage.getItem('isLoggedIn') == null) {
      this.router.navigate(["./login"]);
    }
    this.auth.getInstDetails().subscribe(data => {
      console.log(data);
      this.insts = data;
      this.showSpinner = false;
    });
    this.auth.getBranchDetails().subscribe(data => {
      this.branches = data;
      this.showSpinner = false;
      console.log(data);
    });
  }

  // addLecturer(inst, brname, lecturerFirstName, lecturerMiddleName, lecturerLastName, lecturerDOB): void {
  //   this.showSpinner = true;
  //   this.auth.addLecturer(inst, brname, lecturerFirstName, lecturerMiddleName, lecturerLastName, lecturerDOB).subscribe(data => {
  //     this.auData = data
  //     if (this.auData.statusCode == 200) {
  //       this.showSpinner = false;
  //       alert("Lecturer added successfully.")
  //     }
  //     else {
  //       this.showSpinner = false;
  //       alert("Error Occurred!")

  //     }
  //     console.log(this.auData);

  //   });
  // }
}


