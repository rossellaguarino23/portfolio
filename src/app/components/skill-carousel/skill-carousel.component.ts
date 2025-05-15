import { Component } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-skill-carousel',
  imports: [SkillsComponent],
  templateUrl: './skill-carousel.component.html',
  styleUrl: './skill-carousel.component.scss',
})
export class SkillCarouselComponent {
}
