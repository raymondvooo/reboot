import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Segment } from 'ionic-angular';

@Component({
  selector: 'timeline-child-sublist',
  templateUrl: 'timeline-child-sublist.html'
})
export class TimelineChildSublistComponent {

  somenumber: number = 0

  @Input() segmentValue: number;

  constructor() {
    console.log(this.segmentValue)
  }

  public childList: any[] = [
    {
      indexValue: 0,
      titleSubject: 'Understanding the process of separating'
    },
    {
      indexValue: 0,
      titleSubject: 'Completing my paperwork'
    },
    {
      indexValue: 0,
      titleSubject: 'Engaging VA to access benefits'
    },
    {
      indexValue: 1,
      titleSubject: 'Find something to do'
    },
    {
      indexValue: 1,
      titleSubject: 'Re-establishing and creating relationships'
    },
    {
      indexValue: 1,
      titleSubject: 'Balancing finances'
    },
    {
      indexValue: 2,
      titleSubject: 'Recognizing and addressing mental health needs'
    },
    {
      indexValue: 2,
      titleSubject: 'VA Health Care'
    },
    {
      indexValue: 2,
      titleSubject: 'Seeking support for acute health event'
    },
    {
      indexValue: 3,
      titleSubject: 'Acquiring the appropriate education, new skills, and credentials'
    },
    {
      indexValue: 3,
      titleSubject: 'Finding the right job'
    },
    {
      indexValue: 4,
      titleSubject: 'Maintaining my financial, social, and emotional health'
    },
    {
      indexValue: 4,
      titleSubject: 'Starting, growing, or taking care of my family'
    },
    {
      indexValue: 4,
      titleSubject: 'Connecting with, and serving my community'
    },
  ]

}
