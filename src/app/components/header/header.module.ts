import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



// modulo importar bibliotecas dentro do modulo
// e essas libs serão utilizadas pelos componentes que foram declarados

// meu modulo pode ter vários componentes
// mas aqui vamos trabalhar com ideia de somente um
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { 

}
