import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { Router } from '@angular/router';
import { AdminDashboardService } from '../service/admin-dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  data = ''
  constructor(
    private authenticatonService: AuthenticationServiceService,
    private router: Router,
    private adminDasboardService: AdminDashboardService
  ) { }

  ngOnInit() {
    if(!this.authenticatonService.isUserLogedIn()){
      this.router.navigate(['Login'])
    }
    this.adminDasboardService.getHelloWorldService().subscribe(
      data => this.data = data
    )
  }

}
