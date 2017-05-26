import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { SessionService } from '../services/session.service'

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})
export class InvestorsComponent implements OnInit {
  investorList: any[];
  error: string;
  user: any;
  constructor(private investors : UserService, private session: SessionService) { }

  ngOnInit() {
    this.session.getLoginEmitter().subscribe(user => this.user=user)

    this.investors.showAll()
      .subscribe(
        (response) => this.successCb(response),
        (err) => this.errorCb(err)
      );
  }

  errorCb(err) {
    this.error = err;
    this.investorList = [null];
  }

  successCb(list) {
    this.investorList = list;
    this.error = null;
    console.log(this.investorList)
  }
}
