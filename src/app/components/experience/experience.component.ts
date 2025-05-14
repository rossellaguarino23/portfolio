import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: IExperience[] = [
    {
      title: 'UX/UI & Software Designer',
      company: 'TEKenable',
      period: 'Jan 2022 - Jul 2024',
    },
    {
      title: 'Web & Product Designer',
      company: 'Freelance',
      period: 'Jul 2020 - Dec 2021',
    },
  ];
}

export interface IExperience {
  title: string;
  company: string;
  period: string;
}
