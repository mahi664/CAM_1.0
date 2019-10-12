import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../service/authentication-service.service';

@Component({
  selector: 'app-top-navigationbar',
  templateUrl: './top-navigationbar.component.html',
  styleUrls: ['./top-navigationbar.component.css']
})
export class TopNavigationbarComponent implements OnInit {

  isCollapsed=false
  constructor(
    private authenticationService: AuthenticationServiceService
  ) { }

  ngOnInit() {
  }

  handleMenuBehavior(){
    this.isCollapsed = !this.isCollapsed
    console.log(this.isCollapsed);
  }

}
