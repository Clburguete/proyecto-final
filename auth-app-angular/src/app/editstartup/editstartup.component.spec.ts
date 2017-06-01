import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstartupComponent } from './editstartup.component';

describe('EditstartupComponent', () => {
  let component: EditstartupComponent;
  let fixture: ComponentFixture<EditstartupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditstartupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
