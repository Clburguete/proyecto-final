import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { DatasheetsService } from '../services/datasheets.service'


@Component({
  selector: 'app-editinvestor',
  templateUrl: './editinvestor.component.html',
  styleUrls: ['./editinvestor.component.css']
})
export class EditinvestorComponent implements OnInit {
  loggedUser:any;
  error:any;
  InvestorForm = {
    connections: '',
    interests: '',
    budget: '',
    investreturn: ''
  };
  data:any;
  constructor(private session: SessionService, private dataService: DatasheetsService) { }

  ngOnInit() {
    this.session.getLoginEmitter().subscribe(user => this.loggedUser=user)
    this.loggedUser = this.session.loggedUser;
    console.log("USERRRRRR", this.loggedUser)
  }

update(){
  this.dataService.investmentUpdate(this.InvestorForm, this.loggedUser._id)
    .subscribe(
      (data)=> this.successCb(data),
      (err)=> this.errorCb(err)
    )
}
errorCb(err) {
  this.error = err;
  this.data = null;
}

successCb(data) {
  this.data = data;
  this.error = null;

}
}
