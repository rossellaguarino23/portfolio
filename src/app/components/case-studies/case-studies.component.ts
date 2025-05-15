import { Component } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  imports: [],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss',
})
export class CaseStudiesComponent {
  caseStudies: ICaseStudy[] = [
    {
      title: 'BladderBoss',
      texts: [
        'An innovative mobile healthcare app that delivers a custom 8-week program, tailor-made to reduce the impact of OAB.',
        'A seamless blend of design and functionality to maintain user engagement.',
      ],
      folder: 'bladder-boss',
      color: 'rgb(223, 239, 215)',
    },
    {
      title: 'Boardmatch - Training',
      texts: [
        'An adaptable responsive platform designed to provide comprehensive training resources for non-profit board members.',
        'Developed using Salesforce Experience Cloud',
      ],
      folder: 'boardmatch',
      color: 'rgb(255, 221, 210)',
    },
    {
      title: 'Internal Financial Operations Platform',
      texts: [
        'This project, designed for top-notch financial organisations, aimes to redesign an internal dashboard to improve usability, enhance data accessibility, and increase employee efficiency.',
      ],
      folder: 'financial-corp',
      color: 'rgb(227, 251, 255)',
    },
  ];
}

export interface ICaseStudy {
  title: string;
  texts: string[];
  folder: string;
  color: string;
}
