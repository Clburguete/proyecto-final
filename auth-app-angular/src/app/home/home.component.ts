import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  investorList:any;
  error:any;
  totalInvestment:number;


  doughnutChartLabels: string[] =  ['Startups','Investors'];
  doughnutChartData: number[] = [300, 500, 100];
  doughnutChartColors: Array<any>  = [{ backgroundColor: ["#184242", '#edfff6', "#a4c73c", "#a4add3"],borderColor: ['rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)'] }];
  doughnutChartType: string = 'doughnut';




  constructor(private info : UserService) { }

  ngOnInit() {
    $('.slider').slider({indicators: false, interval: 2500, transition: 2000});

    this.info.homeShowAll()
      .subscribe(
        (response) => this.successCb(response),
        (err) => this.errorCb(err)
      );
  }
  memberCalculate(list){
    let invList = [];
    let startList = [];
    list.forEach((user)=>{
      if(user.role==='investor') invList.push(user)
      if(user.role==='startup') startList.push(user)
    })

    this.doughnutChartData = [startList.length, invList.length]
console.log('STARTUPS', startList)

console.log('INVESTORS', invList)
}


  investCalculate(list){
    let realInvestors = [];

    list.forEach((investor)=>{
      if(investor.role==="investor"){
        realInvestors.push(investor.inv_datasheets.budget)
      }
    });
    let totalMoney = realInvestors.reduce((firstValue, secondValue)=>firstValue + secondValue)
    this.totalInvestment = totalMoney;
    console.log(realInvestors)
    console.log(this.totalInvestment)
  }

  errorCb(err) {
    this.error = err;
    this.investorList = [null];
  }

  successCb(list) {
    this.investorList = list;
    this.error = null;
    this.investCalculate(this.investorList)
    this.memberCalculate(this.investorList);

  }
}
