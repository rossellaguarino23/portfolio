import { Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { CaseStudiesComponent } from '../../components/case-studies/case-studies.component';
import { HelloComponent } from '../../components/hello/hello.component';
import { SkillCarouselComponent } from '../../components/skill-carousel/skill-carousel.component';

@Component({
  selector: 'app-home',
  imports: [HelloComponent, CaseStudiesComponent, SkillCarouselComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
