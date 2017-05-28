import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupformComponent } from './startupform.component';

describe('StartupformComponent', () => {
  let component: StartupformComponent;
  let fixture: ComponentFixture<StartupformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
