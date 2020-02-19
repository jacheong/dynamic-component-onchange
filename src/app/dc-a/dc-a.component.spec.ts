import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcAComponent } from './dc-a.component';

describe('DcAComponent', () => {
  let component: DcAComponent;
  let fixture: ComponentFixture<DcAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
