import { Component, OnInit } from '@angular/core';

@Component({
  //Fórmula app - nomeComponente
  //Seletor = app-header
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public paginaInicial: string = 'Página Inicial';
  public cadProduto: string = 'Cadastrar Produto';

}
