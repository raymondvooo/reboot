import { Component, Input } from '@angular/core';

/**
 * Generated class for the TimelineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html'
})
export class TimelineComponent {

  text: string;

  public list = [
    {
      title: 'Getting Out',
      checkmark: false,
      itemExpand: false,
      dot: true,
      topLevel: true,
      children: [
        {
          title: 'Understanding the process of separating',
          checkmark: false,
          children: [
            {
              title: 'Find out your separation date',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Complete Pre-Separation Counseling',
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        },
        {
          title: 'Completing my paperwork',
          checkmark: false,
          children: [
            {
              title: 'Prepare a criterion-based Individual Transition Plan (ITP)',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Complete a Continuum of Military Service Opportunity Counseling (Required Active Component Only)',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Evaluate transferability of military skills to civilian workforce',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Complete DoD Standardized Gap Analysis',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Document requirements and eligibility for licensure, certification, and apprenticeship',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Complete an assessment tool to identify personal interests and leanings regarding career selection',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Complete a job application package or receive a job offer letter',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Receive a DOL Gold Card and understand post 9/11 Veterans have priority at DOL American Job Centers',
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        },
        {
          title: 'Engaging VA to access benefits',
          checkmark: false,
          children: [
            {
              title: 'Complete the Veteran Affairs (VA) Benefits Briefings I and II',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Register on eBenefits',
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        }
      ]
    },
    {
      title: 'Starting Up',
      checkmark: false,
      topLevel: true,
      itemExpand: false,
      dot: true,
      children: [
        {
          title: 'Find something to do',
          children: [
            {
              title: 'Go to Career Center',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Vocational Rehab & Employment',
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        },
        {
          title: 'Re-establishing and creating relationships',
          checkmark: false,
          children: [
            {
              title: 'Check out vet center',
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        },
        {
          title: 'Balancing finances',
          checkmark: false,
          children: [
            {
              title: 'Open a savings account',
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        }
      ]
    },
    {
      title: 'Taking care of myself',
      checkmark: false,
      itemExpand: false,
      topLevel: true,
      dot: true,
      children: [
        {
          title: 'Recognizing and addressing mental health needs',
          checkmark: false,
          children: [
            {
              title: 'Mental Health Care',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'PTS services',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Psychological rehabilitation & recovery services',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Veteran Crisis Line',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'MST counseling',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Social work',
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        },
        {
          title: 'VA Health Care',
          checkmark: false,
          children: [
            {
              title: 'Managing primary care',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Preventative care',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Chronic health issues',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Prescription services',
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        },
        {
          title: 'Seeking support for acute health event',
          checkmark: false,
          children: [
            {
              title: 'Emergency Care',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Specialized Care',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Pharmacy',
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        }    
      ]
    },
    {
      title: 'Reinventing myself',
      checkmark: false,
      itemExpand: false,
      dot: true,
      topLevel: true,
      children: [
        {
          title: 'Acquiring the appropriate education, new skills, and credentials',
          checkmark: false,
          children: [
            {
              title: 'Skills Translater - translating my military skills',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Career Center',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Resume builder services',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'GI Bill',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Vocational Rehab, Education & Employment Counseling',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Build my professional network',
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        },
        {
          title: 'Finding the right job',
          checkmark: false,
          children: [
            {
              title: 'Veterans Job Bank',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'VA employment',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Building my professional reputation',
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        }
      ]
    },
    {
      title: 'Putting down roots',
      checkmark: false,
      itemExpand: false,
      dot: true,
      topLevel: true,
      children: [
        {
          title: 'Maintaining my financial, social, and emotional health',
          checkmark: false,
          children: [
            {
              title: 'VA Mental Health Center',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: "Veteran's pension",
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Disability compensation',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Engaging VA to access benefits and services',
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        },
        {
          title: 'Starting, growing, or taking care of my family',
          checkmark: false,
          children: [
            {
              title: 'Revisit Housing',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'VA Home Loan/Refinancing',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Planning and saving for my retirement',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Life Insurance',
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        },
        {
          title: 'Connecting with, and serving my community',
          checkmark: false,
          children: [
            {
              title: 'myVA Communities',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: "VSO's",
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        }
      ]
    },
    {
      title: 'Retiring',
      checkmark: false,
      itemExpand: false,
      dot: true,
      topLevel: true,
      children: [
        {
          title: 'Taking care of my own heath',
          checkmark: false,
          children: [
            {
              title: 'VA Health Center',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: "Audiology",
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Blind & Vision Rehab',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Specialized care',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: "Participating in meaningful activities",
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        },
        {
          title: 'Finding additional sources of income',
          checkmark: false,
          children: [
            {
              title: "VA Veteran's Pension",
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: "Disability Compensation",
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        }
      ]
    },
    {
      title: 'Aging',
      checkmark: false,
      itemExpand: false,
      dot: true,
      topLevel: true,
      children: [
        {
          title: 'Managing my declining heath',
          checkmark: false,
          children: [
            {
              title: 'Planning for longer term care',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Holistic end of the planning',
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        },
        {
          title: 'Adapting my support network to my new needs',
          checkmark: false,
          children: [
            {
              title: 'Home health care',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Geriatric & extended health',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: 'Caregiver services',
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        }
      ]
    },
    {
      title: 'Dying',
      checkmark: false,
      itemExpand: false,
      dot: true,
      topLevel: true,
      children: [
        {
          title: 'Deciding how and where to be memorialized',
          checkmark: false,
          children: [
            {
              title: 'Burial benefits/allowances',
              checkmark: true,
              completed: false,
              children: []
            },
            {
              title: "Survivor's benefits, grief counseling",
              checkmark: true,
              completed: false,
              children: []
            }
          ]
        }
      ]
    }                  
  ];

  @Input('endIcon') endIcon = "ionic";

  constructor() {
    console.log('Hello TimelineComponent Component');
    this.text = 'Hello World';
  }
  
  toggleItem(item){
    if(item.itemExpand){
      item.itemExpand = false;
    } else {
      item.itemExpand = true;
    }
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
