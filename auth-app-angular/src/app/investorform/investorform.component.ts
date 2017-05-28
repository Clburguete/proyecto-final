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

      loggedUser: any;
       InvestorForm = {
         connections: '',
         interests: '',
         budget: '',
         investreturn:''
       };
       error: string;
  constructor(private session: SessionService,private router: Router, private data: DatasheetsService) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe(user=>this.loggedUser = user);
    this.session.getLoginEmitter().subscribe(user => this.loggedUser=user,console.log(this.loggedUser))

  }

  create(){
    //this.session.isLoggedIn().subscribe(res=>console.log(res))
    this.data.createInvestForm(this.InvestorForm)
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
    console.log("Data-->",this.data);//porque no sale en ningun lado?
                                     // si el formulario se esta creando en mongoDb?
    this.error = null;

  }
}
