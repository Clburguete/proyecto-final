import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class DatasheetsService {
  options = {withCredentials:true};
  BASEURL: String = "http://localhost:3000";
  constructor(private http: Http ) {}

handleError(e) {
  return Observable.throw(e.json().message);
  }

createInvestForm(form){
  return this.http.post(`${this.BASEURL}/signup/investordata`, form,this.options)
    .map(res => res.json())
    .catch(this.handleError)
  }

createStartupForm(form){
  return this.http.post(`${this.BASEURL}/signup/startupdata`, form,this.options)
    .map(res => res.json())
    .catch(this.handleError)
  }

}
