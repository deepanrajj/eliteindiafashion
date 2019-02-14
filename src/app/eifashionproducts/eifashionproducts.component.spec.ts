import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EifashionproductsComponent } from './eifashionproducts.component';

describe('EifashionproductsComponent', () => {
  let component: EifashionproductsComponent;
  let fixture: ComponentFixture<EifashionproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EifashionproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EifashionproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
