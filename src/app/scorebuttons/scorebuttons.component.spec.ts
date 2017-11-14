import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorebuttonsComponent } from './scorebuttons.component';

describe('ScorebuttonsComponent', () => {
  let component: ScorebuttonsComponent;
  let fixture: ComponentFixture<ScorebuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorebuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorebuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
