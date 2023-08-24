import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorNumeroComponent } from './gerador-numero.component';

describe('GeradorNumeroComponent', () => {
  let component: GeradorNumeroComponent;
  let fixture: ComponentFixture<GeradorNumeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeradorNumeroComponent]
    });
    fixture = TestBed.createComponent(GeradorNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
