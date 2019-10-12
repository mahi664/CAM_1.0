import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username=''
  password=''
  constructor(private router: Router) { }
  
  ngOnInit() {
  }

  Login(){
    //console.log(this.username + this.password);
    if(this.username==='SYSADMIN' && this.password==='SYSADMIN'){
      this.router.navigate(['adminDashboard'])
    }
  }

}
