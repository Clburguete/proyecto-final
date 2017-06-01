import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
    this.session.isLoggedIn().subscribe(user => {
      this.loggedUser = user;
    });


  }
  create(){
    console.log("creating...")
    this.data.startupFormCreate(this.StartupForm, this.loggedUser._id)
      .subscribe(
        (data) => {
          return this.successCb(data)},
        (err) => this.errorCb(err)
      )
  }
  errorCb(err) {
    this.error = err;
    this.data = null;
  }

  successCb(data) {
    this.data = data;
    console.log("Data-->"+this.data);
    this.error = null;

  }
}
