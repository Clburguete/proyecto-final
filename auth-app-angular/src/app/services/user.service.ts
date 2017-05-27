import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class UserService {
  BASEURL: String =  "http://localhost:3000";

  users:any;
  user:any;

  constructor(private http: Http) { }


  handleError(e) {
    return Observable.throw(e.json().message);
  }

  showAll() {
    return this.http.get(`${this.BASEURL}/investors`,{withCredentials:true})
      .map(res => res.json())
      .map(users => {this.users=users;return this.users})
      .catch((err) => this.handleError(err));
  }
  showOne(id){
  return this.http.get(`${this.BASEURL}/investors/${id}`, {withCredentials:true})
    .map(res => res.json())
    .map(user => {this.user=user;return this.user})
    .catch((err) => this.handleError(err));
  }
}
