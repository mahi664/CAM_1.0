import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  //isUserLogedIn=false;
  constructor() { }

  authenticateUser(username,password){
    if(username==='SYSADMIN' && password==='SYSADMIN'){
      //this.isUserLogedIn=true;
      sessionStorage.setItem('username',username)
      return true;
    }
  }
  isUserLogedIn(){
    if(sessionStorage.getItem('username'))
      return true
    return false
  }
}
