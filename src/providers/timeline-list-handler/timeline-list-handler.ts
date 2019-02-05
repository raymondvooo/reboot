import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TimelineListHandlerProvider {

  filePathTimelineData = 'assets/data/list.json';

  constructor(public http: HttpClient) {
  }

  fetchTimelineData() {

    return this.http.get(this.filePathTimelineData);

  }

}
