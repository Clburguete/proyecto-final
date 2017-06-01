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
investmentUpdate(form, userId){
  return this.http.post(`${this.BASEURL}/edit/investordata`,[form, userId], this.options)
    .map((res)=> res.json())
    .catch(this.handleError);
}
startupFormCreate(form,userId){
  console.log("IDS-->"+form +" "+ userId)

  return this.http.post(`${this.BASEURL}/signup/startupdata`, form,this.options)
    .map(res => {
      console.log("Con raul-->",res)
      this.startupFormRelate(userId,res.json()._id).subscribe()

      return res.json()})
    .catch(this.handleError)
  }
startupFormRelate(userId, formId){
    console.log("RELATE IDS-->"+formId +" "+ userId)
    return this.http.post(`${this.BASEURL}/signup/startrelate`, [formId, userId],this.options)
      .map(res => {
        console.log("FORM RELATED WITH USER!")

        //return res.json();
      })
      .catch(this.handleError)
  }
  startupUpdate(form, userId){
    return this.http.post(`${this.BASEURL}/edit/startupdata`,[form, userId], this.options)
      .map((res)=> res.json())
      .catch(this.handleError);
  }
}
