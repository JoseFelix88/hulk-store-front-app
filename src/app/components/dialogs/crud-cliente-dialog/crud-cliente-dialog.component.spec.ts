import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudClienteDialogComponent } from './crud-cliente-dialog.component';

describe('CrudClienteDialogComponent', () => {
  let component: CrudClienteDialogComponent;
  let fixture: ComponentFixture<CrudClienteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudClienteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudClienteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
