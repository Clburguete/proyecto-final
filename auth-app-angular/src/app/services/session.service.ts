import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../../environments/environment';


@Injectable()
export class SessionService {
  options = {withCredentials:true};
  BASEURL: String =  environment.BASE_URL;
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
      .map(res => res.json())
      .map(user => {this.loggedUser=user; this.loginEvent.emit(user); return user})
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.BASEURL}/logout`,{}, this.options)
      .map(res => res.json())
      .map(response => {this.loggedUser=null; this.loginEvent.emit(null); return response;})
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.BASEURL}/loggedin`, this.options)
      .map(res => {console.log('EL USUARSSS',this.loggedUser);return res.json()})
      .map(user => {this.loggedUser=user;this.loginEvent.emit(user); return user})
      .catch((err) => this.handleError(err));
  }

  getPrivateData() {
    return this.http.get(`${this.BASEURL}/private`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
