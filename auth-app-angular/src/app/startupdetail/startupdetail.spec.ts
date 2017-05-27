import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupdetailComponent } from './startupdetail';

describe('StartupdetailComponent', () => {
  let component: StartupdetailComponent;
  let fixture: ComponentFixture<StartupdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
