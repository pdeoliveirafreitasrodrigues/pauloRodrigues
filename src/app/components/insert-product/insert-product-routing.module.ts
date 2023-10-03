import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertProductComponent } from './insert-product.component';
//import {angulaExample} from '/Documents/GitHub/MeusProjetos/pauloRodrigues/src/app/angular'


// AQUI VÃO AS ROTAS
const routes: Routes = [

  { path: '', component: InsertProductComponent}

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class insertProductRountingModule { }


// PRINCIPAL ARQUIVO DE ROTEAMENTO PARA COMUNICAÇÃO ENTRE PÁGINAS