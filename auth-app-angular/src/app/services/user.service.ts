import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class UserService {
  BASEURL: String =  "http://localhost:3000";

  users:any;

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

  // login(user) {
  //   return this.http.post(`${this.BASEURL}/login`, user,{withCredentials:true})
  //     .map(res => {
  //       this.user = user;
  //       this.loginEvent.emit(this.user);
  //       return res.json();
  //     })
  //     .catch(this.handleError);
  // }
  //
  // logout() {
  //   return this.http.post(`${this.BASEURL}/logout`, {withCredentials:true})
  //     .map(res => {
  //       this.user = null;
  //       this.loginEvent.emit(this.user);
  //       return res.json();
  //     })
  //     .catch(this.handleError);
  // }
  //
  // isLoggedIn() {
  //   return this.http.get(`${this.BASEURL}/loggedin`,{withCredentials:true})
  //     .map(res => res.json())
  //     .map(user => {this.user=user; return user})
  //     .catch((err) => this.handleError(err));
  // }
  //
  // getPrivateData() {
  //   return this.http.get(`${this.BASEURL}/private`,{withCredentials:true})
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }
}
