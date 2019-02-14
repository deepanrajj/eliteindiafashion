import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EibillingComponent } from './eibilling.component';

describe('EibillingComponent', () => {
  let component: EibillingComponent;
  let fixture: ComponentFixture<EibillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EibillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EibillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
