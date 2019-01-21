import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { fromPromise } from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import { ToastController } from 'ionic-angular';
// import * as moment from 'moment';



const STORAGE_REQ_KEY = 'cachedReq';

@Injectable()
export class StorageProvider {

  constructor(private storage: Storage, private toastCtrl: ToastController, private _http: HttpClient) {}


  storeRequest(req) {
    let toast = this.toastCtrl.create({
      message: `Your data is stored locally because you seem to be offline.`,
      duration: 3000,
      position: 'bottom'
    });
    toast.present()
 
    return this.storage.get(STORAGE_REQ_KEY)
      .then(storedOperations => {
        let action = {
          url: req.url,
          method: req.method,
          body: req.body || {},
          params: req.params || {},
          cacheKey: req.headers.get('cacheKey')
          // date:  moment().format('MMMM Do YYYY, h:mm:ss a'),
          // id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
        }
        let storedObj
        if (storedOperations) {
          storedObj = storedOperations.concat([action])
        } else {
          storedObj = [action];
        }
        return this.storage.set(STORAGE_REQ_KEY, storedObj)
      });
  }

  completeCachedRequests() {
    this.retrieveFromStorage(STORAGE_REQ_KEY)
      .then(storedReqs => {
        if(storedReqs && storedReqs.length > 0) {
          storedReqs.forEach((req, i) => {
            this._http.request(req.method, req.url, {body: req.body, params: req.params})
              .subscribe()
            if (i === storedReqs.length -1) {
              this.deleteFromStorage(STORAGE_REQ_KEY)
            }
          });
        }
      })
  }


  saveToStorage(key, value) {
    return this.storage.set(key, value)
  }

  saveToStorageObs(key, value) {
    return fromPromise(this.storage.set(key, value));
  }

  retrieveFromStorage(key) {
    return this.storage.get(key)
  }

  retrieveFromStorageObs(key) {
    return (fromPromise(this.storage.get(key)))
  }

  deleteFromStorage(key) {
    return this.storage.remove(key)
  }

  addToStorageArray(key, value) {
    return this.storage.get(key)
      .then((val) => {  
        if(val) {
          value = val.concat([value])
          return this.storage.set(key, value)
        } 
          return this.storage.set(key, [value])
      })
  }

  UpdateStorageObject(key, value) {
    return this.storage.get(key)
    .then((val) => {  
      if(val) {
        value = {...value, ...val}
        return this.storage.set(key, value)
      } 
        return this.storage.set(key, value)
    })
  }

  emptyStorage() {
    this.storage.clear()
  }

}
