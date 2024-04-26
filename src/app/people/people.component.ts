import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID, PlatformRef } from '@angular/core';
import { RandomUserService } from './services/random-user.service';
import { TimerService } from './services/timer.service';
import { PauseOnHoverDirective } from './directives/pause-on-hover.directive';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [PauseOnHoverDirective],
  providers: [TimerService, RandomUserService],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleComponent {
  randomUser = this.randomUserService.randomUser;

  constructor(
    private randomUserService: RandomUserService,
    private timer: TimerService,
    @Inject(PLATFORM_ID) platform: PlatformRef
  ) {
    // Timer should not run during SSG. Use isNextRender in Angular 18.
    if (isPlatformBrowser(platform)) {
      this.fetchUser();
      timer.start().subscribe(() => this.fetchUser());
    }
  }

  private fetchUser() {
    this.randomUserService.fetchUser();
  }

  resetTimer() {
    this.timer.reset();
    this.fetchUser();
  }
}
