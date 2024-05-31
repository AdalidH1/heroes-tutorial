import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoAdminComponent } from './proceso-admin.component';

describe('ProcesoAdminComponent', () => {
  let component: ProcesoAdminComponent;
  let fixture: ComponentFixture<ProcesoAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcesoAdminComponent]
    });
    fixture = TestBed.createComponent(ProcesoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
