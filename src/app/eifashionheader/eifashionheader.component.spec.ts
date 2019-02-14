import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EifashionheaderComponent } from './eifashionheader.component';

describe('EifashionheaderComponent', () => {
  let component: EifashionheaderComponent;
  let fixture: ComponentFixture<EifashionheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EifashionheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EifashionheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
