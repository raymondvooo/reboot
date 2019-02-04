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

  constructor(public http: HttpClient, private _storage: StorageProvider) {
    console.log('Hello UserProvider Provider');
  }
  sendReg(user) {
    console.log('sendReg() runs', user, this.requestUrl)
    return this.http.post(this.requestUrl + '/appUsers', user)
  }

  //update data from wizard page and patch user model
  updateUserModel(data: any,) {
    let httpHeader = {headers: new HttpHeaders({cacheKey: 'user'})}
    const creds = this.getCredentials()
    console.log(data, "#1-updateUserModel") 
    this._storage.UpdateStorageObject('user', data)
    return this.http.patch(this.requestUrl + '/appUsers/' + creds.userId + '?access_token=' + creds.token, data, httpHeader)
  }

  getCredentials() {
    let userCreds: any = {};
    userCreds.token = window.sessionStorage.getItem("token");
    userCreds.userId = window.sessionStorage.getItem("userId");
    return userCreds; 
  }

  setCredentials(resData){
    window.sessionStorage.setItem( "token", resData.token);
    window.sessionStorage.setItem( "userId", resData.userId);
  }

  login(creds) {
    return this.http.post(this.requestUrl + '/appUsers/login', creds)
  }

  logoutUser() {
    let httpHeader = {headers: new HttpHeaders({cacheKey: 'user'})}
    const creds = this.getCredentials() 
    console.log('onservice-logout')
    this._storage.emptyStorage();
    return this.http.post(this.requestUrl + "appUsers/logout?access_token=" + creds.token, {}, httpHeader);
  }

  getUser() {
    let httpHeader = {headers: new HttpHeaders({cacheKey: 'user'})}
    const creds = this.getCredentials() 
    return this.http.get(this.requestUrl + 'appUsers/' + this.getCredentials().userId + '?access_token=' + creds.token, httpHeader);
  }

  getUserChart() {
    let httpHeader = {headers: new HttpHeaders({cacheKey: 'chart'})}
    const creds = this.getCredentials()
    return this.http.get(this.requestUrl + 'appUsers/' + this.getCredentials().userId + '/charts?access_token=' + creds.token, httpHeader);
  }

  saveUserToStorage(user) {
    this._storage.saveToStorage('user', user)
  }


}

