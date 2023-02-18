import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { TelaPedidoComponent } from '../tela-pedido/tela-pedido.component';

@Component({
  selector: 'app-tela-cardapio',
  templateUrl: './tela-cardapio.component.html',
  styleUrls: ['./tela-cardapio.component.sass']
})
export class TelaCardapioComponent implements OnInit {
  produtos: Produto[] = []; 
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient.get<Produto[]>('http://localhost:3000/cardapio')
    .subscribe(produtos => {
      this.produtos = produtos;
    })
  }
}
