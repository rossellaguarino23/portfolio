import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { BehaviorSubject, debounceTime, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-hello',
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss',
})
export class HelloComponent {
  valueX = 50;
  readonly value = new BehaviorSubject(this.valueX);
  readonly gradientX = new ReplaySubject(1);

  constructor() {
    this.gradientX.next(50 + '%');
    this.value.pipe(debounceTime(50)).subscribe((next) => {
      this.gradientX.next(next + '%');
    });
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    let p = 100 * (event.clientX / document.body.clientWidth);
    this.valueX = (50 + p) / 2;
    this.value.next(this.valueX);
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.valueX = 50;
    this.value.next(50);
  }
}
