import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TimelineListHandlerProvider {

  filePathTimelineData = 'assets/data/list.json';
  userTimelineData = 'assets/data/userList.json';

  constructor(public http: HttpClient) {
  }

  fetchTimelineData() {
    return this.http.get(this.filePathTimelineData);
  }

  fetchUserTimelineData() {
    return this.http.get(this.userTimelineData);
  }

}
