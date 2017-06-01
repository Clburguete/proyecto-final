import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { SessionService } from '../services/session.service';



@Component({
  selector: 'app-investordetail',
  templateUrl: './investordetail.component.html',
  styleUrls: ['./investordetail.component.css']
})
export class InvestordetailComponent implements OnInit {
  investorId: string;
  error:any;
  loggedUser:any;
  user: any;

  constructor(private route: ActivatedRoute, public userService: UserService, private session: SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe(user => {
      console.log(user)
      this.loggedUser = user;
    });

    this.route.params
     .subscribe((params) => {
       this.investorId = params['id'];
       this.userService.showOne(this.investorId)
           .subscribe(
             (response) => this.successCb(response),
             (err) => this.errorCb(err)
           )
   });

  }
  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.user = user;
    this.error = null;
  }

}
