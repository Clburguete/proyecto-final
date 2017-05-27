import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';


@Component({
  selector: 'single-investor',
  templateUrl: './single-investor.component.html',
  styleUrls: ['./single-investor.component.css']
})
export class SingleInvestorComponent implements OnInit {
  @Input() investor: any;

  constructor(private router: Router) { }

  ngOnInit() { }

  viewDetails(id, param){
   this.router.navigate(['investors', this.investor.id]);
 }

}
