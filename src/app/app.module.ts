import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GeradorNumeroComponent } from './gerador-numero/gerador-numero.component';
import { ExibirNumeroComponent } from './exibir-numero/exibir-numero.component';
import { DadosService } from './dados.service';
import { NumeroCompartilhadoService } from './numero-compartilhado.service';

@NgModule({
  declarations: [AppComponent, GeradorNumeroComponent, ExibirNumeroComponent],
  imports: [BrowserModule],
  providers: [DadosService, NumeroCompartilhadoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
