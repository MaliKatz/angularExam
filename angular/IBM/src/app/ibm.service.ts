import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

import { map } from 'rxjs/operators';

import { IBMDate } from './ibm';

@Injectable({
  providedIn: 'root'
})
export class IbmService {
  
  baseUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo';

  constructor(private http : HttpClient) {}

  getAll() {
   // return this.http.get(this.baseUrl).pipe(map(response => response.json()));

    return this.http.get(this.baseUrl).pipe(
      map((res: IBMDate) => {
        // return res['Time Series (Daily)'].map(item=>{
  
        //  open : item.Id,
        //  high : item.Name
        // });
        return res['Time Series (Daily)'] 
        ;
    })
    );
  }
}
