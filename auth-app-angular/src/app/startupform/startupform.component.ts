import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { DatasheetsService } from '../services/datasheets.service'

@Component({
  selector: 'app-startupform',
  templateUrl: './startupform.component.html',
  styleUrls: ['./startupform.component.css']
})
export class StartupformComponent implements OnInit {


        loggedUser: any;
         StartupForm = {
           category: '',
           lookingfor: '',
           investinterest: '',
           budget:''
         };
         isDisabled: boolean;
         error: string;
  constructor(private session: SessionService,private router: Router, private data: DatasheetsService) { }

  ngOnInit() {
    this.session.getLoginEmitter().subscribe(user => this.loggedUser = user)
    this.session.isLoggedIn().subscribe();
  }
  create(){
    this.data.createStartupForm(this.StartupForm)
      .subscribe(
        (data) => {
          this.successCb(data);
        },
        (err) => this.errorCb(err)
      )
  }
  errorCb(err) {
    this.error = err;
    this.data = null;
  }

  successCb(data) {
    this.data = data;
    console.log("Data-->"+this.data);//porque no sale en ningun lado?
                                     // si el formulario se esta creando en mongoDb?
    this.error = null;

  }
}
