import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(
    private authenticatonService: AuthenticationServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    if(!this.authenticatonService.isUserLogedIn()){
      this.router.navigate(['Login'])
    }
  }

}
