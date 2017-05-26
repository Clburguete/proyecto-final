import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInvestorComponent } from './single-investor.component';

describe('SingleInvestorComponent', () => {
  let component: SingleInvestorComponent;
  let fixture: ComponentFixture<SingleInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
