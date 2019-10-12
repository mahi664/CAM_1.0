import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../service/authentication-service.service';

@Component({
  selector: 'app-side-navigationbar',
  templateUrl: './side-navigationbar.component.html',
  styleUrls: ['./side-navigationbar.component.css']
})
export class SideNavigationbarComponent implements OnInit {

  isCollapsed=true
  constructor(
    private authenticationService: AuthenticationServiceService
  ) { }

  ngOnInit() {
  }

}
