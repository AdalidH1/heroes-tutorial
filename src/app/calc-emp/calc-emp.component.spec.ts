import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcEmpComponent } from './calc-emp.component';

describe('CalcEmpComponent', () => {
  let component: CalcEmpComponent;
  let fixture: ComponentFixture<CalcEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcEmpComponent]
    });
    fixture = TestBed.createComponent(CalcEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
