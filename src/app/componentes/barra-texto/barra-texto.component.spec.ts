import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraTextoComponent } from './barra-texto.component';

describe('BarraTextoComponent', () => {
  let component: BarraTextoComponent;
  let fixture: ComponentFixture<BarraTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
