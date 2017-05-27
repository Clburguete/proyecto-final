import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinvestorComponent } from './editinvestor.component';

describe('EditinvestorComponent', () => {
  let component: EditinvestorComponent;
  let fixture: ComponentFixture<EditinvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditinvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
