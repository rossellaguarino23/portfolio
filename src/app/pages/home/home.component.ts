import { Component } from '@angular/core';
import { HelloComponent } from '../../components/hello/hello.component';
import { CaseStudiesComponent } from '../../components/case-studies/case-studies.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { AboutComponent } from '../../components/about/about.component';
import { ExperienceComponent } from '../../components/experience/experience.component';

@Component({
  selector: 'app-home',
  imports: [HelloComponent, CaseStudiesComponent, SkillsComponent, ExperienceComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
