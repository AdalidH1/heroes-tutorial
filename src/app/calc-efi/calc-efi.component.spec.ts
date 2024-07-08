import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcEfiComponent } from './calc-efi.component';

describe('CalcEfiComponent', () => {
  let component: CalcEfiComponent;
  let fixture: ComponentFixture<CalcEfiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcEfiComponent]
    });
    fixture = TestBed.createComponent(CalcEfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
