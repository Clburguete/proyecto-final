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

  barChartOptions:any = {
     scaleShowVerticalLines: false,
     responsive: true
   };
   barChartLabels:string[] = ['Technology', 'Services', 'Hardware'];
   barChartType:string = 'bar';
   barChartLegend:boolean = true;
   barChartData:any[] = [
     {data: [], label: 'Investors'},
     {data: [], label: 'Startups'}
   ];
   barChartColors: Array<any> = [
    { // first color
      backgroundColor: "#184242",
      borderColor: 'rgba(225,10,24,0)',
      pointBackgroundColor: 'rgba(225,10,24,0)',

    },
    { // second color
      backgroundColor: '#edfff6',
      borderColor: 'rgba(225,10,24,0)',
      pointBackgroundColor: 'rgba(225,10,24,0)',

    }];




  doughnutChartLabels: string[] =  ['Investors','Startups'];
  doughnutChartData: number[] = [300, 500, 100];
  doughnutChartColors: Array<any>  = [{ backgroundColor: ["#184242", '#edfff6', "#a4c73c", "#a4add3"],borderColor: ['rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)'] }];
  doughnutChartType: string = 'doughnut';


  chartDisabled:boolean = true;

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
    let techInv = [];
    let techStart = [];
    let servInv = [];
    let servStart = [];
    let hardInv = [];
    let hardStart = [];

    list.forEach((user)=>{
      if(user.role==='investor') invList.push(user)
      if(user.role==='startup') startList.push(user)
    })

    this.doughnutChartData = [startList.length, invList.length]
console.log('STARTUPS', startList)
    startList.forEach((startup)=>{
      if(startup.start_datasheets.category ==='technology') techStart.push(startup);
      if(startup.start_datasheets.category ==='services') servStart.push(startup);
      if(startup.start_datasheets.category ==='hardware') hardStart.push(startup);
    })
    invList.forEach((investor)=>{
      if(investor.inv_datasheets.interests ==='technology') techInv.push(investor);
      if(investor.inv_datasheets.interests ==='services') servInv.push(investor);
      if(investor.inv_datasheets.interests ==='hardware') hardInv.push(investor);
    })
    this.barChartData[0].data[0]= techInv.length
    this.barChartData[0].data[1]= servInv.length
    this.barChartData[0].data[2]= hardInv.length

    this.barChartData[1].data[0]= techStart.length
    this.barChartData[1].data[1]= servStart.length
    this.barChartData[1].data[2]= hardStart.length

    this.chartDisabled = false;



console.log("TechInv: ",techInv)
console.log('TechStart: ', techStart)
console.log('servInv: ', servInv)
console.log('servStrt: ', servStart)
console.log('hardInv: ', hardInv)
console.log('hardStart: ',hardStart)
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
