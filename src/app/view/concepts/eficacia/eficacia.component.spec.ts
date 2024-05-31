import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EficaciaComponent } from './eficacia.component';

describe('EficaciaComponent', () => {
  let component: EficaciaComponent;
  let fixture: ComponentFixture<EficaciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EficaciaComponent]
    });
    fixture = TestBed.createComponent(EficaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
