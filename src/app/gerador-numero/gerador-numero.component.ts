import { Component } from '@angular/core';
import { DadosService } from '../dados.service';
import { NumeroCompartilhadoService } from '../numero-compartilhado.service';

@Component({
  selector: 'app-gerador-numero',
  template: `
    <button (click)="gerarNumero()">Gerar Número Aleatório</button>
  `,
})
export class GeradorNumeroComponent {
  constructor(private dadosService: DadosService, private numeroCompartilhadoService: NumeroCompartilhadoService) {}

  gerarNumero(): void {
    this.numeroCompartilhadoService.numeroAleatorio = this.dadosService.gerarNumeroAleatorio();
  }
}
