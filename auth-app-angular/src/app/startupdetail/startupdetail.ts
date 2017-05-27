import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartupService } from '../services/startup.service';


@Component({
  selector: 'app-startupdetail',
  templateUrl: './startupdetail.component.html',
  styleUrls: ['./startupdetail.component.css']
})
export class StartupdetailComponent implements OnInit {
  startupId: string;
  error:any;
  constructor(private route: ActivatedRoute, private startup: StartupService) { }

  ngOnInit() {
    this.route.params
     .subscribe((params) => {
       this.startupId = params['id'];
       this.startup.showOne(this.startupId)
        .subscribe(
          (response) => {this.successCb(response);console.log(response);},
          (err) => this.errorCb(err)
        )
   });

  }
  errorCb(err) {
    this.error = err;
    this.startup = null;
  }

  successCb(startup) {
    this.startup = startup;
    this.error = null;
  }

}
