import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.scss']
})
export class InsertProductComponent implements OnInit {

  //Declarar o formulário  - tipo FormGroup
  public formularioProduto: FormGroup;

  // trabalhando com diretivas
  public mostrar: boolean = false; // ou true pra mostrar o elemento
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  // criação e definição do form que vai ser chamado no html
  private createForm(){
    this.formularioProduto = this.formBuilder.group({
      name: 'product name',
      description: 'description for your product',
      code: 'P000',
      costPrice: 0.00,
      salePrice: 0.00,
      preparationTime: '0 MINUTES',
      productType: ''
    })
  }

  enviarFormulario(){
    console.log(this.formularioProduto.value)
  }

  aparecerH5(){
    if(this.mostrar == false){
      this.mostrar = true;
    }else{
      this.mostrar = false;
    }
  }

}
