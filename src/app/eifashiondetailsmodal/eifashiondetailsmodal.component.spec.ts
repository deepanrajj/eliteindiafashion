import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EifashiondetailsmodalComponent } from './eifashiondetailsmodal.component';

describe('EifashiondetailsmodalComponent', () => {
  let component: EifashiondetailsmodalComponent;
  let fixture: ComponentFixture<EifashiondetailsmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EifashiondetailsmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EifashiondetailsmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
