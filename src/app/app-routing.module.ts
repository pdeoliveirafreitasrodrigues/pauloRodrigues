import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
//import {angulaExample} from '/Documents/GitHub/MeusProjetos/pauloRodrigues/src/app/angular'


// AQUI VÃO AS ROTAS
const routes: Routes = [
  // PARA CRIAR UMA ROTA TEMOS PENSAR NELA COMO UM OBJETO OBJETO DE ROTA
  // 1 - ZERAR ROTAS
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  // 2 - CRIAR A ROTA DE HOME
  //     DEFINIÇÃO DE ROTA PARA PÁGINA
  { path: 'home', component: HomeComponent}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// PRINCIPAL ARQUIVO DE ROTEAMENTO PARA COMUNICAÇÃO ENTRE PÁGINAS