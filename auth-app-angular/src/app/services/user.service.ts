import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../../environments/environment';


@Injectable()
export class UserService {
  BASEURL: String =  environment.BASE_URL;
  constructor(private http: Http) { }


  handleError(e) {
    return Observable.throw(e.json().message);
  }
  homeShowAll() {
    return this.http.get(`${this.BASEURL}/home/investors`,{withCredentials:true})
      .map(res => res.json())
      .catch((err) => this.handleError(err));
  }

  showAll() {
    return this.http.get(`${this.BASEURL}/investors`,{withCredentials:true})
      .map(res => res.json())
      .catch((err) => this.handleError(err));
  }
  showOne(id){
  return this.http.get(`${this.BASEURL}/investors/${id}`, {withCredentials:true})
    .map(res => res.json())
    .catch((err) => this.handleError(err));
  }
}
