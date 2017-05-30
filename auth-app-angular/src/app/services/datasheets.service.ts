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

investFormRelate(userId, formId){
  return this.http.post(`${this.BASEURL}/signup/invrelate`, [formId, userId],this.options)
    .map(res => {
      console.log("FORM RELATED WITH USER!")
      //return res.json();
    })
    .catch(this.handleError)
}


investmentCreate(form, userId){
  return this.http.post(`${this.BASEURL}/signup/investordata`, form,this.options)
    .map(res => {
      this.investFormRelate(userId, res.json()._id).subscribe()

      return res.json()})
    .catch(this.handleError)
  }

createStartupForm(form){
  return this.http.post(`${this.BASEURL}/signup/startupdata`, form,this.options)
    .map(res => res.json())
    .catch(this.handleError)
  }

}
