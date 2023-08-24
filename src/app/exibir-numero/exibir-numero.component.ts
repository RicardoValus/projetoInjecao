import { Component } from '@angular/core';
import { NumeroCompartilhadoService } from '../numero-compartilhado.service';

@Component({
  selector: 'app-exibir-numero',
  template: `
    <p>Número Aleatório: {{ numeroAleatorio }}</p>
  `,
})
export class ExibirNumeroComponent {
  constructor(private numeroCompartilhadoService: NumeroCompartilhadoService) {}

  get numeroAleatorio(): number {
    return this.numeroCompartilhadoService.numeroAleatorio;
  }
}
