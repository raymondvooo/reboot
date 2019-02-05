import { Component, Input, Output } from '@angular/core';

import { TimelineListHandlerProvider } from '../../providers/timeline-list-handler/timeline-list-handler';

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html'
})
export class TimelineComponent {

  subject: number = 0;
  timelineData: any;

  constructor(public getTimeline: TimelineListHandlerProvider) {

    this.getTimeline.fetchTimelineData()
      .subscribe(data => this.timelineData = data);

  }
  
}
