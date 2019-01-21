import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { ENV } from '@app/env';
import { StorageProvider } from '../storage/storage'
import { toObservable } from '@angular/forms/src/validators';
import { of as observableOf } from 'rxjs/observable/of'


@Injectable()
export class ChartProvider {
  
  allResults: any;
  chartSections: any;
  requestUrl: string = ENV.url + '/charts?access_token=' + sessionStorage.getItem('token')
  testChart: any = [];
  chartHistory;
  mostRecentChart;
  assessmentChartData;


  constructor(public http: HttpClient, private _storage: StorageProvider) { }

  addAssessment(assessment) {
    let httpHeader = {headers: new HttpHeaders({cacheKey: 'charts'})}
    let request = this.http.post(this.requestUrl, assessment, httpHeader);
    request.subscribe(res => {
      this._storage.addToStorageArray('charts', assessment)
    })
    return request
  }

  getChartHistory() {
    let httpHeader = {headers: new HttpHeaders({cacheKey: 'charts'})}
    let request = this.http.get(this.requestUrl, httpHeader)
    request.subscribe( res => {
      this._storage.saveToStorage('charts', res)
    })
    return request.map((res:any[])=>{
        //Initialized an array to store the values.
        return res.map( x => {
          //Maps the response from the API to a format that the history page will accept.
          return {
            date: moment(x.date).format('MM/DD/YYYY'), 
            value: [
              x.data.Career, 
              x.data.Finance, 
              x.data['Personal Growth'], 
              x.data.Health, 
              x.data.Family, 
              x.data.Relationships, 
              x.data['Social Life'], 
              x.data.Attitude
            ]
          }
        })
      })
  }

  mostRecentData() {
    //calls the API to get the assesments from the db
    let httpHeader = {headers: new HttpHeaders({cacheKey: 'charts'})}
    return this.http.get(this.requestUrl, httpHeader).map((res:any[])=>{
      //Returns all data, recent gets the last or most recent item from the DB
      try {
      let recent = res[res.length-1].data
      //destructures the response object and places it into an array so that the chart can consume it.
      let mostRecentChart = [recent.Career, recent.Finances, recent["Personal Growth"], recent.Health, recent.Family, recent.Relationships, recent["Social Life"], recent.Attitude]
      return mostRecentChart
      } catch(e) {
        return [];
      }
    })
  }

  
}
