import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent}
  

  // CASO TIVESSE FILHOS ESTARIAM AQUI
  // { path: 'filho01', component: HomeComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }


// PRINCIPAL ARQUIVO DE ROTEAMENTO PARA COMUNICAÇÃO ENTRE PÁGINAS