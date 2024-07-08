import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcCotComponent } from './calc-cot.component';

describe('CalcCotComponent', () => {
  let component: CalcCotComponent;
  let fixture: ComponentFixture<CalcCotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcCotComponent]
    });
    fixture = TestBed.createComponent(CalcCotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
