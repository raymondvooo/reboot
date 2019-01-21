import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concatMapTo'
import { fromPromise } from 'rxjs/observable/fromPromise';
import { NetworkProvider, ConnectionStatusEnum } from '../../providers/network/network';
import { ENV } from '@app/env';
import { StorageProvider } from '../../providers/storage/storage';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class OfflineInterceptor implements HttpInterceptor {
  constructor(private _network: NetworkProvider, private _storage: StorageProvider ){}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      if (!(req.headers.get('cacheKey'))) {
        return next.handle(req)
      }
      if (this._network.previousStatus === ConnectionStatusEnum.Offline) {
        let data;
        switch (req.method) {
          case 'GET':
          return this._storage.retrieveFromStorageObs(req.headers.get('cacheKey'))
            .mergeMap(storedItem => {
              data = storedItem 
              return data? this.createNewRequest(req, data): next.handle(req)
            })
          // case "POST":
          //   if(req.url.includes('appUsers/logout')) {
          //     this._storage.emptyStorage()
          //   }
          default:
          this._storage.storeRequest(req)
          return this.createNewRequest(req, data)
        }
      } else {
        req = req.clone({headers: req.headers.delete('cacheKey')})
        return next.handle(req);
      }
  }


  createNewRequest(req, data) {
    let event = new HttpResponse({
      body: data,
      status: 200,
      statusText: 'request cached. retrieved local data',
      url: req.url,
    })

    let Obs = Observable.create((observer:any) => {
      observer.next(event)
  })

    return Obs
  }

}