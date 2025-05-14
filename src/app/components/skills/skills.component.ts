import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    'UI Design',
    'Visual Design',
    'Software Design',
    'Information Architecture',
    'Design Systems',
    'Wireframing',
    'Interactive Prototyping',
    'High-Fidelity Mockups',
    'HTML/CSS',
    'No-Code/Low-Code',
    'CMS',
    'Accessibility',
    'Cross-Browser Compatibility',
    'Branding & Logo Design',
    'User Centered Design',
    'User Research',
    'User Testing',
  ];
}
