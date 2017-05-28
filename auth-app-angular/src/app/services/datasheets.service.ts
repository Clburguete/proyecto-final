import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class DatasheetsService {
  BASEURL: String = "http://localhost:3000";
  constructor(private http: Http ) {}

handleError(e) {
  return Observable.throw(e.json().message);
  }

createInvestForm(form){
  return this.http.post(`${this.BASEURL}/signup/investordata`, form)
    .map(res => {res.json()})
    .catch(this.handleError)
  }

createStartupForm(form){
  return this.http.post(`${this.BASEURL}/signup/startupdata`, form)
    .map(res => {res.json()})
    .catch(this.handleError)
  }

}
