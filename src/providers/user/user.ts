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

  userData: any = {
    firstName: "",
    lastName: "",
    email: "",

    maritalStatus: "",
    employmentStatus: "",
    lastEmployed: "",

    militaryBranch: "",
    veteranOrActive: "",
    separationDate: "",
    militaryRank: "",
    disabilityStatus: "",
    disabilityPercentage: "",
    officerRank: "",
    enlistingPay: "",
    codeIdentifier: ""
  }

  requestUrl: string = ENV.url
  userName: any = "Maurice";


  constructor(public http: HttpClient, private storage: StorageProvider) {
    console.log('Hello UserProvider Provider');
  }
  sendReg(user) {
      console.log('sendReg() runs', user)
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

  getCredentials(){
    let userCredentials: any = {};
    userCredentials.token = sessionStorage.getItem('token');
    userCredentials.userId = sessionStorage.getItem('userId');
    return userCredentials;
  }

  login(creds) {
    let request = this.http.post(this.requestUrl + '/appUsers/login', creds)
    request.subscribe(res => {
        this.userData = res;
        this.storage.saveToStorage('user', res)
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

