import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'timeline-child-sublist',
  templateUrl: 'timeline-child-sublist.html'
})
export class TimelineChildSublistComponent {

  @Input() testInput: number;

  constructor() {
  }

  public childList: any[] = [
    {
      title: 'test0'
    },
    {
      title: 'test1'
    },
    {
      title: 'test2'
    },
    {
      title: 'test3'
    },
    {
      title: 'test4'
    }
  ]

}
