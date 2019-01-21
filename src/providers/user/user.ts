import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
  
import { ENV }  from '@app/env';
import { StorageProvider } from '../storage/storage'
    
/*  
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/ 
@Injectable()
export class UserProvider {

  user: any = {
    first: "Peter",
    last: "Horton",
    email: "peter@email.com",
    maritalStatus: "Widowed",
    employmentStatus: "Unemployed",
    lastEmployed: "1/1/2010",
    branch: "",
    activeStatus: "",
    separationDate: "",
    serviceDisability: "",
    disabilityRating: "",
    militaryRank: "",
    mosNec: "",
  }

  requestUrl: string = ENV.url

  userData: any = {};

  constructor(public http: HttpClient, private storage: StorageProvider) {
    console.log('Hello UserProvider Provider');
  }

  sendReg(user) {
      console.log('sendReg() runs', user)
      console.log(this.requestUrl)
      return this.http.post(this.requestUrl + '/appUsers', user)
  }

  //update data from wizard page and patch user model
  updateUserModel(data: any, id) {
    let httpHeader = {headers: new HttpHeaders({cacheKey: 'user'})}
    let token = window.sessionStorage.getItem('token');
    console.log(data, "#1-updateUserModel") 
    this.storage.UpdateStorageObject('user', data)
    return this.http.patch(this.requestUrl + '/appUsers/' + id + '?access_token=' + token , data, httpHeader)
  }

  login(creds) {
    let request = this.http.post(this.requestUrl + '/appUsers/login', creds)
    request.subscribe(res => {
        this.user = res;
        this.storage.saveToStorage('user', res).then(val => console.log(val))
      })
    return request
  }
  
  logoutUser(token:any) {
    let httpHeader = {headers: new HttpHeaders({cacheKey: 'user'})}
    console.log('onservice-logout')
    this.storage.emptyStorage();
    return this.http.post(this.requestUrl + "/appUsers/logout", token, httpHeader )
  }
  
  getUser(id) {
    let httpHeader = {headers: new HttpHeaders({cacheKey: 'user'})}
    let token = window.sessionStorage.getItem('token');
    return this.http.get(this.requestUrl + '/appUsers/' + id + '?access_token=' + token, httpHeader)
  }

  getUserChart(id) {
    let httpHeader = {headers: new HttpHeaders({cacheKey: 'chart'})}
    let token = window.sessionStorage.getItem('token');
    return this.http.get(this.requestUrl + '/appUsers/' + id + '/charts?access_token=' + token, httpHeader)
  }
}
