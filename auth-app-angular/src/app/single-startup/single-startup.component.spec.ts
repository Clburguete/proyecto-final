import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStartupComponent } from './single-startup.component';

describe('SingleStartupComponent', () => {
  let component: SingleStartupComponent;
  let fixture: ComponentFixture<SingleStartupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleStartupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
