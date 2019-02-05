import { Component, Input } from '@angular/core';

import { TimelineListHandlerProvider } from '../../providers/timeline-list-handler/timeline-list-handler';

@Component({
  selector: 'timeline-grandchild-sublist',
  templateUrl: 'timeline-grandchild-sublist.html'
})
export class TimelineGrandchildSublistComponent {

  timelineData: any;
  currentStep: number = 0;

  @Input() segmentValue: number;
  @Input() sectionValue: number;

  constructor(public getTimeline: TimelineListHandlerProvider) {
    this.getTimeline.fetchTimelineData()
      .subscribe(data => this.timelineData = data[this.segmentValue].children[this.sectionValue].children)
  }

}
