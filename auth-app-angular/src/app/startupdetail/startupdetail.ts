import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-startupdetail',
  templateUrl: './startupdetail.component.html',
  styleUrls: ['./startupdetail.component.css']
})
export class StartupdetailComponent implements OnInit {
  startupId: string;
  error:any;
  loggedUser:any;
  startup:any;
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Last revenue (in €)'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Expected revenue (in €)'},

  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April','May','June'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(43,123,123,0.5)',
      borderColor: 'rgba(148,159,177,0)',
      pointBackgroundColor: 'rgba(148,159,177,0)',
      pointBorderColor: 'rgba(148,159,177,0)',
      pointHoverBackgroundColor: 'rgba(148,159,177,0)',
      pointHoverBorderColor: 'rgba(148,159,177,0.0)'
    },
    { // dark grey
      backgroundColor: 'rgba(133,208,208,0.5)',
      borderColor: 'rgba(148,159,177,0)',
      pointBackgroundColor: 'rgba(148,159,177,0)',
      pointBorderColor: 'rgba(148,159,177,0)',
      pointHoverBackgroundColor: 'rgba(148,159,177,0)',
      pointHoverBorderColor: 'rgba(148,159,177,0.0)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';


  constructor(private route: ActivatedRoute, public business: UserService, public session: SessionService) { }

  ngOnInit() {
    this.loggedUser = this.session.loggedUser;

    this.route.params
     .subscribe((params) => {
       this.startupId = params['id'];
       this.business.showOne(this.startupId)
                   .subscribe(
                     (response) => {this.successCb(response)},
                     (err) => {this.errorCb(err)}
                   )
   });

  }
  errorCb(err) {
    this.error = err;
    this.startup = null;
  }

  successCb(startup) {
    this.startup = startup;
    this.lineChartData[0].data = this.startup.start_datasheets.lastrevenue;
    this.lineChartData[1].data = this.startup.start_datasheets.expectedrevenue;

    console.log("Startup-->",this.startup)
    this.error = null;
  }

}
