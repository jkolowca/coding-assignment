import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID, PlatformRef } from '@angular/core';
import { RandomUserService } from './random-user.service';
import { TimerService } from './timer.service';
import { PauseOnHoverDirective } from './pause-on-hover.directive'
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [PauseOnHoverDirective],
  providers: [TimerService, RandomUserService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      @if (user(); as user) {
        <img
          pause-on-hover
          srcset="
            {{user.picture.medium}} 72w, 
            {{user.picture.large}} 128w" 
          sizes="
            (max-width: 400px) 72px, 
            128px"
          alt="User picture"
        />
        <div class="text-block">
          <span class="text-secondary">Hi, my name is</span>
          <span class="text-primary" pause-on-hover>{{user.name.first}} {{user.name.last}}</span>
        </div>
      } @else {
        <div class="img-placeholder"></div>
        
        <div class="text-block">
          <span class="text-secondary">Hi, my name is</span>
          <span class="text-primary" pause-on-hover>Loading...</span>
        </div>
      }
      <button pause-on-hover (click)="resetTimer()" [disabled]="!user()">New</button>
    `,
  styleUrl: "./people.component.scss"
})
export class PeopleComponent {
  user = this.randomUserService.user;

  constructor(
    private randomUserService: RandomUserService, 
    private timer: TimerService, 
    @Inject(PLATFORM_ID) platform: PlatformRef
  ) {
    // TODO: change to isNextRender in Angular 18
    if(isPlatformBrowser(platform)) {
      timer.start().subscribe(() => randomUserService.fetchUser());
    }
  }

  resetTimer() {
    console.log('click');
    this.timer.reset();
  }
}