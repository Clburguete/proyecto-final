import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class MessageService {
  options = {withCredentials:true};
  BASEURL: String = "http://localhost:3000";
  constructor(private http: Http ) {}

createMessage(message){
  return this.http.post(`${this.BASEURL}/message/new`, message,this.options)
    .map(res => {
      return res.json();
    })
    .catch(this.handleError)
}
showMessages(id){
  return this.http.get(`${this.BASEURL}/messages/:${id}`, this.options)
    .map(res => {
      console.log("message--->",res)
      return res.json()})
    .catch((err) => this.handleError(err))
}
  handleError(e) {
    return Observable.throw(e.json().message);
  }
}
