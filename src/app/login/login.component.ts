import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../service/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username=''
  password=''
  constructor(
    private router: Router,
    private authenticationService: AuthenticationServiceService
  ) { }
  
  ngOnInit() {
  }

  Login(){
    //console.log(this.username + this.password);
    if(this.authenticationService.authenticateUser(this.username,this.password)){
      this.router.navigate(['adminDashboard'])
    }
  }

}
