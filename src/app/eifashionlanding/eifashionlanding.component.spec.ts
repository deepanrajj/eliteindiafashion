import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EifashionlandingComponent } from './eifashionlanding.component';

describe('EifashionlandingComponent', () => {
  let component: EifashionlandingComponent;
  let fixture: ComponentFixture<EifashionlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EifashionlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EifashionlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
