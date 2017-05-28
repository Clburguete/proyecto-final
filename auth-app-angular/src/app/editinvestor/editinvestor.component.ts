import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-editinvestor',
  templateUrl: './editinvestor.component.html',
  styleUrls: ['./editinvestor.component.css']
})
export class EditinvestorComponent implements OnInit {
  loggedUser:any;
  error:any;
  formInfo = {
    invest: '',
  };
  constructor(private session: SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe();
    this.session.getLoginEmitter().subscribe(user => {
      this.loggedUser=user;
      console.log(this.loggedUser)
    })
  }

}
