import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PauseOnHoverDirective } from './pause-on-hover.directive';
import { TimerService } from '../services/timer.service';

@Component({
  template: `<div app-pause-on-hover></div>`,
})
class TestComponent {}

describe('PauseOnHoverDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let divElement: DebugElement;
  let timerSpy: TimerService;

  beforeEach(() => {
    timerSpy = jasmine.createSpyObj<TimerService>('TimerService', {
      pause: undefined,
      resume: undefined,
    });

    TestBed.configureTestingModule({
      imports: [PauseOnHoverDirective],
      declarations: [TestComponent],
      providers: [{ provide: TimerService, useValue: timerSpy }],
    });

    fixture = TestBed.createComponent(TestComponent);
    divElement = fixture.debugElement.query(By.directive(PauseOnHoverDirective));
  });

  it('should create an instance', () => {
    const directive = new PauseOnHoverDirective(timerSpy);
    expect(directive).toBeTruthy();
  });

  it('should pause timer on mouse enter', () => {
    divElement.triggerEventHandler('mouseenter', null);
    expect(timerSpy.pause).toHaveBeenCalled();
  });

  it('should resume timer on mouse leave', () => {
    divElement.triggerEventHandler('mouseleave', null);
    expect(timerSpy.resume).toHaveBeenCalled();
  });
});
