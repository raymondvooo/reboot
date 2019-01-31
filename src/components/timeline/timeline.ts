import { Component, Input } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html'
})
export class TimelineComponent {

  constructor() {
    console.log('Hello TimelineComponent Component');
  }

  public testList: any[] = [
    {
      id: 'gettingOut',
      childrenSection: [
        {
          title: 'Understanding the Process of Separating',
          grandchildrenItems: [
            {
              name: 'Find out your separation date'
            },
            {
              name: 'Complete Pre-Separation Counseling'
            }
          ]
        },
        {
          title: 'Completing My Paperwork',
          grandchildrenItems: [
            {
              name: 'Prepare a criterion-based Individual Transition Plan (ITP)'
            },
            {
              name: 'Complete a Continuum of Military Service Opportunity Counseling (Required Active Component Only)'
            },
            {
              name: 'Evaluate transferability of military skills to civilian workforce'
            },
            {
              name: 'Complete DoD Standardized Gap Analysis'
            },
            {
              name: 'Document requirements and eligibility for licensure, certification, and apprenticeship'
            },
            {
              name: 'Complete an assessment tool to identify personal interests and leanings regarding career selection'
            },
            {
              name: 'Complete a job application package or receive a job offer letter'
            },
            {
              name: 'Receive a DOL Gold Card and understand post 9/11 Veterans have priority at DOL American Job Centers'
            }
          ]
        },
        {
          title: 'Engaging VA to Access Benefits',
          grandchildrenItems: [
            {
              name: 'Complete the Veteran Affairs (VA) Benefits Briefings I and II'
            },
            {
              name: 'Register on eBenefits'
            }
          ]
        }
      ]
    },
    {
      id: 'startingUp',
      childrenSection: [
        {
          title: 'Find Something to Do',
          grandchildrenItems: [
            {
              name: 'Go to Career Center'
            },
            {
              name: 'Vocational Rehab & Employment'
            }
          ]
        },
        {
          title: 'Re-establishing and creating relationships',
          grandchildrenItems: [
            {
              name: 'Check out vet center'
            }
          ]
        },
        {
          title: 'Balancing finances',
          grandchildrenItems: [
            {
              name: 'Open a savings account'
            }
          ]
        }
      ]
    }
  ]

  toggleSection(i, j) {
    this.testList[i].childrenSection[j].open = !this.testList[i].childrenSection[j].open
  }
  
}

@Component({
  selector: 'timeline-item',
  template: '<ng-content></ng-content>'
})
export class TimelineItemComponent {
  constructor(){

  }
}

@Component({
  selector: 'timeline-time',
  template: '<span>{{time.subtitle}}</span><span>{{time.title}}</span>'
})
export class TimelineTimeComponent {
  constructor(){

  }
}
