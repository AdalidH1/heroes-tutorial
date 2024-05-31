import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EficienciaComponent } from './eficiencia.component';

describe('EficienciaComponent', () => {
  let component: EficienciaComponent;
  let fixture: ComponentFixture<EficienciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EficienciaComponent]
    });
    fixture = TestBed.createComponent(EficienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
