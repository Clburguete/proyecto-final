import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorformComponent } from './investorform.component';

describe('InvestorformComponent', () => {
  let component: InvestorformComponent;
  let fixture: ComponentFixture<InvestorformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
