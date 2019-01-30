import { Component } from '@angular/core';

/**
 * Generated class for the TimelineChildSublistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timeline-child-sublist',
  templateUrl: 'timeline-child-sublist.html'
})
export class TimelineChildSublistComponent {

  text: string;

  constructor() {
    console.log('Hello TimelineChildSublistComponent Component');
    this.text = 'Hello World';
  }

}
