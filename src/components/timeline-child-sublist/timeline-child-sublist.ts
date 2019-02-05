import { Component, Input } from '@angular/core';

import { TimelineListHandlerProvider } from '../../providers/timeline-list-handler/timeline-list-handler';

@Component({
  selector: 'timeline-child-sublist',
  templateUrl: 'timeline-child-sublist.html'
})
export class TimelineChildSublistComponent {

  timelineData: any;

  @Input() segmentValue: number;

  constructor(public getTimeline: TimelineListHandlerProvider) {
    this.getTimeline.fetchTimelineData()
      .subscribe(data => this.timelineData = data[this.segmentValue].children);
  }

  toggleAccordion(i) {

    this.timelineData[i].isAccordionActive = !this.timelineData[i].isAccordionActive;

  }

  // public childList: any[] = [
  //   {
  //     indexValue: 0,
  //     subIndexValue: 0,
  //     titleSubject: 'Understanding the process of separating'
  //   },
  //   {
  //     indexValue: 0,
  //     subIndexValue: 1,
  //     titleSubject: 'Completing my paperwork'
  //   },
  //   {
  //     indexValue: 0,
  //     subIndexValue: 2,
  //     titleSubject: 'Engaging VA to access benefits'
  //   },
  //   {
  //     indexValue: 1,
  //     subIndexValue: 3,
  //     titleSubject: 'Find something to do'
  //   },
  //   {
  //     indexValue: 1,
  //     subIndexValue: 4,
  //     titleSubject: 'Re-establishing and creating relationships'
  //   },
  //   {
  //     indexValue: 1,
  //     subIndexValue: 5,
  //     titleSubject: 'Balancing finances'
  //   },
  //   {
  //     indexValue: 2,
  //     subIndexValue: 6,
  //     titleSubject: 'Recognizing and addressing mental health needs'
  //   },
  //   {
  //     indexValue: 2,
  //     subIndexValue: 7,
  //     titleSubject: 'VA Health Care'
  //   },
  //   {
  //     indexValue: 2,
  //     subIndexValue: 8,
  //     titleSubject: 'Seeking support for acute health event'
  //   },
  //   {
  //     indexValue: 3,
  //     subIndexValue: 9,
  //     titleSubject: 'Acquiring the appropriate education, new skills, and credentials'
  //   },
  //   {
  //     indexValue: 3,
  //     subIndexValue: 10,
  //     titleSubject: 'Finding the right job'
  //   },
  //   {
  //     indexValue: 4,
  //     subIndexValue: 11,
  //     titleSubject: 'Maintaining my financial, social, and emotional health'
  //   },
  //   {
  //     indexValue: 4,
  //     subIndexValue: 12,
  //     titleSubject: 'Starting, growing, or taking care of my family'
  //   },
  //   {
  //     indexValue: 4,
  //     subIndexValue: 13,
  //     titleSubject: 'Connecting with, and serving my community'
  //   },
  // ]

  // toggleAccordion(i, subIndexValue) {
  //   console.log(subIndexValue)
  //   this.childList[i].isAccordionActive = !this.childList[i].isAccordionActive
  // }

}
