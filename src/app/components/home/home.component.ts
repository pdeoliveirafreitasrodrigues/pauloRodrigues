import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Caso o atributo for privado, o HTML não consegue acessar
  //Chamei esse cara lá no HTML utilizando o {{}} do typeScript
  public titulo: string = 'Paulo Violeiro';

  // Função de exemplo pra mexer no botão
  funcao(): void{
    const variavel: number = 10; // const para constantes
    const texto: string = "texto";

    let teste = 10; // let para quando variável alterada

    console.log('Botão clicado!')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
