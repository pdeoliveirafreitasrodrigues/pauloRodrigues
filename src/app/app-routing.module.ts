import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InsertProductComponent } from './components/insert-product/insert-product.component';
//import {angulaExample} from '/Documents/GitHub/MeusProjetos/pauloRodrigues/src/app/angular'


// AQUI VÃO AS ROTAS
const routes: Routes = [
  // PARA CRIAR UMA ROTA TEMOS PENSAR NELA COMO UM OBJETO OBJETO DE ROTA
  // 1 - ZERAR ROTAS
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  // 2 - CRIAR A ROTA DE HOME
  //     DEFINIÇÃO DE ROTA PARA PÁGINA
  { path: 'home',
    loadChildren: () => 
    import('./components/home/home.module').then((h) => h.HomeModule),
},

  { path: 'novo', 
    loadChildren: () => 
    import('./components/insert-product/insert-product.module').then(
      (m) => m.InsertProductModule
    ),
  },


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// PRINCIPAL ARQUIVO DE ROTEAMENTO PARA COMUNICAÇÃO ENTRE PÁGINAS