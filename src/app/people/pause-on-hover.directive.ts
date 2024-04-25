import { Directive, HostListener } from '@angular/core';
import { TimerService } from './timer.service';

@Directive({
  selector: '[pause-on-hover]',
  standalone: true
})
export class PauseOnHoverDirective {
  @HostListener("mouseenter") onMouseEnter() {
    this.timer.pause();
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.timer.resume();
  }
  constructor(private timer: TimerService) { }
}
