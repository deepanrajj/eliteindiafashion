import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EifashionuserComponent } from './eifashionuser.component';

describe('EifashionuserComponent', () => {
  let component: EifashionuserComponent;
  let fixture: ComponentFixture<EifashionuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EifashionuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EifashionuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
