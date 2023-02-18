import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';
import { TelaPedidoComponent } from '../tela-pedido/tela-pedido.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-cardapio',
  templateUrl: './tela-cardapio.component.html',
  styleUrls: ['./tela-cardapio.component.sass']
})
export class TelaCardapioComponent implements OnInit {
  
  categoria: string = '';
  produtos: Produto[] = []; 

  constructor(public produtosService: ProdutosService, private route: ActivatedRoute) {}
  
  ngOnInit() {
  
    this.produtosService.getProducts()
      .subscribe(produtos => 
        produtos.map(produto => {
          if (produto.categoria === this.categoria) {
            this.produtos.push(produto);
          }
        })
      );
    
    this.route.queryParams.subscribe(
      params => {
        this.categoria = params['categoria'];
      });
  }
}
