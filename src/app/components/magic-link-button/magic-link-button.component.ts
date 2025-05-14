import { Component, HostListener, input } from '@angular/core';

@Component({
  selector: 'app-magic-link-button',
  imports: [],
  templateUrl: './magic-link-button.component.html',
  styleUrl: './magic-link-button.component.scss',
})
export class MagicLinkButtonComponent {
  href = input<string>();
  stars: IStar[] = [];

  constructor() {
    let many = Math.floor(2 + Math.random() * 5);
    this.stars = [];
    for (let i = 0; i < many; i++) {
      let rot = Math.floor(Math.random() * 360);
      this.stars.push({
        actual: {
          left: Math.floor(100 - Math.random() * 200),
          top: (Math.random() < 0.5 ? 1 : -1) * 15,
          rot: rot,
          transform: 'rotate(' + rot + 'deg)',
        },
        emoji: Math.random() < 0.5 ? '🌟' : '⭐',
      });
    }
    console.log(this.stars);
  }

  @HostListener('mouseenter')
  onMouseIn() {
    for (let star of this.stars) {
      if (!star.in) {
        star.in = {
          left: star.actual.left,
          top: star.actual.top,
          rot: star.actual.rot,
          transform: star.actual.transform,
        };
      }
      if (!star.out) {
        let rot = Math.floor(Math.random() * 360);
        star.out = {
          left: star.in.left * 2,
          top: star.in.top * 2,
          rot: rot,
          transform: 'rotate(' + rot + 'deg)',
        };
      }
      star.actual = star.out;
    }
  }

  @HostListener('mouseleave')
  onMouseOut() {
    for (let star of this.stars) {
      if (star.in) {
        star.actual = star.in;
      }
    }
  }
}

export interface IStar {
  emoji: string;
  actual: IStarProp;
  in?: IStarProp;
  out?: IStarProp;
}

export interface IStarProp {
  left: number;
  top: number;
  rot: number;
  transform: string;
}
