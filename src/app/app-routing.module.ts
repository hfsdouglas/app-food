import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCardapioComponent } from './tela-cardapio/tela-cardapio.component';
import { TelaCategoriaComponent } from './tela-categoria/tela-categoria.component';
import { TelaPedidoComponent } from './tela-pedido/tela-pedido.component';

const routes: Routes = [
  { path: 'categoria', component: TelaCategoriaComponent},
  { path: 'cardapio', component: TelaCardapioComponent },
  { path: 'pedido', component: TelaPedidoComponent },
  { path: '', redirectTo: 'categoria', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
