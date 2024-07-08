import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcRioComponent } from './calc-rio.component';

describe('CalcRioComponent', () => {
  let component: CalcRioComponent;
  let fixture: ComponentFixture<CalcRioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcRioComponent]
    });
    fixture = TestBed.createComponent(CalcRioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
