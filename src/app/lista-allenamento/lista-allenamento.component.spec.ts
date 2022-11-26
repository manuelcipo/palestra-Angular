import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAllenamentoComponent } from './lista-allenamento.component';

describe('ListaAllenamentoComponent', () => {
  let component: ListaAllenamentoComponent;
  let fixture: ComponentFixture<ListaAllenamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAllenamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAllenamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
