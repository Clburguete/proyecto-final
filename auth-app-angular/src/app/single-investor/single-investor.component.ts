import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'single-investor',
  templateUrl: './single-investor.component.html',
  styleUrls: ['./single-investor.component.css']
})
export class SingleInvestorComponent implements OnInit {
  @Input() investor: any;
  loggedUser:any;
  constructor(private router: Router, private session: SessionService) { }

  ngOnInit() {
    this.loggedUser = this.session.loggedUser;
    console.log(this.loggedUser)
}

  viewDetails(id, param){
   this.router.navigate(['investors', this.investor.id]);
 }

}
