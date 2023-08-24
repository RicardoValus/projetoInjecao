import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirNumeroComponent } from './exibir-numero.component';

describe('ExibirNumeroComponent', () => {
  let component: ExibirNumeroComponent;
  let fixture: ComponentFixture<ExibirNumeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibirNumeroComponent]
    });
    fixture = TestBed.createComponent(ExibirNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
