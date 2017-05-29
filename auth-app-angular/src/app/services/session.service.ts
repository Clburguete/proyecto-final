import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class SessionService {
  options = {withCredentials:true};
  BASEURL: String =  "http://localhost:3000";
  loginEvent = new EventEmitter<any>();
  loggedUser:any;
  user:any;

  constructor(private http: Http) { }

  getLoginEmitter(): EventEmitter<any>{
    return this.loginEvent;
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${this.BASEURL}/signup`, user, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${this.BASEURL}/login`, user, this.options)
      .map(res => {
        this.loggedUser = res.json();
        this.loginEvent.emit(this.loggedUser);
        return res.json();
      })
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.BASEURL}/logout`,{}, this.options)
      .map(res => {
        this.loggedUser = null;
        this.loginEvent.emit(this.loggedUser);
        return res.json();
      })
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.BASEURL}/loggedin`, this.options)
      .map(res => res.json())
      .map(user => {this.loggedUser=user; return this.loggedUser})
      .catch((err) => this.handleError(err));
  }

  getPrivateData() {
    return this.http.get(`${this.BASEURL}/private`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
