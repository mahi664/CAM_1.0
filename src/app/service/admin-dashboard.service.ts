import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getHelloWorldService(){
    return this.http.get(
      `http://localhost:8080/hello-world`,{responseType: 'text'}
    )
  }
}

