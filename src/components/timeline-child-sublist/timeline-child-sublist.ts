import { Component, Input } from '@angular/core';

import { TimelineListHandlerProvider } from '../../providers/timeline-list-handler/timeline-list-handler';

@Component({
  selector: 'timeline-child-sublist',
  templateUrl: 'timeline-child-sublist.html'
})
export class TimelineChildSublistComponent {

  @Input() segmentValue: number;
  @Input() userTimelineData: any;

  timelineData: any;

  constructor(public getTimeline: TimelineListHandlerProvider) {
    this.getTimeline.fetchTimelineData()
      .subscribe(data => this.timelineData = data[this.segmentValue].children);
  }

  toggleAccordion(i) {
    this.timelineData[i].isAccordionActive = !this.timelineData[i].isAccordionActive;
  }

}
