import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionProyectosComponent } from './administracion-proyectos.component';

describe('AdministracionProyectosComponent', () => {
  let component: AdministracionProyectosComponent;
  let fixture: ComponentFixture<AdministracionProyectosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministracionProyectosComponent]
    });
    fixture = TestBed.createComponent(AdministracionProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
