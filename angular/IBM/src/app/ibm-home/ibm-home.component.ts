import { Component, OnInit } from '@angular/core';


import { IBM, IBMDate } from '../ibm';
import { IbmService } from '../ibm.service';

@Component({
  selector: 'app-ibm-home',
  templateUrl: './ibm-home.component.html',
  styleUrls: ['./ibm-home.component.scss']
})
export class IbmHomeComponent implements OnInit {
  ibm: IBM;
  ibmData: IBM[] = [];
  ibmDate: IBMDate[] = [];
  btnSortHigh: string = 'sort by high price';
  bestSellerDate: string = ''
  bestShoppingDate: string = ''
  error = '';
  success = '';
  
  constructor(private IbmService: IbmService) {
  }

  ngOnInit(): void {
    this.getIbm();

  }

  
  getIbm(): void {
    debugger;
    this.IbmService
    .getAll()
    .subscribe(
      (data:IBMDate[] ) => {
        this.ibmDate = data;
      //   let thedata=JSON.stringify(data);         
      //  let jsonObj: any = JSON.parse(thedata) as IBM; 
      //     this.ibm=jsonObj;
      
        this.success = 'Operation success'
      },
      (err) => {
        console.log(err)
        this.error = err.message;
      }
    );
    const getBestShoppingDate =  this.ibmDate.reduce((a,b)=>((a.date.close)>(b.date.close))?b:a); //when the close is the lowest
    this.bestShoppingDate = Object.keys(this.ibmDate).find(key => this.ibmDate[key] === getBestShoppingDate);
    const getBestSellerDate =  this.ibmDate.reduce((a,b)=>((a.date.close)<(b.date.close))?b:a)//when the close is the highest
    this.bestShoppingDate = Object.keys(this.ibmDate).find(key => this.ibmDate[key] === getBestSellerDate);
  }

  sortByHighPrice()
  {
    Object.values(this.ibmDate).sort((a, b)=> a.date.high-b.date.high);
  }
}
