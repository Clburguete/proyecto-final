import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  investorList:any;
  error:any;
  totalInvestment:number;


  pieChartLabels: string[] =  ['Startups','Investors'];
  pieChartData: number[] = [300, 500, 100];
  pieChartType: string = 'doughnut';



  doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  doughnutChartData: number[] = [350, 450, 100];
  doughnutChartType: string = 'doughnut';
  constructor(private info : UserService) { }

  ngOnInit() {
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

    this.pieChartData = [startList.length, invList.length]
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