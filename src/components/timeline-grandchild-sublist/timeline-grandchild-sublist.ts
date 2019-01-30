import { Component } from '@angular/core';

/**
 * Generated class for the TimelineGrandchildSublistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timeline-grandchild-sublist',
  templateUrl: 'timeline-grandchild-sublist.html'
})
export class TimelineGrandchildSublistComponent {

  text: string;

  constructor() {
    console.log('Hello TimelineGrandchildSublistComponent Component');
    this.text = 'Hello World';
  }

}
