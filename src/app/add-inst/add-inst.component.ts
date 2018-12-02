import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-inst',
  templateUrl: './add-inst.component.html',
  styleUrls: ['./add-inst.component.css']
})
export class AddInstComponent implements OnInit {

  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() {
    console.log(localStorage.getItem('isLoggedIn'));
    if(localStorage.getItem('isLoggedIn')== 'false'|| localStorage.getItem('isLoggedIn')== null){
      this.router.navigate(["./login" ]);
    }
  }
  addInst(instName, instAddr, spocName, spocContact, InstContact){
    this.auth.addInst(instName, instAddr, spocName, spocContact, InstContact).subscribe(data => {
      console.log(data);
    },error=>{
      console.log(error);
    }
    );
  }

}
