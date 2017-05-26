import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'single-investor',
  templateUrl: './single-investor.component.html',
  styleUrls: ['./single-investor.component.css']
})
export class SingleInvestorComponent implements OnInit {
  @Input() investor: any;

  constructor() { }

  ngOnInit() { }

}
