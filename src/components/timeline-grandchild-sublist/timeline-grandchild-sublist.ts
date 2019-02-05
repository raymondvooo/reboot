import { Component, Input } from '@angular/core';

import { TimelineListHandlerProvider } from '../../providers/timeline-list-handler/timeline-list-handler';

@Component({
  selector: 'timeline-grandchild-sublist',
  templateUrl: 'timeline-grandchild-sublist.html'
})
export class TimelineGrandchildSublistComponent {

  timelineData: any;

  @Input() segmentValue: number;
  @Input() sectionValue: number;

  constructor(public getTimeline: TimelineListHandlerProvider) {
    this.getTimeline.fetchTimelineData()
      .subscribe(data => this.timelineData = data[this.segmentValue].children[this.sectionValue].children)
  }

  // public grandchildList: any[] = [
  //   {
  //     indexValue: 0,
  //     titleItem: 'Find out your separation date'
  //   },
  //   {
  //     indexValue: 0,
  //     titleItem: 'Complete Pre-Separation Counseling'
  //   },
  //   {
  //     indexValue: 1,
  //     titleItem: 'Prepare a criterion-based Individual Transition Plan (ITP)'
  //   },
  //   {
  //     indexValue: 1,
  //     titleItem: 'Complete a Continuum of Military Service Opportunity Counseling (Required Active Component Only)'
  //   },
  //   {
  //     indexValue: 1,
  //     titleItem: 'Evaluate transferability of military skills to civilian workforce'
  //   },
  //   {
  //     indexValue: 1,
  //     titleItem: 'Complete DoD Standardized Gap Analysis'
  //   },
  //   {
  //     indexValue: 1,
  //     titleItem: 'Document requirements and eligibility for licensure, certification, and apprenticeship'
  //   },
  //   {
  //     indexValue: 1,
  //     titleItem: 'Complete an assessment tool to identify personal interests and leanings regarding career selection'
  //   },
  //   {
  //     indexValue: 1,
  //     titleItem: 'Complete a job application package or receive a job offer letter'
  //   },
  //   {
  //     indexValue: 1,
  //     titleItem: 'Receive a DOL Gold Card and understand post 9/11 Veterans have priority at DOL American Job Centers'
  //   },
  //   {
  //     indexValue: 2,
  //     titleItem: 'Complete the Veteran Affairs (VA) Benefits Briefings I and II'
  //   },
  //   {
  //     indexValue: 2,
  //     titleItem: 'Register on eBenefits'
  //   },
  //   {
  //     indexValue: 3,
  //     titleItem: 'Go to Career Center'
  //   },
  //   {
  //     indexValue: 3,
  //     titleItem: 'Vocational Rehab & Employment'
  //   },
  //   {
  //     indexValue: 4,
  //     titleItem: 'Check out vet center'
  //   },
  //   {
  //     indexValue: 5,
  //     titleItem: 'Open a savings account'
  //   },
  //   {
  //     indexValue: 6,
  //     titleItem: 'Mental Health Care'
  //   },
  //   {
  //     indexValue: 6,
  //     titleItem: 'PTS services'
  //   },
  //   {
  //     indexValue: 6,
  //     titleItem: 'Psychological rehabilitation & recovery services'
  //   },
  //   {
  //     indexValue: 6,
  //     titleItem: 'Veteran Crisis Line'
  //   },
  //   {
  //     indexValue: 6,
  //     titleItem: 'MST counseling'
  //   },
  //   {
  //     indexValue: 6,
  //     titleItem: 'Social work'
  //   },
  //   {
  //     indexValue: 7,
  //     titleItem: 'Managing primary care'
  //   },
  //   {
  //     indexValue: 7,
  //     titleItem: 'Preventative care'
  //   },
  //   {
  //     indexValue: 7,
  //     titleItem: 'Chronic health issues'
  //   },
  //   {
  //     indexValue: 7,
  //     titleItem: 'Prescription services'
  //   },
  //   {
  //     indexValue: 8,
  //     titleItem: 'Emergency Care'
  //   },
  //   {
  //     indexValue: 8,
  //     titleItem: 'Specialized Care'
  //   },
  //   {
  //     indexValue: 8,
  //     titleItem: 'Pharmacy'
  //   },
  //   {
  //     indexValue: 9,
  //     titleItem: 'Skills Translater - translating my military skills'
  //   },
  //   {
  //     indexValue: 9,
  //     titleItem: 'Career Center'
  //   },
  //   {
  //     indexValue: 9,
  //     titleItem: 'Resume builder services'
  //   },
  //   {
  //     indexValue: 9,
  //     titleItem: 'GI Bill'
  //   },
  //   {
  //     indexValue: 9,
  //     titleItem: 'Vocational Rehab, Education & Employment Counseling'
  //   },
  //   {
  //     indexValue: 9,
  //     titleItem: 'Build my professional network'
  //   },
  //   {
  //     indexValue: 10,
  //     titleItem: 'Veterans Job Bank'
  //   },
  //   {
  //     indexValue: 10,
  //     titleItem: 'VA employment'
  //   },
  //   {
  //     indexValue: 10,
  //     titleItem: 'Building my professional reputation'
  //   },
  //   {
  //     indexValue: 11,
  //     titleItem: 'VA Mental Health Center'
  //   },
  //   {
  //     indexValue: 11,
  //     titleItem: 'Veterans pension'
  //   },
  //   {
  //     indexValue: 11,
  //     titleItem: 'Disability compensation'
  //   },
  //   {
  //     indexValue: 11,
  //     titleItem: 'Engaging VA to access benefits and services'
  //   },
  //   {
  //     indexValue: 12,
  //     titleItem: 'Revisit Housing'
  //   },
  //   {
  //     indexValue: 12,
  //     titleItem: 'VA Home Loan/Refinancing'
  //   },
  //   {
  //     indexValue: 12,
  //     titleItem: 'Planning and saving for my retirement'
  //   },
  //   {
  //     indexValue: 12,
  //     titleItem: 'Life Insurance'
  //   },
  //   {
  //     indexValue: 13,
  //     titleItem: 'myVA Communities'
  //   },
  //   {
  //     indexValue: 13,
  //     titleItem: 'VSOs'
  //   }
  // ]

}
