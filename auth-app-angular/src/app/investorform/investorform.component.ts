import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { DatasheetsService } from '../services/datasheets.service'

@Component({
  selector: 'app-investorform',
  templateUrl: './investorform.component.html',
  styleUrls: ['./investorform.component.css']
})
export class InvestorformComponent implements OnInit {

      user: any;
       InvestorForm = {
         connections: [''],
         interests: '',
         budget: '',
         investreturn:''
       };
       error: string;
  constructor(private session: SessionService,private router: Router, private data: DatasheetsService) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe();
    this.session.getLoginEmitter().subscribe(user => this.user=user,console.log(this.user))


  }

  create(){
    this.data.createInvestForm(this.InvestorForm)
      .subscribe(
        (data) => this.successCb(data),
        (err) => this.errorCb(err)
      )
  }
  errorCb(err) {
    this.error = err;
    this.data = null;
  }

  successCb(data) {
    this.data = data;
    console.log(data);
    this.error = null;

  }
}
