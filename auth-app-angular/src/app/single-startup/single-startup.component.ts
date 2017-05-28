import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';



@Component({
  selector: 'single-startup',
  templateUrl: './single-startup.component.html',
  styleUrls: ['./single-startup.component.css']
})
export class SingleStartupComponent implements OnInit {
  @Input() startup: any;
  loggedUser:any;

  constructor(private router: Router, private session: SessionService) { }

  ngOnInit() {
    this.loggedUser = this.session.loggedUser;
 }

  viewDetails(id, param){
   this.router.navigate(['startups', this.startup.id]);
 }

}
