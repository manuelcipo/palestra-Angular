import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllenamentoFormComponent } from './allenamento-form.component';

describe('AllenamentoFormComponent', () => {
  let component: AllenamentoFormComponent;
  let fixture: ComponentFixture<AllenamentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllenamentoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllenamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
