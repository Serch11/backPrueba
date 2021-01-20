import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEstanteComponent } from './mostrar-estante.component';

describe('MostrarEstanteComponent', () => {
  let component: MostrarEstanteComponent;
  let fixture: ComponentFixture<MostrarEstanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarEstanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarEstanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
