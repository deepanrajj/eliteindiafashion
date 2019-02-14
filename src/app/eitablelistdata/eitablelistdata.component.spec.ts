import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EitablelistdataComponent } from './eitablelistdata.component';

describe('EitablelistdataComponent', () => {
  let component: EitablelistdataComponent;
  let fixture: ComponentFixture<EitablelistdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EitablelistdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EitablelistdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
