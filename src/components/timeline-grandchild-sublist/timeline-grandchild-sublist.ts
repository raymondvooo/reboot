import { Component, Input } from '@angular/core';

import { TimelineListHandlerProvider } from '../../providers/timeline-list-handler/timeline-list-handler';

@Component({
  selector: 'timeline-grandchild-sublist',
  templateUrl: 'timeline-grandchild-sublist.html'
})
export class TimelineGrandchildSublistComponent {

  @Input() segmentValue: number;
  @Input() sectionValue: number;
  @Input() userTimelineData: any;

  timelineData: any;

  constructor(public getTimeline: TimelineListHandlerProvider) {
    this.getTimeline.fetchTimelineData()
      .subscribe(data => this.timelineData = data[this.segmentValue].children[this.sectionValue].children)
  }

  checkboxChange(event) {
    console.log(event.checked)
  }

}
