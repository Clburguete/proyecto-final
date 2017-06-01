import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service';
import { environment }  from '../../environments/environment';


@Injectable()
export class MessageService {
  options = { withCredentials: true };
  messageEvent = new EventEmitter<any>();
  BASEURL: String = environment.BASE_URL;
  constructor(private http: Http, private session: SessionService) { }

  createMessage(message) {
    return this.http.post(`${this.BASEURL}/message/new`, message, this.options)
      .map(res => {
        return res.json();
      })
      .catch(this.handleError)
  }
  showMessages(id) {
    return this.http.get(`${this.BASEURL}/messages/${id}`, this.options)
      .map(res => res.json())
      .catch((err) => this.handleError(err))
  }
  showUserMessages(id) {
    return this.http.get(`${this.BASEURL}/inbox/${id}`, this.options)
      .map(res => res.json())
      .map(messages => { this.messageEvent.emit(messages); return messages })
      .catch((err) => this.handleError(err))
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }
  deleteMessage(id) {
    return this.http.get(`${this.BASEURL}/delete-message/${id}`, this.options)
      .map(res => res.json())
      .catch((err) => this.handleError(err))
  }
}
