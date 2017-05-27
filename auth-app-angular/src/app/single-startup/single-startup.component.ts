import { Component, OnInit, Input } from '@angular/core';
import { StartupService } from '../services/startup.service'
import { Router } from '@angular/router';


@Component({
  selector: 'single-startup',
  templateUrl: './single-startup.component.html',
  styleUrls: ['./single-startup.component.css']
})
export class SingleStartupComponent implements OnInit {
  @Input() startup: any;

  constructor(private router: Router) { }

  ngOnInit() { }

  viewDetails(id, param){
   this.router.navigate(['startups', this.startup.id]);
 }

}
