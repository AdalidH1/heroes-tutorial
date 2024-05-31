import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulacionComponent } from './manipulacion.component';

describe('ManipulacionComponent', () => {
  let component: ManipulacionComponent;
  let fixture: ComponentFixture<ManipulacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManipulacionComponent]
    });
    fixture = TestBed.createComponent(ManipulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
