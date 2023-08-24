import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  gerarNumeroAleatorio(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
}
