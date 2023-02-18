import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaCardapioComponent } from './tela-cardapio/tela-cardapio.component';
import { TelaPedidoComponent } from './tela-pedido/tela-pedido.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { TelaCategoriaComponent } from './tela-categoria/tela-categoria.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    TelaCardapioComponent,
    TelaPedidoComponent,
    TelaCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    MatListModule,
    MatButtonModule, 
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'},
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
