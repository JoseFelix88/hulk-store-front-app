import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaComprasClienteComponent } from './estadistica-compras-cliente.component';

describe('EstadisticaComprasClienteComponent', () => {
  let component: EstadisticaComprasClienteComponent;
  let fixture: ComponentFixture<EstadisticaComprasClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaComprasClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaComprasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
