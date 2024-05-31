import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgosProyectosComponent } from './riesgos-proyectos.component';

describe('RiesgosProyectosComponent', () => {
  let component: RiesgosProyectosComponent;
  let fixture: ComponentFixture<RiesgosProyectosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiesgosProyectosComponent]
    });
    fixture = TestBed.createComponent(RiesgosProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
